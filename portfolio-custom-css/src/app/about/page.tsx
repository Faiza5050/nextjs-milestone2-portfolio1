import Image from "next/image";
import React from "react";

function About () {
    return (
        <div className="main-contain">
            <div className="contain">
                <h1 className="about-me">About me</h1>
                <p className="parag">Hello! <br /> I am Faiza, a Front-End Developer with a strong focus on creating beautiful and user-friendly web applications.<br />
                    I enjoy bringing design concepts to life through clean and efficient code. I thrive on solving complex problems and continuously learning new skills to stay on top of industry trends. Whether its building responsive websites, improving user interfaces, or optimizing performance, I am committed to delivering high-quality digital experiences. Lets build something amazing together!
                </p>
                <button className="btn3">
                    <a href="https://faiza-hackathon-milestone1-2.netlify.app/" target="blank">My Resume</a>
                </button>
            </div>

            <div>
                <Image className="img10" src="/imge.png" alt="image"
                    width={320}
                    height={350}
                />
            </div>
        </div>
    )
}

export default About;
