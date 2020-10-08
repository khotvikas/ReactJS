import React,{Component} from 'react';

import QuickDisplay from './QuickDisplay';

var curl="https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component{

    constructor(){
        super()
        this.state={
            tripType:''
        }
    }
    render(){
        return(
            <div>
                <QuickDisplay tripData={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(curl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log("Quick Display",data);
            this.setState({tripType:data})
        })
    }
    
}

export default QuickSearch;