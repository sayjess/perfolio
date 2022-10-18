import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../images/design/contact.svg'

const Contact = () => {
    //modal
    const [modal, setModal] = React.useState(true);
    const toggleModal = () => {
        setModal(newVal => !newVal);
      };
    const active = modal ? 'active-modal' : 'active-modal';

    //emailjs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        //set modal upon sending email
        setModal(newVal => !newVal);
        emailjs.sendForm('service_se0gp3t', 'template_aq14twk', form.current, 'MBIa8Sh7M4UFjETFw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
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
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://twitter.com/" title="">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" title="">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" title="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/" title="">
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
            {!modal && <div className='contact__form'>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" required/>
                  <label>Message</label>
                  <textarea name="user_message" />
                  <input type="submit" value="Send"/>
              </form>
            </div>}
            {modal && <div className="modal">
              <div className="modal-content">
                <h2 className='thank-you'>Thank you!</h2>
                <p>I appreciate you reaching out. I will get back to you as soon as I can.</p>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>}
          </div>
          <div className='contact__img'>
            <img className='contact__hero' src={contact} alt=""/>
          </div>
        </div>
  </div>
  );
};

export default Contact;