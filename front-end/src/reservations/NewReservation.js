import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'; 
import ResFormInput from './ResFormInput';

//SHOULD DISPLAY ERROR MESSAGES RETURNED FROM API

function NewReservation(){
    const history = useHistory();
    
    //Set a state for reservation, SET A VARIABLE FOR INITIAL FORM DATA
    const [reservation,setReservation] = useState({
        first_name : "",
    });


    //SUBMIT HANDLER
    function submitHandler(event){
        event.preventDefault();
        history.push("/");
        //ASSIGN THE DATE AND TIME HERE MAYBE

    }

    //CANCEL HANDLER
    function cancelHandler(){
        history.goBack();
    }

    function changeHandler(event){
        event.preventDefault();
    }

 


    //return a form to input the reservations
    return (
        <div>
            <h1>New Reservation</h1>
            <form onSubmit = {submitHandler}>
                {/* STILL NEED INPUT FORM HERE */}
                <p>Future Input Fields</p>
                <ResFormInput reservation = {reservation}/>
                <div>
                    {/* CANCEL BUTTON */}
                    <button
                    type = "button"
                    className = "btn btn-secondary mr-2"
                    onClick ={cancelHandler}
                    >
                    Cancel
                    </button>
                    {/* SUBMIT BUTTON */}
                    <button type="submit" className = "btn btn-primary">
                    Submit
                    </button>
                </div>
            
            </form>

        </div>
    )



    

    
}

export default NewReservation;