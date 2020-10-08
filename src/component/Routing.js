import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import listingApi from './hotellisting/listingApi'
import hotelDetialAPI from './hoteldetail/hotelDetialAPI'
import bookingAPI from './Booking/bookingAPI';
import viewBooking from './Booking/viewBooking';
import Hooks from './Hooks/Hooks';
const Routing = ()=>{
    return(
        <BrowserRouter>
         <div>
           <Header/>
           <Route exact path ="/" component={Home}></Route>
           <Route exact path ="/listData/:id" component={listingApi}></Route>
           <Route exact path ="/hotel/:id" component={hotelDetialAPI}></Route>
           <Route exact path ="/booking/:id" component={bookingAPI}></Route>
           <Route exact path ="/viewBooking" component={viewBooking}></Route>
           <Route exact path ="/Hooks" component={Hooks}></Route>
          <Footer/>                     
         </div>
        </BrowserRouter>
    )
}

export default Routing;