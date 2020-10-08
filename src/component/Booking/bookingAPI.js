import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const hotelUrl="https://developerfunnel.herokuapp.com/hotelsdetails"
const pBooking = "https://developerfunnel.herokuapp.com/placeBookin";

class BookingAPI extends Component{
    constructor(props){
        super(props)

        this.state={
            order_id: Math.floor(Math.random()*10000),
            name:"",
            phone:"",
            address:"",
            hotel_name:"",
            person:"",
            bookdata:""
        }
    }

    onHandleAddressChange=(event)=>{
        this.setState({address:event.target.value})

    }

    onHandleNameChange=(event)=>{
       // console.log("Name",event.target.value);
        this.setState({name:event.target.value});

    }
    onHandlePersonChange=(event)=>{
        this.setState({person:event.target.value});

    }
    onHandlePhoneChange=(event)=>{
        this.setState({phone:event.target.value});
    }

    onHandleHotelChange=(event)=>{
        this.setState({hotel_name:event.target.value});
    }

    handleChangePerson=(event)=>{
        this.setState({person:event.target.value});
    }
    handleSubmit=(event)=>{
        var params={
            "order_id":this.state.order_id,
            "name":this.state.name,
            "address":this.state.address,
            "phone":this.state.phone,
            "person":this.state.person,
            "hotel":this.state.hotel_name
        };

        this.setState({bookdata:this.state.name});
        console.log("Insid elog",this.state.bookdata);

        fetch(pBooking,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        })
        .then((this.props.history.push('/viewBooking')))

        console.log("Booking call::",params);
    }
    render(){
        return( <div>
            <div className="container">
          <label>Order Id</label>
          <input type="text" name="order_id"
                            value={this.state.order_id} readOnly className="form-control"/>
           
          <label>Hotel Name</label>
          <input type="text" name="hotel_name"
                            value={this.state.hotel_name} readOnly className="form-control" onChange={this.onHandleHotelChange}/>
           <label>Name</label><br></br>
          &nbsp;
           <input type="text" name="name" value={this.state.name}  onChange={this.onHandleNameChange}/><br></br>&nbsp;
           <label>Address</label>
          <br></br>
          &nbsp;
           <input type="text" name="address" onChange={this.onHandleAddressChange}></input><br></br>
          &nbsp;
          &nbsp;
           <label>Phone</label>
          <br></br>
          &nbsp;
           <input type="text" name="phone" onChange={this.onHandlePhoneChange}></input><br></br>
          &nbsp;
          <div className="form-group">
                            <label className="control-label">How Many Person:</label>
                            <select name="person"  
                            className="form-control" onChange={this.handleChangePerson}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                           
                        </div>
<br></br>&nbsp;&nbsp;
<br></br>&nbsp;&nbsp;
           <Link to={`/hotel/${this.props.match.params.id}`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;  
                            
                            
                            <button  className="btn btn-success" onClick={this.handleSubmit}>
                               Submit
                        </button>
        </div>
        </div>)
       
    }

    componentDidMount(){
        axios.get(`${hotelUrl}/${this.props.match.params.id}`)
        .then((response)=>{
            this.setState(({hotel_name:response.data[0].name}))
        })
        
        
    }
}

export default BookingAPI;