import React,{Component} from 'react';
import axios from 'axios';
import HotelDetailsDisplay from '../hoteldetail/hotelDetailsDisplay';

var url="https://developerfunnel.herokuapp.com/hotelsdetails/";

class hotelDetialAPI extends Component{
constructor(){
    super()
    this.state={
        hotelDetails:''
    }
}

render(){
console.log("Inside hotel API",this.state.hotelDetails);

    return(<div>
<HotelDetailsDisplay data={this.state.hotelDetails}/>
        
    </div>)
             
}

componentDidMount(){
    var hotelId = parseInt(this.props.match.params.id);
   // console.log("HotelDetails",this.props.match.params.id);
    fetch(`${url}${hotelId}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        //console.log("HotelDetails",data);
        this.setState({hotelDetails:data});
    })
}

}

export default  hotelDetialAPI;
