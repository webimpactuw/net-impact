'use client'
import emailjs from '@emailjs/browser';
import React, { useRef, useState} from 'react';
import { z } from "zod";
export default function ContactsForm() {

    const [status, setStatus] = useState("idle");  

    const form = useRef();
    

    const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm('service_rpu35te', //service id goes here
       'template_z6dmo6f', //template id goes here
        form.current, {
        publicKey: 'fl53x_ue_JXSjQB-da', //public key goes here
      })
      .then(
        () => {
          setStatus("success")
          console.log('SUCCESS!');
        },
        (error) => {
          setStatus("error")
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        
        <div className ="flex flex-col justify-between lg:w-[45%] h-[685px] mb-10 lg:mb-0">
          {/* Title*/}
            <form ref= {form} onSubmit = {sendEmail} className = "flex-grow ">
          <div className = "flex flex-col gap-2 w-full h-[100px]">
            <h1 className="font-medium text-6xl leading-16 tracking-tight text-left">Join us</h1>
            <h1 className="text-base font-normal leading-7 text-left text-green-600">Be a part of the business team that puts nature first</h1>
          </div>

          {/*Name */}
          <div className = "flex flex-col justify-between w-full h-[80px] mt-6">
            <h1 className='font-normal'>Name</h1>
            <div className="flex h-200">
              <input name= "user_name" type="name" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-lg border-green-600" required />
            </div> 
          </div>

          {/* Email*/}
          <div className = "flex flex-col justify-between w-full h-[80px] mt-6">
            <h1 className='font-normal'>Email</h1>
            <div className="flex h-200">
              <input name= "user_email" type="email" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-lg border-green-600" required />
            </div> 
          </div>

          {/* Message*/}
            <div className = "flex flex-col gap-2 mb-4 w-full h-[212px]  mt-6">
            <h1 className='font-normal'>Message</h1>
            <textarea
            name= "user_email" className="peer h-[180px] w-full resize-none rounded-lg border border-green-600 px-3 py-2.5 text-sm font-normal"
            placeholder="Type your message...">
            </textarea>
            </div>
          

          {/* Terms checkbox
           <div className = "flex gap-4 mt-6">
            <input type="checkbox" id="some_id" className="
                appearance-none w-4 h-4 border border-black  bg-white
                  mt-1 shrink-0
                checked:bg-gray-400"
            />
            <h1 className='font-normal'>I accept the <a className="underline cursor-pointer">Terms</a></h1>
          </div>
          */}
         
         <div className="server-message pt-4 text-green-600">
            {status === "success" ? (
              <p className="text-green-600">Successfully sent your message!</p>
            ) : null}
            {status === "error" ? (
              <p className="text-orange-600">There was an error with sending your message. Please email {} instead.</p>
            ) : null}
          </div>
          {/*Submit button */}

          
          <button type="submit" className="mt-10 px-[24px] py-[12px] bg-[#2B9575] text-[16px] font-normal rounded-[8px] text-white checked:bg-gray-400 hover:bg-teal-900 active:bg-teal-400 transition delay-15009">Submit</button>
            
   
        
        
          </form>


        </div>
        

      
    )
}
