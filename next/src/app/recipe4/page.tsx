import Image from "next/image";
import MovieForm from "../recipe5/page";

// Definir o tipo para o retorno da API (response)
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface ApiResponse {
  Search?: Movie[];
}

interface Recipe3Props {
  searchParams: {
    titleSearchKey?: string;
  };
}

export default async function Recipe3({ searchParams }: Recipe3Props) {
  const { titleSearchKey = "bagdad" } = searchParams;

  const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`);
  const data: ApiResponse = await res.json();

  return (
    <div className="bg-gray-900 w-full text-white flex flex-col justify-center items-center gap-2">
      <h1>Receita 4</h1>
      <h1>Adicionado também o menu no layout</h1>

      <MovieForm />

      <div>
        {data.Search?.map((m) => (
          <div key={m.imdbID} className="flex flex-col items-center gap-2 mb-4">
            <Image
              width={192}
              height={288}
              src={m.Poster}
              alt={`Poster of ${m.Title}`}
              className="w-48 h-auto object-cover"
            />
            <div>{m.Title} --- {m.Year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
