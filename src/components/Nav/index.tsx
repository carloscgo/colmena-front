import Link from 'next/link';
import { ReactNode, isValidElement } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import NavContent, { Items, Item } from './styles';

interface PreviousItem {
  label: string;
  icon: HTMLDivElement | ReactNode;
  route?: string;
};

interface Props {
  current: string;
  previous: PreviousItem[];
};

export default function Nav({ current, previous }: Props) {
  return (
    <NavContent className='flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-[#1E293B]' aria-label='Breadcrumb'>
      <Items className='inline-flex items-center space-x-1 md:space-x-3'>
        {previous.map((item, index) => (
          <Item key={index} className='inline-flex items-center'>
            <Link href={item.route ?? '#'} className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
              {isValidElement(item.icon) && item.icon}
              {item.label}
            </Link>
          </Item>
        ))}
        <Item>
          <div className='flex items-center'>
            <MdArrowForwardIos size='16px' />

            <span className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
              {current}
            </span>
          </div>
        </Item>
      </Items>
    </NavContent>
  );
};
