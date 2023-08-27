

function Navbar() {

    return (
        <>
            <div className="navbar">
                <div className="nav-items">
                    <img className="nav-icon" src="\images\home-icon.png" alt='Home Icon'></img>
                    <span>Home</span>
                </div>
                <div className="nav-items">
                    <img className="nav-icon" src="\images\project-icon.png" alt='Home Icon'></img>
                    <span>Projects</span>
                </div>
                <div className="nav-items">
                    <img className="nav-icon" src="\images\resume-icon.png" alt='Home Icon'></img>
                    <span>Resume</span>
                </div>
            </div>
        </>
    )
}


export default Navbar