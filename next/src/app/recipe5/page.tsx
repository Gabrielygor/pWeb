import Form from "next/form"

export default async function MovieForm() {

    return (

        <Form className="flex flex-col gap-2" action="/recipe4">

            <h1 className="mb-6 text-lg">Em vez de adicionar outro input fiz com que esse abaixo filtre tudo</h1>

            <div className="flex gap-2 justify-center items-center">
                <label htmlFor="idTitleSearchKey">Título</label>
                <input id="idTitleSearchKey" name="titleSearchKey" className="bg-black p-2 rounded-lg" />
                <button type="submit">Pesquisar</button>
            </div>

        </Form>

    )

}