import { lazy } from "react"

const Container = lazy(() => import("../Components/Container"))
import SlickSlider from "../Components/SlickSlider"
import images from "../assets/image.jpg"
import images2 from "../assets/image2.webp"
import canva1 from "../assets/Canva1.svg"
import canva2 from "../assets/Canva2.svg"
import ShopNowButton from "../Components/ShopNowButton"


function Home() {
    return (
        <div>
            <Hero />
            <Summercollection />
            <BestSaller />
            <NewStyle />
            <DraftCollection />
        </div>
    )
}

const Hero = () => {

    return (
        <section className="relative w-full h-[100vh]   ">
            <div className=" w-full h-full relative">
                <img className="w-full h-full object-cover object-top" src="https://cdn.shopify.com/s/files/1/1464/5034/files/Hero_8527aed1-4493-4a53-a724-1e4b0a7f4188.jpg?v=1753900488&quality=75&width=2200&crop=center" alt="" />
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 z-10 mt-20">
                    <div className=" text-center text-white">
                        <h3 className=" text-3xl font-semibold ">Crafted For Every Occasion</h3>
                        <h1 className=" text-7xl font-bold">The LUX Collection</h1>
                        <div className="mt-10">
                            <ShopNowButton title="Shop Now" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


const Summercollection = () => {


    const imgdetails = [
        {
            name: "Short Sleeves",
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/Short-Sleeves_3e3674de-b5df-4091-8038-ebab04439ebc.jpg?v=1752513264&quality=75&width=1000&crop=center"
        },
        {
            name: "Shorts",
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/Shorts_534fbdc3-b97b-4f12-94e9-f9b3ef64406e.jpg?v=1752513264&quality=75&width=1000&crop=center"
        },
        {
            name: "Polos & Button Downs",
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/Polos-_-Button-Downs_5133b382-3d80-4d9e-8fd1-fa644148c714.jpg?v=1752513264&quality=75&width=1000&crop=center"
        },
        {
            name: "Pants",
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/Pants_a99e9951-1090-46a6-ad65-380ac9e96f72.jpg?v=1752513265&quality=75&width=1000&crop=center"
        },

    ]

    return (
        <section className="w-full h-[100vh]">
            <Container clasess="  w-full h-full mt-10 flex flex-col items-center gap-15">
                <div className=" grid md:grid-cols-4 grid-cols-2 gap-5 font-semibold">
                    {
                        imgdetails.map((item, i) => {
                            return (
                                <div className="text-center cursor-pointer" key={i}>
                                    <img loading="lazy" className=" rounded-md" src={item.img} alt="" />
                                    <h1 className="mt-5">{item.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full h-full relative">
                    <img loading="lazy"
                        className="w-full h-full rounded-lg object-contain"
                        src="https://cdn.shopify.com/s/files/1/1464/5034/files/Travel_f7d104db-9395-44fe-9772-0d2f0da56193.jpg?v=1752513264&quality=75&width=1800&crop=center"
                        alt="Summer Bunner"
                    />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-none">Summer Travel Collection</h1>
                        <div className="mt-5">
                            <ShopNowButton title="Shop Now" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}



const BestSaller = () => {


    const BestSallardetails = [
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 80,
            des: "Latte",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
            ]
        },
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 50,
            des: "taupe",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
            ]
        },
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 50,
            des: "black",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
                "#5e6b53", // olive green
                "#5e6b53", // olive green
            ]
        },
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 50,
            des: "dark Char",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
            ]

        },
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 90,
            des: "Lvory",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#cfd2d9", // light gray-blue
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
            ]
        },
        {
            img: "https://cdn.shopify.com/s/files/1/1464/5034/files/04_22482686-a55b-4ceb-94f6-efe90817471b.jpg?v=1751306780&quality=75&width=1400&height=1749&crop=center",
            img2: "https://cdn.shopify.com/s/files/1/1464/5034/files/01.jpg?v=1751306780&quality=75&width=600&crop=center",
            name: "EveryDay Pant 2.0",
            price: 70,
            des: "Navy",
            colors: [
                "#121212", // black
                "#3c3c3c", // dark gray
                "#4a5b6a", // blue-gray
                "#dcd7cd", // off-white
                "#cfd2d9", // light gray-blue
                "#5e6b53", // olive green
            ]

        },
    ]



    return (
        <section className=" w-full h-[80vh] ">
            <div>
                <SlickSlider items={BestSallardetails} />
            </div>
        </section>
    )
}


const NewStyle = () => {
    return (
        <section className="w-full h-[100vh] overflow-hidden">
            <Container classes="w-full h-full">
                <div className="grid grid-cols-2 gap-2 h-full">
                    <div className="h-full relative">
                        <img
                            loading="lazy"
                            className="w-full h-full object-cover rounded-md "
                            src="https://cdn.shopify.com/s/files/1/1464/5034/files/Classic-Fit.jpg?v=1752513265&quality=75&width=1800&crop=center"
                            alt=""
                        />
                        <div className="w-full absolute left-5 bottom-50 mb-5 text-white z-10">
                            <h3 className=" text-2xl  font-semibold">New Fit Timeless Style</h3>
                            <h1 className="text-3xl font-bold mb-5">Lux Classic Fit </h1>
                            <ShopNowButton title="Shop Now" />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2 ">
                        <div className="flex-1 overflow-hidden relative">
                            <img
                                loading="lazy"
                                className="w-full h-full object-cover rounded-md"
                                src="https://cdn.shopify.com/s/files/1/1464/5034/files/Sunglasses_73f1d37c-e9cf-4c52-b0eb-36c02c50be1d.jpg?v=1752513265&quality=75&width=1800&crop=center"
                                alt=""
                            />
                            <div className="w-full absolute left-5 bottom-0 mb-5 text-white z-10">
                                <h3 className=" text-2xl  font-semibold">New Fit Timeless Style</h3>
                                <h1 className="text-3xl font-bold mb-5">Lux Classic Fit </h1>
                                <ShopNowButton title="Shop Now" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            <img
                                loading="lazy"
                                className="w-full h-full object-contain rounded-md"
                                src="https://cdn.shopify.com/s/files/1/1464/5034/files/Gronk_Underwear_SD_9eae7758-c75a-427b-9ef6-24a4b6f6454e.jpg?v=1752645460&quality=75&width=1800&crop=center"
                                alt=""
                            />
                            <div className="w-full absolute left-5 bottom-50 mb-5 text-white z-10">
                                <h3 className=" text-2xl  font-semibold">New Fit Timeless Style</h3>
                                <h1 className="text-3xl font-bold mb-5">Lux Classic Fit </h1>
                                <ShopNowButton title="Shop Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const DraftCollection = () => {
    return (
        <section className="w-full border-2">

        </section>
    )
}

export default Home
