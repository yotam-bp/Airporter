import React from 'react'
const Footer = () => {
    const linkedinURL = 'https://www.linkedin.com/in/yotam-ben-porat'
    const githubURL = 'https://github.com/yotam-bp'
    const facebookURL = 'https://www.facebook.com/yotam.b.porat'
    return (
        <footer className="main-container">
            <div className="footer-container flex align-center justify-center fs24 flex ">
                <div className="copyrights">
                    © Copy Rights 2021 Yotam Ben Porat
                </div>
                <div className="icons flex space-between">
                    <a href={linkedinURL}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={githubURL}
                        target="_blank"
                        rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                    </a>
                    <a href={facebookURL}
                        target="_blank"
                        rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;