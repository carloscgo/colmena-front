import Image from 'next/image';
import { Layouts } from '@/components';

export default function IndexPage() {
  return (
    <Layouts.Dashboard className='text-dark dark:text-white'>
      <div className='flex flex-col gap-8 w-[100%]'>
        <h1 className='text-3xl font-medium my-5'>ColmenaLab</h1>
        <p>
          Bienvenido al reto técnico del Laboratorio Digital Colmena para desarrolladores Frontend.
        </p>

        <Image
          alt='Seed'
          src='https://picsum.photos/seed/picsum/536/354'
          width={536}
          height={354}
        />
      </div>
    </Layouts.Dashboard>
  );
};

