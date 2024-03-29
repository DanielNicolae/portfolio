import React from 'react';
import './Info.css';

function Info() {
    return (
        <>
            <h1>Achivements</h1>
            <div className="InfoContainer">
                <div>
                    <ul>
                        <a className="info" href='https://courses.edx.org/certificates/104c73449a9340108ea665d055cd8150' rel="noreferrer" target="_blank">
                            CS50's Web Programming with Python and JavaScript
                        </a>
                        <p className="info">CS50 Introduction in computer science</p>
                        <p className="info">I graduated a manual QA tester course at Wantsome.</p>
                        <a className="info" href="https://play.google.com/store/apps/developer?id=Don%C8%9Bu+Daniel+Nicolae" rel="noreferrer" target="_blank">
                            I created video games for Android in Unity.
                        </a>
                    </ul>
                </div>
                <a href='https://courses.edx.org/certificates/104c73449a9340108ea665d055cd8150' rel="noreferrer" target="_blank">
                    <img src='../images/CS50W.PNG' alt='CS50W certificate'></img>
                </a>
                <a href='https://www.freecodecamp.org/certification/daniel-25/responsive-web-design' rel="noreferrer" target="_blank">
                    <img src='../images/freecodecamp-responsive_web_design.png' alt='Responsive web design cetificate from freecodecamp'></img>
                </a>
            </div>
        </>
    )
}

export default Info;
