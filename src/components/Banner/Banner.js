import React from 'react';
import banner_1 from "../../assets/images/banner-1.jpg";
import banner_2 from "../../assets/images/banner-2.jpg";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./banner.scss"


export default function Banner(props)
{
    var items = [
        {
            name: "MEN FASHION",
            class: banner_1
        },
        {
            name: "WOMEN FASHION",
            class: banner_2
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
        <Paper className="paper" style={{backgroundImage: `url(${props.item.class})`}}>
            <div className="textPaper">
                <p>Welcome To Fashion</p>
                <h1>{props.item.name}</h1>

                <Button className="CheckButton btn btn-solid shopButton">
                    SHOP NOW
                </Button>
            </div>
        </Paper>
    )
}
