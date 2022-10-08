import React from "react";

function About(){
    return(
        <div className="about">
            <p>
                Lorem ipsum dolor sit amet, noster electram elaboraret ad qui, dolor perfecto sit et. Mutat erant vituperata eu sed, dolorem intellegat id cum. Iudico mucius detracto vel ea, verterem antiopam democritum eu mea. No sed adipisci explicari adipiscing, soluta abhorreant te vel. Mei cibo legere mentitum cu, tollit salutandi iudicabit an sit, ad viderer facilis quo.
            </p>
            <div className="about__wrapper">
                <div className="about__wrapper__educ">
                    <h2>Education</h2>
                    <ul>
                        <li>essu</li>
                        <li>sjnhs</li>
                        <li>sjces</li>
                    </ul>
                </div>
                <div className="about__wrapper__work">
                    <h2>Work</h2>
                    <ul>
                    <li>Associate Software Engineer</li>
                        <li>CC&B Tech Architect</li>
                        <li>CC&B Functional Tester</li>        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;