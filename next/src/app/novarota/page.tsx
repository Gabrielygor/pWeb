import Link from "next/link";
import { MariaPrea } from "./componentes";

export default function NovaRotaHome() {
    return (

        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea />

            <div className='flex flex-col bg-black text-white p-4 gap-3 items-center'>
                <Link href="/">Home Page</Link>
            </div>

        </div>

    )

}