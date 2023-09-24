import { routes } from "@/utils";
import PaginationContent, { PageItem, PageLink } from "./styles";

interface Props {
  count: number;
  currentPage?: number;
};

export default function Pagination({ count, currentPage = 1 }: Props) {
  const page = Number(currentPage);
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page + 1;

  return (
    <PaginationContent className="flex justify-around gap-5 w-[150px] mx-auto">
      <PageItem className="px-5 py-2">
        <PageLink href={`${routes.list}/?page=${prevPage}`} className={prevPage > 1 ? '' : 'pointer-events-none text-gray-400'}>
          Prev
        </PageLink>
      </PageItem>
      <PageItem className="px-5 py-2">
        <PageLink href={`${routes.list}/?page=${nextPage}`} className={count > 1 ? '' : 'pointer-events-none text-gray-400'}>
          Next
        </PageLink>
      </PageItem>
    </PaginationContent>
  );
};
