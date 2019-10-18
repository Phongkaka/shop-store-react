import React, { Component } from 'react'

export default class Categories extends Component {
    
    render() {
        const {categories, onChangeProduct} = this.props;

        const showCategory = (list)=>{
            return list.map((item)=>{
                return (<div key={item.id} className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <button type="button" onClick={() => {
                                onChangeProduct(item.id);
                            }}>
                            {item.name}
                        </button>
                    </h4>
                </div>
            </div>)
            })
        }
        
        return (
            <div className="panel-group category-products">
                {showCategory(categories)}
            </div>
            
        )
    }
}