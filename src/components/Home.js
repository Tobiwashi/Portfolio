import '../App.css'

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
                <img className='avatar' src='/images/Avatar.png'></img>
            </div>
            <h3 className='about-text'>About Me</h3>

            <h4 className='about-subtext'>
                I'm Tobi Igberase, a software engineer based in the Richmond Metropolitan Area. I have a passion
                for problem-solving, innovation, and automation. My skills include but are not limited to Fullstack
                Development, SQL and NoSQL Database Querying/Management, Data Structures and Algorithms, and Cloud Computing (AWS).
            </h4>
        </>
    )
}


export default Home