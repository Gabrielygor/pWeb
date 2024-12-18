import { RecipeOne } from '../pages/recipe-1'

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <div>Menu principal</div>

      <RecipeOne />

      <div>
        <h1>
          Viva Santana!
        </h1>
      </div>
    </div>
  );
}
