import React from "react";
import NotesItem from "./NotesItem";

const ShowNotes = (props) => {
  return (
    <div className="container">
      <div className="card border-dark mb-3" >
        <div className="row card-body text-dark">
            <h5 className="col-md-2 card-title">Title</h5>
            <h5 className="col-md-8 card-text">Description</h5>
            <h5 className="col-md-2">Amount</h5>
        </div>
      </div>
      {props.items.map(Notes => (
        <NotesItem
          key={Notes.id}
          title={Notes.title}
          description={Notes.descrip}
          amount={Notes.Amount}
          // date={Notes.date}
        />
      ))}
    </div>
  );
};

export default ShowNotes;
