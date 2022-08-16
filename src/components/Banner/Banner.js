import React from 'react';
import banner_1 from "../../assets/images/banner-1.jpg";
import banner_2 from "../../assets/images/banner-2.jpg";
import classNames from "classnames";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styles from "./Banner.module.scss"


export default function Banner(props)
{
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
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className={styles.paper} style={{backgroundImage: `url(${props.item.class})`}}>
            <div className={styles.textPaper}>
                <p>{props.item.title}</p>
                <h1>{props.item.name}</h1>

                <Button className={classNames("CheckButton","btn","btn-solid",styles.shopButton)}>
                    {props.item.buttonText}
                </Button>
            </div>
        </Paper>
    )
}
