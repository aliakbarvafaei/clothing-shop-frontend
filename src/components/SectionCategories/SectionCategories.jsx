import React from 'react';
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import classNames from "classnames";
import { useTheme } from '../../contexts/theme';
import styles from "./SectionCategories.module.scss"

function SectionCat(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";

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
        <div className={classNames(styles.sectionCat, themeClass)} >
            <div className="row">
            {
                items.map((item,index)=>{
                    return ( <div key={index} className="col-md-6" style={{paddingBottom:"24px"} }>
                        <div className={styles.cat}>
                            <img className={styles.catImage} src={item.img} alt="Men" />
                            <div className={styles.catContain}>
                                <h4>{item.h4}</h4>
                                <h1>{item.h1}</h1>
                            </div>
                        </div>
                    </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default SectionCat;