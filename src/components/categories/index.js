import React, { Component } from 'react'

export default class Categories extends Component {
    showCategory = (list)=>{
        return list.map((item)=>{
            return (<div key={item.id} className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                        {item.name}
                    </a>
                </h4>
            </div>
        </div>)
        })
    }
    
    render() {
        const categories = this.props;
        console.log(categories.categories);
        
        return (
            <div className="panel-group category-products">
                {this.showCategory(categories.categories)}
            </div>
            
        )
    }
}