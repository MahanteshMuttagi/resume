import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Contact = () => {
    
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ue9yn5k', 'template_6s7yte9', form.current, 'TZcJKDc8uv6gSBqVl')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessage('Message sent successfully!');
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send the message.');
          alert('Failed to send the message.');
        }
      );
  };

  const resetForm = () => {
    form.current.reset();
    setMessage('');
  };

  return (

    
    <StyledContactForm>
        <h1 className='work' style={{fontSize:"25px", color:"brown", textDecoration:"underline", textDecorationColor:"black"}}>Contact Me...</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name :</label>
        <input type="text" name="user_name" placeholder='Enter name' pattern="[a-zA-Z ]+" title="Name should only contain alphabets and spaces" required />
        <label>Email :</label>
        <input type="email" name="user_email" placeholder='Enter mail Id' required />
        <label>Contact Number :</label>
        <input type="tel" name="user_phone" placeholder='Mobile Number' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" title="Phone number must be fill" required />
        <label>Message Here :</label>
        <textarea name="message" placeholder='message' required />
        <input type="submit" value="Send" />
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
      {message && <p>{message}</p>}
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.50rem;
    width: 400px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(20, 50, 50, 0.1);
  }

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type='submit'] {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-left : 120px;
    margin-right : 120px;
    border-radius:20px;


    &:hover {
      background-color: #0056b3;
    }
  }

  button {
    cursor: pointer;
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    transition: background-color 0.3s;
    margin-left : 120px;
    margin-right : 120px;
    border-radius:20px;

    &:hover {
      background-color: #c82333;
    }
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 1rem;
    color: #28a745; 
  }
`;

export default Contact;
