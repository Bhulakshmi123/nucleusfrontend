import React, { Component } from 'react'
class BusinessMCard extends Component {
    getCardData = ()=> {
        let formattedData = Object.entries(this.props.data);
        console.log('formatted Data', formattedData,formattedData.length);
        let data = [];
        for(let i=0;i<formattedData.length;i++) {
            console.log(formattedData[i].length);
        }
        return data;
    }
    render() {
        return (
            this.getCardData()
        )
    }
}

export default BusinessMCard
