import { useState } from "react"

export default function Movies({ initialData }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [data, setData] = useState(initialData)

    async function searchMovies() {
        const res = await fetch(
            `http://www.omdbapi.com/?apikey=2d6d6975&s=${searchTerm}`
        )
        const searchData = await res.json()
        setData(searchData)
    }

    return (
        <div className="bg-zinc-700 flex flex-col justify-center items-center">
            <div className="flex justify-center gap-3 items-center bg-zinc-500 w-full h-20 ">
                <input
                    type="text"
                    placeholder="Digite a palavra-chave"
                    className="bg-black text-white p-3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-white text-black font-bold p-3 rounded transition-all hover:text-white hover:bg-black" onClick={searchMovies}>Pesquisar</button>{" "}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
                {data &&
                    data.Search &&
                    data.Search.map((m) => (
                        <div key={m.imdbID} className="bg-zinc-900 flex flex-col justify-center items-center p-6 gap-5 rounded-2xl transition-all hover:bg-black">
                            <h2 className="text-lime-500">
                                {m.Title} --- {m.Year} --- {m.Type}
                            </h2>
                            <img src={m.Poster} width="180px" alt={m.Title} />
                        </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=ca98445&s=bagdad`)
    const initialData = await res.json()
    return {
        props: {
            initialData,
        },
    }
}