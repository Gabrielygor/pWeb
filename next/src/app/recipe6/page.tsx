"use client"

import { useState, useCallback, FormEvent, ChangeEvent } from "react"

interface Movie {
  imdbID: string
  Title: string
  Year: string
}

export default function Home() {
  const [resultMovies, setResultMovies] = useState<Movie[]>([])
  const [titleSearchKey, setTitleSearchKey] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  async function handleAction(formData: FormData) {
    const titleSearchKey = formData.get("titleSearchKey") as string
    setTitleSearchKey(titleSearchKey)
    setLoading(true)

    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const jsonRes = await httpRes.json()
    setResultMovies(jsonRes.Search || [])
    setLoading(false)
  }

  const MemoizedMovieTable = useCallback(
    () => <MovieTable movies={resultMovies} />,
    [resultMovies]
  )

  return (
    <div className="max-w-4xl mx-auto p-4">
      <MovieForm handleAction={handleAction} titleSearchKey={titleSearchKey} setTitleSearchKey={setTitleSearchKey} loading={loading} />
      {MemoizedMovieTable()}
    </div>
  )
}

interface MovieFormProps {
  handleAction: (formData: FormData) => void
  titleSearchKey: string
  setTitleSearchKey: (key: string) => void
  loading: boolean
}

export function MovieForm({ handleAction, titleSearchKey, setTitleSearchKey, loading }: MovieFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleSearchKey(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleAction(new FormData(e.target as HTMLFormElement))
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-lg">
      <label htmlFor="idTitleSearchKey" className="block text-lg font-semibold">Título</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={handleChange}
        className="mt-2 p-2 border rounded-lg w-full"
        placeholder="Digite o título do filme"
      />
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 p-2 bg-blue-500 text-white rounded-lg w-full ${loading ? "opacity-50" : "hover:bg-blue-600"}`}
      >
        {loading ? 'Carregando...' : 'Pesquisar'}
      </button>
    </form>
  )
}

interface MovieTableProps {
  movies: Movie[]
}

export function MovieTable({ movies }: MovieTableProps) {
  return (
    <div className="mt-4">
      {movies.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum filme encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((m) => (
            <div key={m.imdbID} className="p-4 border rounded-lg shadow-lg bg-white">
              <img src={`https://img.omdbapi.com/?apikey=f1cbc41e&i=${m.imdbID}`} alt={m.Title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{m.Title}</h3>
              <p className="text-gray-600">Ano: {m.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
