import { render } from '@testing-library/react';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './hotelDetails.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = `https://developerfunnel.herokuapp.com/hotelsdetails`
const HotelDetailsData =(props)=>{
    console.log("HotelDetailsData",props);

    const onClickEvent=(event)=>{
        console.log("Inside button click");
        
    }

    const renderList=({data})=>{
       // console.log("inside the renderList :: ",data)
        if(data){
           // console.log("inside the if")
            return data.map((item)=>{
              //  console.log("inside the renderList item :: ",item)
               return(
                <div className="col-sm-3">
                <img className="ImageDetails" src={item.thumb} class="center"
                />
               <Tabs class="nav nav-tabs">
    <TabList>
      <Tab>Hotel Details</Tab>
      <Tab>Contact</Tab>
    </TabList>
 
    <TabPanel>
               <h2>{item.name}</h2>

               <h3>{item.city_name}</h3>

               <h3>{item.locality}</h3>

               <div>
  <Link to={`/listData/${sessionStorage.getItem("tripid")}`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;  
                            
                            
                            <Link to={`/booking/${item._id}`} className="btn btn-success">Book</Link>
  </div>
    </TabPanel>
    <TabPanel>
      <h2>Contact:98655224</h2>
    </TabPanel>
  </Tabs>
  
            </div>
               )


            })
        }

    }

    return(<div className="container">
        {renderList(props)}
    </div>
    )
}

export default HotelDetailsData;