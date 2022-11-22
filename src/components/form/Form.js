import React from "react";
import { useState, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import './form.css'

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const refName = useRef();
    const refEmail = useRef();
    const refMesage = useRef();

    const sendMessage = (e) => {
        e.preventDefault();
        const data = {
          name,
          email,
          message,
        };
      };
      const handleClear = () => {
        refName.current.value = ''
        refEmail.current.value = ''
        refMesage.current.value = ''
      }

    return (
        <form className="contacts__form" onSubmit={sendMessage}>
            <ReactTooltip></ReactTooltip>
            <ul>
                <li className="contacts__form_input">
                    <input ref={refName} data-tip="enter name" data-class="imput_tips" type='text' name='name' placeholder="Name" onChange={e => setName(e.target.value)}/>
                    <input ref={refEmail} data-tip="enter email" data-class="imput_tips" type='text' name='email' placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </li>
                <li>
                    <textarea ref={refMesage} data-tip="enter your message" data-class="imput_tips" rows="8" type="textarea" placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
                </li>
                <li>
                    <button className="contacts__form_btn" onClick={handleClear}>Send Message</button>
                </li>
            </ul>              
        </form>
    );
};


export default Form;