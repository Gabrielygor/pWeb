import { Card } from "../card"

export default function Principal() {
   return (
      <div className="w-screen h-screen bg-zinc-700 flex flex-col justify-center items-center">
         <h1 className="text-7xl text-white">Nova Página</h1>
         <MariaPrea mariaPrea="Morreu Maria Preá... (Props)" />
      <Card card="Usando componente de outra pagina" />
      </div>
   )
}

export function MariaPrea(props) {
   return <h2 className="text-7xl text-white">{props.mariaPrea}</h2>
}