import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditContactForm from './EditContactForm';


function Contacts(props) {
    const [isModalVisible, setShowModal] = useState(false);

    function showModal() {
        setShowModal(true);
    }

    function hideModal() {
        setShowModal(false);
    }
    return (
        <div>
            <div className="row  ContactInfo">

                <div className="col-md-3">{props.user.name}</div>
                <div className="col-md-3">{props.user.phone_number}</div>
                <div className="col-md-2">{props.user.location}</div>
                <div className="col-md-4">
                    <button className="addnew" onClick={showModal}> Edit</button>
                    <Modal show={isModalVisible} onHide={hideModal}>
                        <Modal.Header clodeButton>
                            <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditContactForm
                                user={props.user}
                                updateUser={props.updateUser}
                                hideModal={hideModal} />
                        </Modal.Body>
                    </Modal>
                    <button className="remove" onClick={() => {
                        props.delete(props.user.id);
                    }}
                    >Delete</button>
                </div>
            </div>


        </div>
    );
}

export default Contacts;
