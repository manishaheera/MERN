import React, {useState, useEffect} from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { redirectTo } from "@reach/router";

const LoginRegistration = (props) => {

    const particlesInit = (main) => {
        console.log(main);
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return(
        <div>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                    // },
                    fpsLimit: 400,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        onHover: {
                        enable: true,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.5,
                        size: 40,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 100,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    },
                    detectRetina: true,
                }}
                />

            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Compose").start();
                }}/>
            </h1>
            
            <div className="background">
                <div className="login-reg-box">
                    <Registration/>
                    <Login />
                </div>
            </div>

        </div>
    )

}

export default LoginRegistration;