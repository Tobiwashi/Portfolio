import { Link } from "react-router-dom"
import '../App.css'
function Navbar(props) {

    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <Link className="nav-items" to='/'>
                        <img className="icon" src="images/home-icon.png" alt="Home Icon"></img>
                        <span>Home</span>
                    </Link>
                </div>
                <div className="nav-items">
                    <Link className="nav-items" to='/Projects'>
                        <img className="icon" src="images/project-icon.png" alt="Home Icon"></img>
                        <span>Projects</span>
                    </Link>

                </div>
                <div className="nav-items">
                    <img className="icon" src="images/resume-icon.png" alt="Resume Icon"></img>
                    <span><a className="black" href='files/Resume.pdf'>Resume</a></span>
                </div>
            </div>

            {props.children}

            <div className="footer">
                <span>®Tobiwashi Visual Studios</span>
                <div className="footer-items">
                    <a className="footer-items" href="https://www.linkedin.com/in/tobi-igberase-5a2178253/"><img className="footer-icon" src="images/LinkedIn.svg" alt="LinkedIn Icon"></img></a>
                    <a className="footer-items" href="https://github.com/Tobiwashi"><img className="footer-icon" src="images/Github.svg" alt="Github Icon"></img></a>
                    <a className="footer-items" href="https://www.youtube.com/channel/UCZ8m9E6FbhdBfY3trXw7xPg"><img className="footer-icon" src="images/Youtube.svg" alt="Youtube Icon"></img></a>
                </div>
            </div>
        </>
    )
}


export default Navbar