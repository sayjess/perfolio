/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import perfolio from '../images/big-proj/perfolio.png'
import meme from '../images/big-proj/meme.png'
import maskine from "../images/big-proj/maskine.jpeg"

export default [
    {
        id: 1,
        name: "PERFOLIO",
        img: perfolio,
        description: "Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/sayjess/perfolio",
        view: "https://lorem-perfoliobyjess.netlify.app/",
        inProgress: false,
        techUsed: [
            <i className="tech fa-brands fa-react"></i>, 
            <i className="tech fa-brands fa-sass"></i>,
            <i className="tech fa-brands fa-html5"></i>
        ]
    },
    {
        id: 2,
        name: "MASKINE",
        img: maskine,
        description: "Face Recognition app made with Clarifai API",
        github: "https://github.com/sayjess/maskine",
        view: "https://maskine.netlify.app/",
        inProgress: true,
        techUsed: [
            <i className="tech fa-brands fa-react"></i>, 
            <i className="tech fa-brands fa-css3-alt"></i>,
            <i className="tech fa-brands fa-node"></i>
        ]
    },
    {
        id: 2,
        name: "MEME GENERATOR",
        img: meme,
        description: "",
        github: "https://github.com/sayjess/meme-generator",
        view: "https://memegeneratorbyjess.netlify.app/",
        inProgress: false,
        techUsed: [
            <i className="tech fa-brands fa-react"></i>, 
            <i className="tech fa-brands fa-css3-alt"></i>
        ]
    }
]