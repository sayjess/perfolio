/* eslint-disable import/no-anonymous-default-export */
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
            {
                id: 1,
                name: "tech fa-brands fa-react"
            },
            {
                id: 2,
                name: "tech fa-brands fa-sass"
            },
            {
                id: 3,
                name: "tech fa-brands fa-html5"
            }
        ]
    },
    {
        id: 2,
        name: "MASKINE",
        img: maskine,
        description: "Maskine is a Face Recognition App integrated with clarify API using REST. Maskine leverages React for the frontend, Express-a Node.js framework- for the backend, and PostgreSQL for storing user information on a database",
        github: "https://github.com/sayjess/maskine",
        view: "https://maskine.netlify.app/",
        inProgress: false,
        techUsed: [
            {
                id: 1,
                name: "tech fa-brands fa-react"
            },
            {
                id: 2,
                name: "tech fa-brands fa-css3-alt"
            },
            {
                id: 3,
                name: "tech fa-brands fa-node"
            }
        ]
    },
    {
        id: 3,
        name: "MEME GENERATOR",
        img: meme,
        description: "Made with React, Meme generator leverages React Hooks like useState and useEffect, and the fetch function to receive meme data's from an API",
        github: "https://github.com/sayjess/meme-generator",
        view: "https://memegeneratorbyjess.netlify.app/",
        inProgress: false,
        techUsed: [
            {
                id: 1,
                name: "tech fa-brands fa-react"
            },
            {
                id: 2,
                name: "tech fa-brands fa-css3-alt"
            },
        ]
    },
    {
        id: 4,
        name: "Nirvana.Co",
        img: 'https://images.crowdspring.com/blog/wp-content/uploads/2018/12/27130453/pexels-photo-1036856.jpeg',
        description: "A Clothing websites that uses firebase and stripe for payment method",
        github: "https://github.com/sayjess/nirvana.co",
        view: "https://nirvanadotco.netlify.app/",
        inProgress: true,
        techUsed: [
            {
                id: 1,
                name: "tech fa-brands fa-react"
            },
            {
                id: 2,
                name: "tech fa-brands fa-css3-alt"
            },
            {
                id: 3,
                name: "tech fa-brands fa-sass"
            },
        ]
    }
]
