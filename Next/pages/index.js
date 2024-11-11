import { Card } from "./card"

export default function Home() {

    return (

        <div className="w-screen h-screen bg-zinc-700 flex flex-col justify-center items-center">
            <h1 className="text-7xl text-white">
                Next Recipes
            </h1>

            <Card card='Card Component'/>

        </div>

    )

}