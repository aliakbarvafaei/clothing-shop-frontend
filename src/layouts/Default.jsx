import Header from '../components/Header/Header'
import MainMenu from '../components/mainMenu/MainMenu'
import React, { useEffect } from 'react'
import { Route, Switch  } from 'react-router-dom'
import AppRoutes from '../routes'
import ProtectedRoute from '../components/ProtectedRoute'
import Footer from '../components/Footer/Footer'
import FixedButtonRight from '../components/FixedButtonRight/FixedButtonRight'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import Toast from '../components/Toast/Toast'
import { useToast } from '../contexts/ToastState'
import { useDispatch } from 'react-redux'
import { getUser } from '../services/api'

const DefaultLayout = (props) => {
  const { toastState, setToastState } = useToast();
  const dispatch = useDispatch();
  function addItemOnce(arr, value) {
    arr.push(value);
    return arr;
}
  useEffect(()=>{
      const value = localStorage.getItem('token_user')
      if(JSON.parse(value)!==""){
        getUser()
          .then((response) => {
            dispatch({ type: 'login',payload: [response.data.email,JSON.parse(value)]});
          })
          .catch(err => {
            dispatch({ type: 'logout' });
            setToastState(old=>addItemOnce(old.slice(),{
              title: "2",
              description: "You have not used the site for a long time. Please login again", key:Math.random()
              }))
            try {
              localStorage.setItem('token_user', JSON.stringify(''))
            } catch (e) {
              console.error({ e })
            }
          });
      }
      else{
        dispatch({ type: 'logout' });
        try {
          localStorage.setItem('token_user', JSON.stringify(''))
        } catch (e) {
          console.error({ e })
        }
      }
    },[])

  function destroyToast(indexKey){
    setToastState(old=>removeItemOnce(old.slice(),indexKey));
  }
  function removeItemOnce(arr, indexKey) {
    var index=-1;
    for(let i=0;i<arr.length;i++){
      if(arr[i].key===indexKey){
        index=i;
        break;
      }
    }
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <FixedButtonRight />
      <Header />
      <MainMenu />
      <MobileMenu />
      {/* <Sidebar {...props} routes={AppRoutes} /> */}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch >
            {AppRoutes.map((prop, key) => {
              if(prop.private)
                return <ProtectedRoute path={prop.path} key={key} component={prop.component} />
              else{
                return ( <Route exact path={prop.path} key={key} component={prop.component} />)
              }
            })}
          </Switch >
        </div>
      </div>
      <Footer />
      <div className='fixed top-[20px] right-[20px] flex flex-col gap-[15px] z-[1002]'>
        {toastState.length>0 &&  toastState.map((item,index)=>{
          return <Toast type={item.title} description={item.description} indexKey={item.key} destroyToast={destroyToast} key={index}/>
        })}
      </div>
    </div>
  )
}

export default DefaultLayout
