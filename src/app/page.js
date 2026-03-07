"use client";

import "./css/home.css";
import { useState, useEffect } from "react";
import Image from "next/image";



export default function Home() {
  const [wordswap,setwordswap] = useState(false)
  const [firstvariable,setfirstvariable] = useState("Frontend Developer");
  const [secondvariable,setsecondvariable] = useState("Backend Developer");
  const [display, setDisplay] = useState("");
 const [ismobile, setismobile] = useState(false);

useEffect(()=>{
  const resizehandler=()=>{if(window.innerWidth<=900){
    setismobile(true)
  }}
  resizehandler()
  window.addEventListener("resize",resizehandler)
  return ()=>{
    window.removeEventListener("resize",resizehandler)
  }

},[])


  useEffect(()=>{
    let i=1
    if(!wordswap){
  const interval =  setInterval(() => {
      setDisplay(firstvariable.slice(0,i));
      i++
      if(i==firstvariable.length+1){
        clearInterval(interval)
        console.log("hello",i);
        const interval2 =  setInterval(() => {
          setDisplay(firstvariable.slice(0,i));
          i--
          if(i==-1){
            clearInterval(interval2)
            console.log("interval finished",i);
            setwordswap(true)
          }
        }, 300);

      }
    }, 300);
  }
  else{

    console.log(i)
    const interval =  setInterval(() => {
      setDisplay(secondvariable.slice(0,i));
      i++
      if(i==secondvariable.length+1){
        clearInterval(interval)
        console.log("hello",i);
        const interval2 =  setInterval(() => {
          setDisplay(secondvariable.slice(0,i));
          i--
          if(i==-1){
            clearInterval(interval2)
            console.log("interval finished",i);
            setwordswap(false)
          }
        }, 300);

      }
    }, 300);
  }
   


  },[wordswap])
  return (
    <main>
      
      <section id="ProfileInfo">
        <div id="main-coontainer" className={ismobile? "w-full grid  grid-cols-[100%]": "w-full grid  grid-cols-[55%_45%]"}>
          
          <article>
            <div className="profile-content flex flex-col pl-[10%]">
              <div id="Name" className="w-full flex-[1]">
                <div>
                  I AM
                  <b id="hello">MUDASSIR ALI</b>
                </div>
              </div>

              <div id="description" className="w-full flex-[2]">
                I am an enthusiastic web developer with hands-on experience in
                React and Next.js for building modern and responsive web
                applications. I also have basic understanding of backend
                technologies, which allows me to work on end-to-end projects. I
                am eager to learn, grow, and contribute to real-world projects
                while improving my skills.
              </div>

              <div id="role" className="w-full flex-[1]">
                <span>{display}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </article>

        
          <article>
            <div className="profile-content flex items-center justify-center">
              <div className="profile-image relative overflow-hidden">
                <Image
                  src="/mudassirali-image.jpeg"
                  alt="Profile"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      
      <section>
        <div className={ismobile? "contact-info grid grid-cols-[100%]" : "contact-info grid grid-cols-[1fr_1fr_2fr]"}>
         
          <div className="getintouch" />

          
          <div className="getintouchdetails">
            <div className="contact-item">
              <span className="contact-label">Email</span>
                <span className="contact-value">mudassira435@example.com</span>
              </div>
              <div className="contact-item">
              <span className="contact-label">Other Email</span>
                <span className="contact-value">mudassirali7957@example.com</span>
              </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Pakistan</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Availability</span>
              <span className="contact-value">Open to Internships</span>
            </div>
          </div>

          
          <div className="getintouchlinks">
            
            <a
              href="https://github.com/MudassirAli399"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            
            <a
              href="https://www.linkedin.com/in/mudassir-ali-1994b8397?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            
            <a
              href="https://wa.me/923067957399"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Whatsapp</span>
            </a>

           
            <a
              href="mailto:mudassirali7957@example.com"
              className="social-link"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
     
    </main>
  );
}




