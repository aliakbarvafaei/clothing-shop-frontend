import React from 'react';
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import "./SectionCategories.scss"

function SectionCat(props) {
    return (
        <div id="sectionCat">
            <div className="row">
                <div className="col-md-6">
                    <div className="cat">
                        <img className="catImage" src={men} alt="Men" />
                        <div className="catContain">
                            <h4>SAVE 30%</h4>
                            <h1>MEN</h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 cat">
                    <div className="cat">
                        <img className="catImage" src={women} alt="Women" />
                        <div className="catContain">
                            <h4>SAVE 60%</h4>
                            <h1>WOMEN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCat;