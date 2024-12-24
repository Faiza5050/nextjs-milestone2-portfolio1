import "../style/header.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "../style/footer.css"

function Footer () {
  return (
    <div className="main-foot">
      <div className="foot">
        <h1 className="foot-h">Find Me At</h1>
      </div>

      <div className="linked">
        <Link href={"https://www.linkedin.com/in/faiza-kanwal-04a65b2b3/"}
          target="_blank" >

          <Image src="/linked.jpg" alt="image"
            width={50}
            height={50}
          />
        </Link>
        
        <Link href={"faizakanwal5050@gmail.com"}
          target="_blank">

          <Image src="/email.jpg" alt="image"
            width={50}
            height={50}
          />
        </Link>

        <Link href={"https://www.instagram.com/kanwal1203?igsh=MWt4dGRwd3o3NnBmYQ=="}
          target="_blank">
        
          <Image src="/insta.jpg" alt="image"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <p className="copy"> © copy write Faiza Kanwal 2024 </p>

      <div>
        <Image className="img20" src="/footer.png" alt="footer image"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default Footer;
