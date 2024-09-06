import React from 'react'

import './AboutMe.scss';

const AboutMe: React.FC = () => {

    return (
        <section className="about-me__wrapper">
            <h1 className="about-me__title_main">About Me</h1>
            <a
                className="about-me__title_link"
                target='_blank'
                href="https://t.me/ThalerTimm">@ThalerTimm</a>
            <div className="about-me__summary">
                <h2 className="about-me__title">Summary</h2>
                <p className="about-me__text">
                    My experience includes using technologies such as Vanilla JavaScript, React, Next.js, TypeScript, HTML/CSS, software testing practices. Stress-resistant, excellent communication skills, able to work in a team using Agile/Scrum methodology. I know how to prioritize, I am responsible, attentive and persistent. Have practice with bug and task tracking systems (Jira, Mantis, Testlink, TestRail, GitHub Issues, Trello etc.) Knowledge of the basics of testing. Average level of knowledge of the technical English language.
                </p>
            </div>

            <div className="about-me__skills">
                <h2 className="about-me__title">Skills</h2>
                <ul className="about-me__list">
                    <li className="about-me__list_item">JavaScript (ES6+), React, NextJS 14, TypeScript</li>
                    <li className="about-me__list_item">Redux, Zustand, RTK Query, React Toolkit, React Router, Formik, React Hook Form</li>
                    <li className="about-me__list_item">Material UI, GSAP</li>
                    <li className="about-me__list_item">HTML5, CSS3, SCSS, Styled-Components, CSS Modules</li>
                    <li className="about-me__list_item">VS Code, Git/GitHub, Figma, DevTools, Postman</li>
                    <li className="about-me__list_item">Agile/Scrum methodology, teamwork, prioritization of goals, responsibility, attentiveness, persistence</li>
                    <li className="about-me__list_item">QA methodologies: types of testing, approaches to testing</li>
                    <li className="about-me__list_item">Test design techniques</li>
                    <li className="about-me__list_item">Test documentation (test plan, test cases, checklists, bug reports)</li>
                    <li className="about-me__list_item">Practice with bug-tracking and test management systems</li>
                </ul>
            </div>

            <div className="about-me__experience">
                <h2 className="about-me__title">Experience</h2>
                <ul className="about-me__list">
                    <li className="about-me__list_item">08.2006 – 08.2021 - Customs officer, State Customs Service of Ukraine</li>
                    <li className="about-me__list_item">08.2022 – 09.2022 - QA TEAMMATE, TEAM "TASQUE", BINARY STUDIO ACADEMY</li>
                    <li className="about-me__list_item">01.2024 – 04.2024 - FRONTEND TEAMMATE, PROJECT FRESHHUB (online store), TEAM CHALLENGE</li>
                    <li className="about-me__list_item">03.2024 – present time - FRONTEND TEAMMATE, PROJECT “Шарм” (online store), TEAM CHALLENGE</li>
                    <li className="about-me__list_item">04.2024 – present time - FRONTEND TEAMMATE, PROJECT “NA SELI U DIDUSYA” (booking rooms), TEAM CHALLENGE</li>
                </ul>
            </div>

            <div className="about-me__education">
                <h2 className="about-me__title">Education</h2>
                <ul className="about-me__list">
                    <li className="about-me__list_item">09.2001 – 06.2006 - Master of the Accounting and Audit, CUSTOMS ACADEMY OF UKRAINE</li>
                    <li className="about-me__list_item">01.2022 – 04.2022 - GRADUATE, COURSE "Software Testing", RIVNE CENTER OF VOCATIONAL EDUCATION OF THE STATE EMPLOYMENT SERVICE</li>
                    <li className="about-me__list_item">03.2022 – 04.2022 - GRADUATE, COURSE "The Fundamentals of Software Testing", QATESTLAB TRAINING CENTER</li>
                    <li className="about-me__list_item">05.2022 – 06.2022 - GRADUATE, COURSE "QA Engineer", G5 UNIVERSITY (G5 GAMES)</li>
                    <li className="about-me__list_item">07.2022 – 09.2022 - GRADUATE, "QA COURSE", BINARY STUDIO ACADEMY (BINARY STUDIO)</li>
                    <li className="about-me__list_item">10.2022 – 01.2023 - GRADUATE, Complete Course on JavaScript + React - from scratch to result, UDEMY</li>
                    <li className="about-me__list_item">02.2023 – 03.2023 - GRADUATE, Course Practical JavaScript (Advanced level), UDEMY</li>
                    <li className="about-me__list_item">GRADUATE, Landing the layout and creating themes on CMS WordPress, UDEMY</li>
                    <li className="about-me__list_item">07.2023 - GRADUATE, Course Creating an Admin Panel with React.js + PHP, UDEMY</li>
                    <li className="about-me__list_item">11.2023 - GRADUATE, The Complete Course on Modern TypeScript, UDEMY</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;