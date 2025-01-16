import Link from "next/link";

export default function Recipe3() {
    return (
        <div className="bg-gray-900 w-full h-screen text-white flex flex-col justify-center items-center gap-2">
            <h1>Receita 3</h1>

            <h1>Adicionado tambem o menu no layout</h1>

            <div className='flex flex-col bg-black text-white p-4 gap-3 items-center w-52' >
                <Link href="/novarota">Rota1</Link>
                <a href="/novarota">Rota 1, jeito antigo</a>
            </div>
        </div>
    );
} 