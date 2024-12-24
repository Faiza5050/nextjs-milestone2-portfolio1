import Image from "next/image";
import React from "react";
import "../style/hero.css";
import "../style/project.css"
import Link from "next/link";

function Hero () {
    return (
        <div className="main-container">
            <div className="top-hero">
                <div className="hero">
                    <p className="hero1">Front-end Developer</p>
                    <h1 className="title">Hello,  I am <br /> Faiza Kanwal </h1>
                    <p className="para">I am a passionate and creative Front-End Developer with a strong foundation in web technologies such as HTML, CSS, JavaScript, TypeScript, Next.js and modern frameworks like React.</p>
                    <button className="btn">
                        <Link href="/project">Projects</Link>
                    </button>
                    <button className="btn1">
                        <Link href="#">Hire Me</Link>
                    </button>
                </div>

                <div>
                    <Image className="img" src="/img.jpg" alt="image"
                        width={300}
                        height={350}
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero;
