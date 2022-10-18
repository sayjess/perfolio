import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../images/design/contact.svg'

const Contact = () => {
    //modal
    const [modal, setModal] = React.useState(false);
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
            <div className='contact__form'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" required/>
                    <label>Message</label>
                    <textarea name="user_message" />
                    <input type="submit" value="Send"/>
                </form>
            </div>
            <div className='contact__img'>
                <img className='contact__hero' src={contact} alt=""/>
            </div>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
        )}
    </div>
  );
};

export default Contact;