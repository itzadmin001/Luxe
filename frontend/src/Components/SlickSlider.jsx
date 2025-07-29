import Slider from "react-slick";

function SlickSlider({ items }) {

    var settings = {
        infinite: true,
        autoplay: true,
        speed: 15000,
        dots: false,
        Arrow: false,
        autoplaySpeed: 200,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    items.map((image, i) => {
                        return (
                            <div className="p-2 max-h-[500px]">
                                <img
                                    src={image.img}
                                    alt=""
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default SlickSlider
