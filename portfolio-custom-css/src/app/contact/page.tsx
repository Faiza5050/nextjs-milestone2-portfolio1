import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="contact">
      <div className="get3">
        <h1 className="get-in">Get in 
          <span className="touch"> touch</span>
        </h1>
        <p className="get-para">Reach out, and lets create a universe of possibilities together!</p>

        <div className="get">
          <h3>Lets connect</h3>
        </div>
        <p className="connect">I am always open to new opportunities, collaborations, and challenges. If you would like to work together, have any questions, or simply want to connect, feel free to reach out.</p>

        <div className="inp">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <div className="inp1">
          <input type="text" placeholder="Email" required />
        </div>

        <div className="inp1">
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="inp2">
          <textarea className="message-area" placeholder="Type your message here..."></textarea>
        </div>

        <button className="btn4">Send</button>
      </div>
      
      <Image className="con-img" src="/contact-img.jpg" alt="image"
        width={400}
        height={350}
      />

    </div>
  );
}

export default Contact;
