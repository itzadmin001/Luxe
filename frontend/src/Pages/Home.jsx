import { lazy } from "react"

const Container = lazy(() => import("../Components/Container"))

function Home() {
    return (
        <div>
            <Hero />

        </div>
    )
}

const Hero = () => {
    return (
        <section className="w-full h-[90vh]">
            <div className="w-full h-full ">
                <div className="text-center">
                    <h3 className="text-2xl leading-none tracking-tight">Crafted For Every Occasion</h3>
                    <h1 className=" text-6xl font-bold tracking-wider">The LUX Collection</h1>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}

export default Home
