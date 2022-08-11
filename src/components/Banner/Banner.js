import React, {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import "./banner.scss"

export default function Banner(props)
{
    var items = [
        {
            name: "MEN FASHION",
            class: "https://multikart-react.vercel.app/assets/images/home-banner/1.jpg"
        },
        {
            name: "WOMEN FASHION",
            class: "https://multikart-react.vercel.app/assets/images/home-banner/2.jpg"
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
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    });

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

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }