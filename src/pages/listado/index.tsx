import { Nav, Layouts, Pagination, CardPost } from "@/components";
import { BsHouseFill } from 'react-icons/bs'
import { routes } from "@/utils";
import { usePagination } from "@/hooks";
import getConfig from "next/config";
import axios from 'axios';

const { serverRuntimeConfig } = getConfig();

interface Query {
  page?: string;
  pageSize?: string;
};

export async function getServerSideProps({ query: { page, pageSize } }: { query: Query }) {
  const currentPage = String(page ?? 1);

  const { data } = await axios.get(serverRuntimeConfig.URL_API, {
    params: {
      _page: currentPage,
      _limit: pageSize ?? 10,
    }
  });

  return {
    props: {
      data,
      page: currentPage,
    },
  };
}

interface Props {
  data: any[];
  page: number;
};

export default function ListPage({ data, page }: Props) {
  const styleIconNav = { marginLeft: "4px", marginRight: "4px" }
  console.log({ data, page })
  const { currentPage, pageSize, onPageChange } = usePagination(page);

  return (
    <Layouts.Dashboard>
      <Nav current="List" previous={[
        {
          label: 'Home',
          icon: <BsHouseFill size='16px' style={{ ...styleIconNav }} />,
          route: routes.home,
        }
      ]} />

      <div className="px-[20%]">
        {data.map(({ id, title, body }) => (
          <CardPost
            key={id}
            title={title}
            body={body}
            image={'https://picsum.photos/seed/picsum/536/354'}
          />
        ))}
      </div>

      <Pagination
        count={data.length}
        currentPage={currentPage}
      />
    </Layouts.Dashboard>
  );
};

