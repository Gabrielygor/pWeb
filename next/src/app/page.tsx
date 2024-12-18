import { TitleProp } from '@/components/TitleProp';
import { Recipe1 } from './recipe-1/page'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="items-center justify-items-center ">
      <div>

        <Recipe1 />
        <TitleProp title={'Titulo é uma Prop'} />

        <div>
          <h1>
            Viva Santana!
          </h1>
        </div>
      </div>

      <div className='flex flex-col bg-black text-white p-4 gap-3 items-center'>
        <Link href="/novarota">Rota1</Link>
        <a href="/novarota">Rota 1, jeito antigo</a>
      </div>

    </div>
  );
}
