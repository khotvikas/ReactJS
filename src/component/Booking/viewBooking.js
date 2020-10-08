import React from 'react';

const BookingView = (props) => {
    const renderTable = ({viewData}) => {
        console.log("View Booking",viewData.name);
        if(viewData){
                return(
                    <tr>
                        <td>{viewData.name}</td>
                        <td>{viewData.address}</td>
                        <td>{viewData.phone}</td>
                        <td>{viewData.address}</td>
                    </tr>
                )
        }
    }

    return(
        <div className="container">
            <center><h3>Booking List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>No.Person</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                        <td>{props.name}</td>
                        <td>{props.address}</td>
                        <td>{props.phone}</td>
                        <td>{props.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookingView;