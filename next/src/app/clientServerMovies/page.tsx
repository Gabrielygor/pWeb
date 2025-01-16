'use client'

import { useState } from "react"
import { searchMovies } from "../actions/movieActions"

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
}

interface MovieSearchResponse {
    Search?: Movie[];
    totalResults?: string;
    Response: string;
}

export default function Home() {
    const [data, setData] = useState<MovieSearchResponse | null>(null)

    async function handleAction(formData: FormData) {
        const titleSearchKey = formData.get("titleSearchKey") as string;
        const res = await searchMovies(titleSearchKey);
        setData(res);
      }

    return (
        <div>
            <MovieForm actionHandler={handleAction} />
            {data?.Search && <MovieTable movies={data.Search} />}
        </div>
    )
}

interface MovieFormProps {
    actionHandler: (formData: FormData) => void;
}

export function MovieForm({ actionHandler }: MovieFormProps) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            actionHandler(formData);
        }}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" />
            <button type="submit">Pesquisar</button>
        </form>
    )
}

interface MovieTableProps {
    movies: Movie[];
}

export function MovieTable({ movies }: MovieTableProps) {
    return (
        <div>
            {movies.map((m) => (
                <div key={m.imdbID}>
                    {m.Title} --- {m.Year}
                </div>
            ))}
        </div>
    )
}
