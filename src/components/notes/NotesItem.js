import React from "react";

const NotesItem =(props)=>{

    return(
        <div className='container'>
                <div className="card border-dark mb-3" >
                    <div className="card-header">Header</div>
                    <div className="row card-body text-dark">
                        <h5 className="col-md-2 card-title">{props.title}</h5>
                        <p className="col-md-8 card-text">{props.description}</p>
                        <p className="col-md-2">${props.amount}</p>
                    </div>
                </div>
        </div>
        // <Card style={{margin: "0 20px 0 0"}} >
        //     <div class="card-header">Header</div>
        //     <Card.Body>
        //     <Card.Title>{props.title}</Card.Title>
        //     <Card.Text>
        //         {props.description}
        //     </Card.Text>
        //     </Card.Body>
        //     <Card.Footer>
        //     <small className="text-muted">Last updated 3 mins ago</small>
        //     </Card.Footer>
        // </Card>
    );
}

export default NotesItem;