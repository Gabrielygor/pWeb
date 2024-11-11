export function Card (props) {
    return  (
        <div className="text-white bg-zinc-800 p-3 h-11 flex justify-center items-center rounded-lg transition-all hover:bg-white hover:text-black hover:border hover:border-spacing-1 hover:border-black">
            <h1 className="text-lg font-bold">
                {props.card}
            </h1>
        </div>
    )
}