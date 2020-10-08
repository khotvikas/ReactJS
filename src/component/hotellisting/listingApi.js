import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import QuickFilter from '../Filter/QuickFilter';
import PriceFilter from '../Filter/PriceFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter(sortedData){
        this.setState({hotellist:sortedData})
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <QuickFilter roompertype={(data)=>{this.setDataPerFilter(data)}}></QuickFilter>
                        <PriceFilter costFilter={(data)=>{this.setDataPerFilter(data)}}></PriceFilter>

                    </div>

                    <div className="col-md-10">
                        <ListingDisplay listData={this.state.hotellist} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('tripid',tripid);
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default Listing;