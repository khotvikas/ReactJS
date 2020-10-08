import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import Display from './HooksDisplay'

const url = "https://developerfunnelrest.herokuapp.com/location"

function Hooks () {


    const[title]=useState("Hooks");
    const[value,setValue]=useState(0);

    const [city,setCity] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

        return(
            <div>
               <h4>{value}</h4> 

               <button onClick={()=>{setValue(value+1)}}>Click</button>

             <Display citydata={city} />
              
            </div>
        )
    }


export default Hooks;