import { MariaPrea } from "../novarota/componentes";
import { TitleProp } from "@/components/TitleProp";

export default function Recipe2() {
    return (
        <div className="bg-gray-900 w-full h-screen text-white flex flex-col justify-center items-center gap-2">
            <h1>Receita 2</h1>

            <MariaPrea />
            <TitleProp title='Component with props' />

        </div>
    );
} 