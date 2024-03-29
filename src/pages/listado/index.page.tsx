import { BsHouseFill } from 'react-icons/bs'
import getConfig from 'next/config';
import axios from 'axios';

import { Nav, Layouts, Pagination, CardPost, Alert } from '@/components';
import { routes } from '@/utils';
import { styleIconNav } from '@/utils/common';

const { serverRuntimeConfig } = getConfig();

interface Query {
  page?: string;
  pageSize?: string;
};

const CACHE: any = {};

export const requestServer = async ({ page, pageSize }: Query) => {
  const currentPage = String(page ?? 1);
  const currentCache = CACHE[`${currentPage}`];

  let result = [];

  if (currentCache?.length) {
    result = currentCache;
  } else {
    const { data } = await axios.get(serverRuntimeConfig.URL_API, {
      params: {
        _page: currentPage,
        _limit: pageSize ?? 10,
      }
    });

    if (data.length) {
      CACHE[`${currentPage}`] = data;
    }

    result = data;
  }

  return {
    result,
    currentPage,
  };
};

export async function getServerSideProps({ query: { page, pageSize } }: { query: Query }) {
  const { result, currentPage } = await requestServer({ page, pageSize });

  return {
    props: {
      data: result,
      page: currentPage,
    },
  };
};

interface Props {
  data: any[];
  page: number;
};

export default function ListPage({ data, page }: Props) {
  return (
    <Layouts.Dashboard>
      <Nav current='List' previous={[
        {
          label: 'Home',
          icon: <BsHouseFill size='16px' style={{ ...styleIconNav }} />,
          route: routes.home,
        }
      ]} />

      <Pagination
        count={data.length}
        currentPage={page}
      />

      <div className='px-[20%] pb-[30px]'>
        {data.length > 0 ? (
          <>
            {data.map(({ id, title, body }, index) => (
              <CardPost
                key={id}
                title={title}
                body={body}
                image={`https://picsum.photos/200/132?random=${(index + 1) * page}`}
              />
            ))}
          </>) : (
          <>
            <Alert
              message='No posts found'
              type='warning'
              showClose={false}
            />
          </>
        )}
      </div>

      <Pagination
        count={data.length}
        currentPage={page}
      />
    </Layouts.Dashboard>
  );
};
