import React from "react";
import "./Component4header1.css"
function Component4header1(props){
    return(
        <>
        <div className="second-parent">
            <div className="border1">
        <img src={props.image1} className="image1"></img>
        </div>
        <div className="second">
        <h1 className="heading1">{props.name1}</h1>
        <p className="para1">{props.description1}</p>
        <button className="btn1">{props.text1}</button>
        </div>
        </div>

        </>
    )
}
export default Component4header1