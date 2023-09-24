import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { routes } from '@/utils';
import PaginationContent, { PageItem, PageLink } from './styles';

interface Props {
  count: number;
  currentPage?: number;
};

export default function Pagination({ count, currentPage = 1 }: Props) {
  const page = Number(currentPage);
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page + 1;
  const disabled = 'pointer-events-none text-gray-400';
  const prevPageIsEnabled = prevPage > 1;
  const nextPageIsEnabled = count > 1;
  const hoverClass = 'hover:bg-blue-500 hover:text-gray-100';
  const prevClass = 'px-5 py-2 ' + (prevPageIsEnabled ? hoverClass : '');
  const nextClass = 'px-5 py-2 ' + (nextPageIsEnabled ? hoverClass : '');

  return (
    <PaginationContent className='flex justify-around gap-5 w-[150px] mx-auto'>
      <PageItem className={prevClass}>
        <PageLink href={`${routes.list}/?page=${prevPage}`} className={prevPageIsEnabled ? '' : disabled}>
          <BiChevronLeft /> Prev
        </PageLink>
      </PageItem>
      <PageItem className={nextClass}>
        <PageLink href={`${routes.list}/?page=${nextPage}`} className={nextPageIsEnabled ? '' : disabled}>
          Next <BiChevronRight />
        </PageLink>
      </PageItem>
    </PaginationContent>
  );
};
