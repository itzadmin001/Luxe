import { useState } from "react";
import Slider from "react-slick";
import { FiHeart } from "react-icons/fi";


function SlickSlider({ items, settings, title }) {



    if (title == "BestSallar") {
        return (
            <div className="slider-container">
                <Slider {...settings}>
                    {items.map((item, i) => (
                        <div className="p-4 rounded-md w-full flex flex-col items-start ">
                            <div className=" relative">
                                <HoverImage key={i} image={item} />
                                <div className=" text-2xl absolute right-5 top-2 cursor-pointer z-10">
                                    <FiHeart />
                                </div>
                            </div>
                            <div>
                                <h1 className="mt-5 font-bold ">{item.name}</h1>
                                <h3>${item.price}</h3>
                                <p className=" text-gray-400 font-bold">{item.des}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    {
                                        item.colors?.slice(0, 4).map((col, i) => (
                                            <div
                                                key={i}
                                                style={{ backgroundColor: col }}
                                                className="w-6 h-4 cursor-pointer hover:border-2 border-black"
                                            ></div>
                                        ))
                                    }
                                    {
                                        item.colors && item.colors.length > 4 && (
                                            <div className="w-auto h-4 px-2 text-xs flex items-center justify-center bg-gray-200 text-black rounded">
                                                +{item.colors.length - 4} more
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        )
    } else if (title == "quality") {
        return (
            <div className="slider-container">
                <Slider {...settings}>

                    {
                        items.map((item, i) => {
                            return (
                                <div className=" text-center flex flex-col gap-6 py-4">
                                    <p className="text-4xl font-bold">“</p>
                                    <h3 className="text-3xl font-semibold">{item.heading}</h3>
                                    <h1 className="text-5xl font-bold mt-5">{item.des}</h1>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }

}


function HoverImage({ image }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className=" w-full overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {
                hovered === true ?
                    <img
                        src={image.img}
                        alt=""
                        loading="lazy"
                        className={`cursor-pointer w-full h-full object-cover transition-opacity duration-700  
                            `}
                    /> : <img
                        src={image.img2}
                        alt=""
                        loading="lazy"
                        className={`cursor-pointer w-full h-full object-cover transition-opacity duration-700 
                            `}
                    />
            }


        </div>
    );
}


export default SlickSlider
