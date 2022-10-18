/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../images/design/contact.svg'

const Contact = () => {
    //modal
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
      setModal(() => {
        setModal(false)
      })
    }
     
    const active = modal ? 'active-modal' : 'active-modal';
    const modalToggle = modal ? 'modal modal-on' : 'modal modal-off';

    //emailjs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(modal)
        emailjs.sendForm('service_se0gp3t', 'template_aq14twk', form.current, 'MBIa8Sh7M4UFjETFw')
        .then((result) => {
          // console.log(result.text);
        
          //set modal upon sending email
          setModal(true);
          //set Modal state to false after 5 seconds
          setTimeout(() => {
            setModal(false);
            }, 4000);
            document.querySelector("form").reset();
        }, (error) => {
          document.querySelector("form").reset();
          console.log(error.text);
          }); 
        
    };

  return (
    <div className={`contact ${active}`}>
        <h2>Get In Touch</h2>
        <div className='container'>
          <div className='contact__initial flex'>
            <p className='contact__msg'>
              Whether you just want to say “Hi!”, talk about Web Development, see if we can build amazing projects together, or simply talk about our common interests -- please do not hesitate to leave me a message!
            </p>
            <p className='socials flex'>
              <a href="https://facebook.com/" title="">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://twitter.com/" title="">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" title="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" title="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/" title="">
                <i className="fa-brands fa-github"></i>
              </a>
            </p>
          <div className='contact__form'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Message</label>
                <textarea name="user_message"/>
                <input type="submit" value="Send"/>
            </form>
          </div>
          </div>
          <div className='contact__img'>
            <img className='contact__hero' src={contact} alt=""/>
          </div>
          <div className={modalToggle }>
              <div className="modal-content">
                <div className='modal-cntnt-first'>
                  <i className="fa-solid fa-circle-check"></i>
                  <h2>Message Sent</h2>
                </div>
                <a href="#" className="close-modal" onClick={toggleModal}>
                  <i className="fa-solid fa-xmark" onClick={toggleModal}></i>
                </a>
              </div>
            </div>
        </div>
  </div>
  );
};

export default Contact;