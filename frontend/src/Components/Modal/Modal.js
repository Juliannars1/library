import React from "react";
import './Modal.css';

const Modal = ({ id, titulo, contenido }) => (
    <div id={id} className="modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" data-bs-dismiss="modal" aria-label="Close">&times;</span>
                <h2>{id}-{titulo}</h2>
            </div>
            <div className="modal-body">
                <p>{contenido}</p>
                <p>Some other text...</p>
            </div>
            <div className="modal-footer">
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
);

export default Modal;
