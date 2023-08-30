import '../App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../App.css'

function Projects() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <>
            <h1 className='center project-header'>Projects</h1>
            <div className="project">
                <img className="project-img" src="/images/DisneyPlus.svg" alt="Disney Icon"></img>
                <div className='project-text'>
                    <h3 className='text-black center'>Disney+ Clone</h3>
                    <h5>
                        Fullstack Web Application powered by a React frontend and a noSQL Firebase backend.
                        This app allows users to sign-in with built-in Google Auth Services, uses Redux to
                        create global states and store user data on the frontend, and dynamically renders data
                        from a real time database. The styling for this app is done using styled components.
                    </h5>
                    <div className='project-links'>
                        <div className='demo-items'>
                            <a className='black project-link' href='http://disneyplusclone.com/'><img className='project-icon' src='/images/Code.svg' alt='Github Icon'></img><h4 className='demo-text'>Demo</h4></a>
                        </div>
                        <div className='demo-items'>
                            <a className='black project-link' href='https://github.com/Tobiwashi'><img className='project-icon' src='/images/Github.svg' alt='Github Icon'></img><h4 className='demo-text'>Code</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            <Slider className='slider' {...settings} >
                <div className='slider-item'>
                    <img className='slider-img' src='images/DisneyPlus1.jpg' alt='Project Showcase'></img>

                </div>
                <div className='slider-item'>
                    <img className='slider-img' src='images/DisneyPlus2.jpg' alt='Project Showcase'></img>
                </div>
                <div className='slider-item'>
                    <img className='slider-img' src='images/DisneyPlus3.jpg' alt='Project Showcase'></img>
                </div>
            </Slider >
        </>
    )
}


export default Projects