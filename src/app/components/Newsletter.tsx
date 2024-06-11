'use client'
import React from "react";
import axios from "axios"
import { useState, FormEvent } from "react";

const FooterNewsletter = () => {
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
    setTimeout(() => {
        setEmail("");
        setStatus("idle");
        setStatusCode(0);
      }, 10000);
  
    return (
      <>
        <form
          
          onSubmit={handleSubscribe}
        >
          <div className="flex gap-4">
            <div className="flex h-200 w-full">
                <input name= "user_email" id="email" type="email" className="w-full h-[48px] p-4 border text-gray-900 text-sm rounded-lg border-black "
                 placeholder ="Enter your email"
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status == "loading"}
                required />
            </div> 
            
            <button className="cursor-pointer px-6 py-3 bg-teal-600 hover:bg-teal-900 active:bg-teal-400 transition delay-75 rounded-lg justify-center items-center gap-2 flex"
            type="submit"
            disabled={status == "loading"}>
                <div className="text-white text-base font-normal font-['General Sans'] leading-normal">Subscribe</div>
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

export default FooterNewsletter;


