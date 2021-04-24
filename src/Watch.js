import React from 'react';
import './Watch.css';

export const WatchFace=(props)=>{
        let d=new Date();
        let hrs= (d.getHours()>9)?d.getHours():"0"+d.getHours();
        let mins= (d.getMinutes()>9)?d.getMinutes():"0"+d.getMinutes();
        return(
            <div>
                <span className="main">
                <img src={props.currentPreviewSelected} width="500px" height="500px"/>
                {props.showTime===true?
                    <div className="time">
                    <p>{`${hrs}:${mins}`}</p>
                </div>:
                null}
                </span>
            </div>
        )
    }
export const ProductDetails=(props)=>{
        const colorOptions=props.data.colorOptions.map((item,pos)=>{
            return <img key={pos} src={item.imageUrl} alt={item.styleName}width="100px" height="100px" onClick={()=>props.onColorOptionClicked(pos)}/>
        })
        return(
                <div className="side">
                    <h1>{props.data.title}</h1>
                    <p>{props.data.description}</p>
                    <h3>Select Color</h3>
                    <hr></hr>
                    {colorOptions}
                    <h3>Features</h3>
                    <button onClick={()=>props.displayTime()}>Time</button>
                    <button>Heart Rate</button>
                    <br></br>
                    <button className="buy">Buy Now</button>
                </div>
        )
    }
                

