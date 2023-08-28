import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../App.css'

const ImgSLider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Slider className='slider' {...settings} >
            <div className='slider-item'>
                <img className='slider-img' src='images/Gaming.jpg' alt='Gaming IMG'></img>

            </div>
            <div className='slider-item'>
                <img className='slider-img' src='images/Basketball.jpg' alt='Basketball IMG'></img>
            </div>
            <div className='slider-item'>
                <img className='slider-img' src='images/Anime.jpeg' alt='Anime IMG'></img>
            </div>
        </Slider >
    )
}

export default ImgSLider