import { lazy } from "react"

const Container = lazy(() => import("../Components/Container"))
import SlickSlider from "../Components/SlickSlider"
import images from "../assets/image.jpg"
import images2 from "../assets/image2.webp"
import canva1 from "../assets/Canva1.svg"
import canva2 from "../assets/Canva2.svg"


function Home() {
    return (
        <div>
            <Hero />

        </div>
    )
}

const Hero = () => {


    const imgData = [
        {
            img: images2
        },
        {
            img: images
        },
        {
            img: images2
        },
        {
            img: images
        },
        {
            img: images2
        },
        {
            img: images2
        },
        {
            img: images2
        },
        {
            img: images2
        },
    ]

    return (
        <section className="relative w-full md:aspect-[16/9] h-[90vh]  bg-[#191919] overflow-hidden">
            {/* Slider */}

        </section>

    )
}

export default Home
