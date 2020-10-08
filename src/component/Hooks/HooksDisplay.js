import React from 'react';
import CostFilter from '../Filter/PriceFilter';

const HooksDisplay=(props)=>{
    console.log("Display city",props);
    const renderlist = ({citydata}) => {
        if(citydata){
            return citydata.map((item) => {
                return(
                    <div>
                        <h2>{item.name} | {item.city_name}</h2>
                    </div>
                )
            })
        }

        return(
        <div>
        
        {renderlist(props)}

        
        </div>
    )
}
}
export default HooksDisplay;