import React from 'react';
import {WatchFace,ProductDetails} from './Watch.js';
export const Product = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}
class App extends React.Component{
    state={
        productdata:Product,
        currentPreviewSelected:"https://imgur.com/iOeUBV7.png",
        showTime:false
    }
    onColorOptionClicked=(pos)=>{
        const currentStrap=this.state.productdata.colorOptions[pos].imageUrl
        this.setState({currentPreviewSelected:currentStrap})
    }
    displayTime=()=>{
        this.setState({showTime:!this.state.showTime})
        console.log(this.state.showTime)
    }
    render(){
        return(
        <div>
            <WatchFace data={this.state.productdata} currentPreviewSelected={this.state.currentPreviewSelected} showTime={this.state.showTime} displayTime={this.displayTime}/>
            <ProductDetails data={this.state.productdata} onColorOptionClicked={this.onColorOptionClicked} displayTime={this.displayTime} showTime={this.state.showTime}/>
        </div>
        )
    }
}
export default App;