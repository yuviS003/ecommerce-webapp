import React, { useRef, useState } from 'react'
import bg from '../../assets/contact-bg.jpg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [from_name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g8bn9zs', 'template_dwz6x56', form.current, '9Ka-4ajJeg2KC29Uu')
      .then((result) => {
        console.log(result.text);
        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
        toast.success('Your message has been noted', toastOptions)
      }, (error) => {
        console.log(error.text);
        toast.error(error.text, toastOptions)
      });
  };
  return (
    <>
      <div className="h-[95.7vh] w-full bg-black -z-10 absolute top-0 left-0 mt-8 opacity-95">
        <img src={bg} alt="bg" className="w-full h-full" />
      </div>
      <div className="z-20 text-white h-[40rem] flex flex-col justify-center items-end opacity-100 pr-10">
        <form className='min-w-fit flex flex-col' ref={form} onSubmit={handleFormSubmit}>
          <span className="text-xl tracking-widest uppercase">fill this form to contact us</span>
          <input type="text" name="from_name" required value={from_name} onChange={e => setName(e.target.value)} placeholder="What's your name?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <input type="number" name="p_number" required value={number} onChange={e => setNumber(e.target.value)} placeholder="Where should we call you?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Where should we mail you?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <textarea name="message" rows={10} cols={70} required value={message} onChange={e => setMessage(e.target.value)} placeholder="Howdy fella?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <button type="submit" className="border border-white rounded-lg py-2 my-2 bg-gradient-to-tr text-lg from-cyan-500 to-blue-500">FIRE AWAY</button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
