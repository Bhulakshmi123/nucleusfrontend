import React, { Component } from 'react'
import './BusinessMCard.css'
import { getDateFormat_1 } from '../../commonFunctions/dates'
import { matcherHint } from 'jest-matcher-utils';
class BusinessMCard extends Component {
    nameFunction(props) {
        let html = [];
        let data = this.props.data;
        
        for (let x in data) {
            html.push(<div className="dateStyles" key={x}>
                <div>
                {   getDateFormat_1(x)}
                </div>
            </div>)
            for (let y in data[x]) {
                html.push(<div key={data[x][y].projectId} className="project">
                    <div className="projectDetails">
                        <div className="projectName">{data[x][y].projectName}</div>
                        <div className="projectLocation"><i className="fas fa-map-marked-alt nbSpan"></i>{data[x][y].projectLocation}</div>
                    </div>
                    <div className="projectContactDetails">
                        <div className="projectPointOfContact"><i className="fas fa-user-alt nbSpan"></i>{data[x][y].projectPointOfContact}</div>
                        <div className="projectpocNo"><i className="fas fa-phone-square nbSpan"></i>{data[x][y].pocNo}</div>
                    </div>
                    <div className="typeOfService">
                        <div>{data[x][y].typeOfService}</div>
                    </div>
                    <div className="equipmentCount">
                        <div>{data[x][y].equipmentCount}</div>
                        <p>Equipment</p>
                    </div>
                </div>);
            }
            html.push(<div className="divBreaker" key={Math.random()*Math.random()}></div>)
        }
        return html;
    }
    render() {
        return (
            <div className="businessCard">{this.nameFunction()}</div>
        )
    }
}
export default BusinessMCard
