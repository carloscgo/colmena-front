import { MouseEventHandler, ReactNode } from 'react';
import Image from 'next/image';

import Card, { Button } from './styles';

interface Props {
  title: string;
  body?: string;
  image: string;
  labelEdit?: string | ReactNode,
  labelDelete?: string | ReactNode,
  onEdit?: MouseEventHandler<HTMLButtonElement> | undefined,
  onDelete?: MouseEventHandler<HTMLButtonElement> | undefined,
};

export default function CardPost({ title, body, image, labelEdit, labelDelete, onEdit, onDelete }: Props) {
  return (
    <Card className='w-full my-4'>
      <div className='flex items-start flex-row w-full border-gray-400 border-[1px] rounded-md p-3 gap-3'>
        <div className='p-2 rounded-md flex-none'>
          <Image
            alt={title}
            src={image}
            width={200}
            height={132}
            loading='lazy'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU8OmfDAAC3wGAT6zerAAAAABJRU5ErkJggg=='
          />
        </div>
        <div className='flex flex-col gap-3 text-black dark:text-white h-full w-full'>
          <div className='w-full flex justify-between gap-2'>
            {title}

            {(typeof onEdit === 'function' || typeof onDelete === 'function') && (
              <div className='self-end'>
                {typeof onEdit === 'function' && (
                  <Button type='button'
                    className='hover:bg-indigo-600 hover:text-gray-100 self-end'
                    onClick={onEdit}
                    data-testid='Edit'
                  >
                    {labelEdit}
                  </Button>
                )}
                {typeof onDelete === 'function' && (
                  <Button type='button'
                    className='hover:bg-red-600 hover:text-gray-100 self-end'
                    onClick={onDelete}
                    data-testid='Delete'
                  >
                    {labelDelete}
                  </Button>
                )}
              </div>
            )}
          </div>
          {body && (
            <div className='text-xs'>
              {body}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

