import React, { useState } from "react";
import '../components/AddNotes.css';


const AddNotes = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [isValidDes, setIsValidDes] = useState(true);
    const [isValidAmo, setIsValidAmo] = useState(true);

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescrip, setDescrip] = useState('');
    const [enteredAmount, setAmount] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        if(event.target.value !== ""){
            setIsValid(true);
        }
    }

    const DescriptionChangeHandler = (event) => {
        setDescrip(event.target.value);
        // console.log(event.target.value);
        if(event.target.value !== ""){
            setIsValidDes(true);
        }
    }

    const AmountChangeHandler = (event) => {
        setAmount(event.target.value);
        // console.log(event.target.value);
        if(event.target.value !== 0){
            setIsValidAmo(true);
        }

    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredTitle.trim().length === 0){
            setIsValid(false);
            return;
        }
        
        if(enteredDescrip.trim().length === 0){
            setIsValidDes(false)
            return;
        }
        
        if(enteredAmount.trim().length === 0){
            setIsValidAmo(false);
            return;
        }
        setIsValid(true);
        setIsValidDes(true);
        setIsValidAmo(true);

        const notesData = {
            title: enteredTitle,
            descrip: enteredDescrip,
            Amount: +enteredAmount,
        };

        // props.onSaveNotesData(notesData);
        saveNewNoteHandler(notesData);
        

        console.log(notesData);
        
        setEnteredTitle('');
        setDescrip('');
        setAmount('');
        
    };


    const saveNewNoteHandler = (enteredNoteData) => {
        const notesData = {
            ...enteredNoteData,
            id: Math.random().toString()
        };
        props.onAddNote(notesData);
        // console.log(notesData);
    };

    return(
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className={`form-group ${!isValid ? 'invalid' : ''}`}>
                    <label htmlFor="formGroupExampleInput">Note Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" className="form-control" id="formGroupExampleInput" placeholder="title"/>
                </div>
                <div className={`form-group ${!isValidDes ? 'invalid' : ''}`}>
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea value={enteredDescrip} onChange={DescriptionChangeHandler} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
                </div>
                <div className={`form-group ${!isValidAmo ? 'invalid' : ''}`}>
                    <label htmlFor="exampleFormControlTextarea1">Amount</label>
                    <input type="number" value={enteredAmount} onChange={AmountChangeHandler} placeholder="Amount" className="form-control" id="exampleFormControlTextarea1" ></input>
                </div>
                <div>
                        <button type="button" className="col-sm-1 btn btn-outline-dark">Close</button>
                        <button type="submit" className="col-sm-1 btn btn-dark">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddNotes;