import React, { useState } from 'react'
import bg from '../../assets/contact-bg.jpg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [query, setQuery] = useState('')
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    console.table({
      name,
      email,
      number,
      query
    });
    toast.success('Form Submitted', toastOptions);
  }
  return (
    <>
      <div className="h-[95.7vh] w-full bg-black -z-10 absolute top-0 left-0 mt-8 opacity-95">
        <img src={bg} alt="bg" className="w-full h-full" />
      </div>
      <div className="z-20 text-white h-[40rem] flex flex-col justify-center items-end opacity-100 pr-10">
        <form className='min-w-fit flex flex-col' onSubmit={e => handleSubmit(e)}>
          <span className="text-xl tracking-widest uppercase">fill this form to contact us</span>
          <input type="text" name="name" required value={name} onChange={e => setName(e.target.value)} placeholder="What's your name?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <input type="number" name="p_number" required value={number} onChange={e => setNumber(e.target.value)} placeholder="Where should we call you?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Where should we mail you?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <textarea name="query" rows={10} cols={70} required value={query} onChange={e => setQuery(e.target.value)} placeholder="Howdy fella?" className="p-2 my-2 rounded-lg bg-transparent text-white border border-white focus:outline-1 focus:outline-cyan-400" />
          <button type="submit" className="border border-white rounded-lg py-2 my-2 bg-gradient-to-tr text-lg from-cyan-500 to-blue-500">FIRE AWAY</button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
