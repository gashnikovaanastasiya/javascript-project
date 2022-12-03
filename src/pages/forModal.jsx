//import './App.css';
import React, {useState} from 'react';
import Modal from "./Modal/Modal";

function Modal_create() {
    const [modalActive,setModalActive]=useState(false)
    return (
        <div className="App">
            <main>
                <button classname='open-btn' onClick={() => setModalActive(true)}>Open modal window</button>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>Enter your email and your feedback</h2>
                        <div className="modal-body">
                            <form className="form" action="#">
                                <input className="form-control form_input" name="user_name" required type="text"
                                       placeholder="email"/>
                                <input className="form-control form_input" name="user_phone" required
                                       type="text" placeholder="feedback"/>
                                <button className="text-uppercase btn-block button" name="submit" type="submit">Send
                                    us!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>   */

        </div>
    );
}
export default Modal_create;


