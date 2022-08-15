import DefaultLayout from '../layouts/Default'
// import AddProduct from '../pages/add-product'
// import ContactUsPage from '../pages/contact-us'
import Home from '../pages/Home'
// import EditProduct from '../pages/edit-product'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
// import ProductsList from '../pages/products-list'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  
    {
    path: '/home',
    name: 'داشبورد',
    icon: 'fa fa-tachometer-alt',
    component: Home,
    showInNav: true,
    private: false,
  },
  // {
  //   path: '/all-products',
  //   name: 'همه محصولات',
  //   icon: 'fa fa-list',
  //   component: ProductsList,
  //   showInNav: true,
  //   private: true,
  // },
  // {
  //   path: '/add-product',
  //   name: 'افزودن محصول',
  //   icon: 'fa fa-plus',
  //   component: AddProduct,
  //   showInNav: true,
  //   private: true,
  // },
  // {
  //   path: '/products/edit/:id',
  //   name: 'ویرایش محصولات',
  //   component: EditProduct,
  //   showInNav: false,
  //   private: true,
  // },
  {
    path: '/login',
    name: 'ورود',
    icon: 'fa fa-plus',
    component: LoginPage,
    showInNav: false,
  },
  {
    path: '/register',
    name: 'ثبت نام',
    icon: 'fa fa-plus',
    component: RegisterPage,
    showInNav: false,
  },
  // {
  //   path: '/contact-us',
  //   name: 'ارتباط با ما',
  //   icon: 'fa fa-phone',
  //   component: ContactUsPage,
  // },
  // {
  //   path: '/',
  //   name: 'اصلی',
  //   icon: 'fa fa-tachometer-alt',
  //   component: Home,
  //   showInNav: true,
  //   private: false,
  // },
  { path: '/', pathTo: '/home', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }
