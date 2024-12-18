import { MariaPrea } from "./componentes";
import { RecipeTwo } from "../recipe-2/index";


export default function NovaRotaHome(){

    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
          <MariaPrea/>
          <RecipeTwo title={'Receita dois usando PROPS'}/>
       </div>

    )

}