import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from "../../assets/docs/Rajan.pdf";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import "./home.css";
import Fade from 'react-reveal/Fade'


const Home = () => {
    const [theme, setTheme] = useTheme();
    const handleTheme = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    }
    return (

        <>
            <div className='home-container home-container' id='home'>
                <div className='theme-btn' onClick={handleTheme}>
                    {theme === 'light' ? (<BsMoonStarsFill size={30} />) : (<BsSunFill size={30} />)}
                </div>
                <div className='container home-content'>
                    <Fade right>
                        <h2>Hi 👋 I'm a</h2><h1><Typewriter
                            options={{
                                strings: ['Full Stack Developer !', 'React js !', 'Mern Stack Developer !', 'Web Developer !'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                    </Fade>
                    <Fade bottom>
                        <div className='home-buttons'>
                            <button className='btn btn-hire'>Hire Me</button>

                            <a className='btn btn-cv' href={Resume} download="rajan.pdf">Resume</a>
                        </div>
                    </Fade>
                </div>
            </div>
        </>

    )
}

export default Home