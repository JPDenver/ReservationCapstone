
import React from 'react';
import NewReservation from './NewReservation';

function ResFormInput(reservation){

    function changeHandler(event){
        event.preventDefault();
    }

    return(
        <div className = "row mb-3">
            <div className = "col-6 from-group">
                <label className = "form-label" htmlFor="first_name">
                    First Name
                </label>
                <input
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    type="string"
                    value = {reservation.first_name}
                    onChange = {changeHandler}
                    required={true}
                />
                <small className = "form-text text-muted">First Name</small>
            </div>
        </div>
    )

}


export default ResFormInput;