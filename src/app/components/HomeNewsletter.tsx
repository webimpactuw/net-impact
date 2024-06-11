'use client'
import React from "react";
import axios from "axios"
import { useState, FormEvent } from "react";

const HomeNewsletter = () => {
    const [email, setEmail] = useState<string>("");
    const [status, setStatus] = useState<
      "success" | "error" | "loading" | "idle"
    >("idle");
    const [responseMsg, setResponseMsg] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>();
  
    async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setStatus("loading");
      try {
        const response = await axios.post("/api/subscribe", { email });
  
        setStatus("success");
        setStatusCode(response.status);
        setEmail("");
        setResponseMsg(response.data.message);
      } catch (err) {
        
        if (axios.isAxiosError(err)) {
          setStatus("error");
          setStatusCode(err.response?.status);
          setResponseMsg(err.response?.data.error);
        }
      }
    }
  
    return (
      <>
        <form
          
          onSubmit={handleSubscribe}
        >
          <div className="flex gap-4">
            <div className="w-3/4 flex h-200 bg-white border border-[#2B9575] rounded-full">
                <input name= "user_email" id="email" type="email" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-full "
                 placeholder ="Join our team by adding your email..."
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status == "loading"}
                required />
            </div> 
            
            

            <button className="cursor-pointer w-1/5 flex bg-[#2B9575] uppercase rounded-full justify-center items-center px-6 py-3 hover:bg-teal-900 active:bg-teal-400 transition delay-15009  gap-2 "
            type="submit"
            disabled={status == "loading"}>
                <div className="text-white  cursor-pointer text-base font-normal font-['General Sans'] leading-normal">Join Us</div>
            </button>
          </div>
          <div className="server-message pt-4 text-green-600">
            {status === "success" ? (
              <p className="text-green-600">{responseMsg}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-orange-600">{responseMsg}</p>
            ) : null}
          </div>
        </form>
      </>
    );
  };
  export default HomeNewsletter;