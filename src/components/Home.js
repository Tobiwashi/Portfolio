import '../App.css'
import ImgSLider from './ImgSlider'

function Home() {

    return (
        <>
            <div className='welcome'>
                <h1>
                    <span>Tobi Igberase</span>
                </h1>
                <h2 className=''>
                    <span className='text1'>Software Engineer</span>
                    <span className='text2'>Video Editor</span>
                </h2>
            </div>
            <div className='about-me'>
                <img className='avatar' src='/images/Avatar.JPG' alt='Avatar'></img>
            </div>
            <h3 className='about-text'>About Me</h3>

            <h4 className='about-subtext'>
                I'm Tobi Igberase, a software engineer based in the Richmond Metropolitan Area. I have a passion
                for problem-solving, innovation, and automation. My skills include but are not limited to Fullstack
                Development, SQL and NoSQL Database Querying/Management, Data Structures and Algorithms, and Cloud Computing.
                I am most skilled in OOP specifically Python and Python frameworks such as Django and Flask. I also have experience
                with other languages/frameworks such as Javascript, React, Node, and Express. I am also Knowledgable in RDMS using both
                SQL databases such as MySQL and PostgreSQL, as well as NoSQL databases such as MongoDB and Firebase
            </h4>
            <div className='about-items'>
                <img className='about-img' src='/images/Python.png' alt='Python icon'></img>
                <img className='about-img' src='/images/Javascript.png' alt='Javascript Icon'></img>
                <img className='about-img' src='/images/React.png' alt='React Icon'></img>
                <img className='about-img' src='/images/MySQL.png' alt='MySQL Icon'></img>
            </div>
            <h2 className='skills-text'>Certifications</h2>
            <hr className='w-75'></hr>
            <div className='certifications'>
                <img className='cert-img' src='/images/AWS-CP.png' alt='Cloud Practitioner Certification'></img>
            </div>
            <h2 className='skills-text'>When I'm not coding</h2>
            <ImgSLider></ImgSLider>
        </>
    )
}


export default Home