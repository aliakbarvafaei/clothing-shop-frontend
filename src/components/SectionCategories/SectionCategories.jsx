import React from 'react';
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import { useTheme } from '../../contexts/theme';
import "./SectionCategories.scss"

function SectionCat(props) {
    const {theme} = useTheme();

    var items = [
        {
            h4: "SAVE 30%",
            h1: "MEN",
            img: men,
        },
        {
            h4: "SAVE 60%",
            h1: "WOMEN",
            img: women,
        },
    ]

    return (
        <div id="sectionCat" className={theme.mode==="DARK" ? "dark" : "" } >
            <div className="row">
            {
                items.map((item,index)=>{
                    return <div className="col-md-6" style={{paddingBottom:"24px"}}>
                        <div className="cat">
                            <img className="catImage" src={item.img} alt="Men" />
                            <div className="catContain">
                                <h4>{item.h4}</h4>
                                <h1>{item.h1}</h1>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default SectionCat;