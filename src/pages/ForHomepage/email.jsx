import React, {useState} from 'react';
import './email.css';
//import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

import {Button} from "./Button";
import {CustomLink} from "../../components/CustomLink";
import Modal from "../Modal/Modal";


function Email() {
    const [modalActive,setModalActive]=useState(false)
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    return (

        <div className="section_3">
            <ul className="menu_2">
                <li>

                    <i className="fa fa-paper-plane fa-2x" aria-hidden="false"></i>
                    <h4 className="title_p">EMAIL NEWSLETTER</h4>
                    <p className="text_p">Get in touch with space 24/7</p>
                    <a>
                        {button && <Button buttonStyle='btn--outline'onClick={() => setModalActive(true)}>Click here</Button>}
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
                        </Modal>
                    </a>
                </li>
                <li>
                    <i className="fa fa-pencil fa-2x" aria-hidden="false"></i>
                    <h4 className="title_p">WE WANNA BE BETTER</h4>
                    <p className="text_p">Share your opinion with us.</p>
                    <a>
                        {button && <Button buttonStyle='btn--outline' onClick={() => setModalActive(true)}>Click here</Button>}
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
                        </Modal>

                    </a>

                </li>
            </ul>
        </div>

    );
}

export default Email;
















