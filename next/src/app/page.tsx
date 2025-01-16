import { TitleProp } from '@/components/TitleProp';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="items-center justify-items-center ">
      <div>

        <TitleProp title={'Titulo é uma Prop'} />

        <div>
          <h1>
            Viva Santana!
          </h1>
        </div>
      </div>

      <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/recipe1">Receita 1</Link>
      </div>

      <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/recipe2">Receita 2</Link>
      </div>

      <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/recipe3">Receita 3</Link>
      </div>

      <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/recipe4">Receita 4 e 5 </Link>
      </div>

      <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/recipe6">Receita 6</Link>
      </div>

      {/* <div className='p-3 m-5 bg-black text-white rounded-lg'>
        <Link href="/clientServerMovies">clientServerMovies</Link>
      </div> */}


    </div>
  );
}
