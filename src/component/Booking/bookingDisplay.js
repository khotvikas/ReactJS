import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const BookingDisplay =(props)=>{
    return(
        <div className="container">
          <label>Order Id</label>
          <br></br>
          &nbsp;
           <input text></input><br></br>&nbsp;
           <label>Name</label>
          <br></br>
          &nbsp;
           <input text></input><br></br>&nbsp;
           <label>Amount</label>
          <br></br>
          &nbsp;
           <input text></input>
<br></br>&nbsp;&nbsp;
<br></br>&nbsp;&nbsp;
           <Link to={`/hotel/${this.props.match.params.id}`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;  
                            
                            
                            <Link  className="btn btn-success">Book</Link>
        </div>
        
    )
}

export default BookingDisplay;