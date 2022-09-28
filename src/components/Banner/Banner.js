import React from 'react';
import banner_1 from "../../assets/images/banner-1.jpg";
import banner_2 from "../../assets/images/banner-2.jpg";
import classNames from "classnames";
import Carousel from 'react-multi-carousel';
import styles from "./Banner.module.scss"


export default function Banner(props)
{
    
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1279 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1279, min: 767 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };
    var items = [
        {
            title: "Welcome To Fashion",
            name: "MEN FASHION",
            class: banner_1,
            buttonText: "SHOP NOW",
        },
        {
            title: "Welcome To Fashion",
            name: "WOMEN FASHION",
            class: banner_2,
            buttonText: "SHOP NOW",
        }
    ]
    return (<>
        <div className='overflow-hidden w-[100%]'>
                <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={true}>
                {
                    items.map((item,index)=>{
                        return <Item item={item} key={index}/>
                    })
                }
                </Carousel>
        </div>
        </>
    )
}

function Item(props)
{
    
    return (
        <div className={styles.paper} style={{backgroundImage: `url(${props.item.class})`}}>
            <div className={styles.textPaper}>
                <p>{props.item.title}</p>
                <h1>{props.item.name}</h1>

                <button className={classNames("CheckButton","btn","btn-solid",styles.shopButton)}>
                    {props.item.buttonText}
                </button>
            </div>
        </div>
    )
}
