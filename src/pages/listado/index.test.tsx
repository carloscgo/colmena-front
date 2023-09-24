import { render } from '@testing-library/react';
import axios from 'axios';
import ListPage, { getServerSideProps } from '.';

jest.mock('axios');

jest.mock('next/config', () => ({
  ...jest.requireActual('next/config'),
  __esModule: true,
  default: jest.fn(() => ({
    serverRuntimeConfig: {
      URL_API: 'http://test'
    },
  }))
}));

describe('ListPage', () => {
  it('should render list of posts correctly', () => {
    const data = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const page = 1;

    const { getByText } = render(<ListPage data={data} page={page} />);

    expect(getByText('Post 1')).toBeInTheDocument();
    expect(getByText('Body 1')).toBeInTheDocument();
    expect(getByText('Post 2')).toBeInTheDocument();
    expect(getByText('Body 2')).toBeInTheDocument();
  });

  it('should render "No posts found" alert when data is empty', () => {
    const data: any = [];
    const page = 1;

    const { getByText } = render(<ListPage data={data} page={page} />);

    expect(getByText('No posts found')).toBeInTheDocument();
  });
});

describe('getServerSideProps', () => {
  it('should fetch data from API and return props', async () => {
    const data = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const page = '1';

    (axios.get as jest.Mock).mockResolvedValueOnce({ data });

    const result = await getServerSideProps({ query: { page } });

    expect(result).toEqual({
      props: {
        data,
        page: '1',
      },
    });
    expect(axios.get).toBeCalledWith(expect.any(String), {
      params: {
        _page: '1',
        _limit: 10,
      },
    });
  });

  it('should use cache when available', async () => {
    const data = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const page = '1';

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: [] });
    (axios.get as jest.Mock).mockResolvedValueOnce({ data });

    const result = await getServerSideProps({ query: { page } });
    const cachedResult = await getServerSideProps({ query: { page } });

    expect(result.props.data).toEqual(data);
    expect(cachedResult.props.data).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
