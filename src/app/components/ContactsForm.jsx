'use client'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export default function ContactsForm() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpu35te', //service id goes here
       'template_z6dmo6f', //template id goes here
        form.current, {
        publicKey: 'ZAC8E57VINuHlqUS8', //public key goes here
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        
        <div className ="flex flex-col justify-between w-[616px] h-[685px] ">
          {/* Title*/}
            <form ref= {form} onSubmit = {sendEmail} className = "flex-grow ">
          <div className = "flex flex-col gap-2 w-[616px] h-[100px]">
            <h1 className="font-medium text-6xl leading-16 tracking-tight text-left">Join us</h1>
            <h1 className="text-base font-normal leading-7 text-left text-green-600">Be a part of the business team that puts nature first</h1>
          </div>

          {/*Name */}
          <div className = "flex flex-col justify-between w-[616px] h-[80px] mt-6">
            <h1>Name</h1>
            <div className="flex h-200">
              <input name= "user_name" type="name" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-lg border-green-600" required />
            </div> 
          </div>

          {/* Email*/}
          <div className = "flex flex-col justify-between w-[616px] h-[80px] mt-6">
            <h1>Email</h1>
            <div className="flex h-200">
              <input name= "user_email" type="email" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-lg border-green-600" required />
            </div> 
          </div>

          {/* Message*/}
            <div className = "flex flex-col gap-2 mb-4 w-[616px] h-[212px]  mt-6">
            <h1>Message</h1>
            <textarea
            name= "user_email" className="peer h-[180px] w-full resize-none rounded-lg border border-green-600 px-3 py-2.5 text-sm font-normal"
            placeholder="Type your message...">
            </textarea>
            </div>
          

          {/* Terms checkbox*/}
          <div className = "flex gap-4 mt-6">
            <input type="checkbox" id="some_id" className="
                appearance-none w-4 h-4 border border-black  bg-white
                  mt-1 shrink-0
                checked:bg-gray-400"
            />
            <h1>I accept the Terms</h1>
          </div>

          {/*Submit button */}

          
          <button type="submit" className="mt-10 px-[24px] py-[12px] bg-[#2B9575] text-[16px] font-normal rounded-[8px] text-white">Submit</button>
            
   
        
        
          </form>


        </div>
        

      
    )
}