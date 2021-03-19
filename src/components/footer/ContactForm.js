import React, {useState} from 'react';
import './ContactForm.css';
import {useForm} from 'react-hook-form';
import {db} from '../firebase';

const ContactForm = () => {
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');

    let {register, handleSubmit} = useForm();

    
    handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            alert(`Message has been submitted 👍`);
        })
        .catch(error => {
            alert(error.message);
        });
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <label for='email'>*Your email</label>
            <input id='email' className='input' type='email' placeholder='*Your email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} ref={register({required: true})} />
            <label for='subject'>*Subject</label>
            <input id='subject' className='input' type='text' placeholder='*Subject' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} ref={register({required: true})} />
            <label for='message'>*Message</label>
            <textarea id='message' className='input messageArea' type='text' placeholder='*Message...' name='message' value = {message} onChange={(e) => setMessage(e.target.value)} ref={register({required: true})} />
            <p>* The field is required</p>
            <button className='submitButton' type='submit'>
                <span className='submitText'>SUBMIT</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
            </button>
            
        </form>
    )
}

export default ContactForm;