import { Link } from "react-router-dom"

function Navbar(props) {

    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <img className="icon" src="images/home-icon.png" alt="Home Icon"></img>
                    <span><Link to='/'></Link>Home</span>

                </div>
                <div className="nav-items">
                    <img className="icon" src="images/project-icon.png" alt="Project Icon"></img>
                    <span><Link to='/Projects'></Link>Projects</span>
                </div>
                <div className="nav-items">

                    <img className="icon" src="images/resume-icon.png" alt="Resume Icon"></img>
                    <span><Link to='/'></Link>Resume</span>
                </div>
            </div>

            {props.children}

            <div className="footer">
                <span>®Tobiwashi Visual Studios</span>
                <div className="footer-items">
                    <img className="footer-icon" src="images/LinkedIn.svg" alt="LinkedIn Icon"></img>
                    <img className="footer-icon" src="images/Github.svg" alt="Github Icon"></img>
                    <img className="footer-icon" src="images/Youtube.svg" alt="Youtube Icon"></img>
                </div>
            </div>
        </>
    )
}


export default Navbar