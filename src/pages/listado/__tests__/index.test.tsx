import { render } from '@testing-library/react';
import axios from 'axios';
import ListPage, { requestServer } from '../index.page';

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

describe('requestServer', () => {
  it('should fetch data from API and return props', async () => {
    const data = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ];
    const page = '1';

    (axios.get as jest.Mock).mockResolvedValueOnce({ data });

    const result = await requestServer({ page });

    expect(result).toEqual({
      result: data,
      currentPage: page,
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

    const result = await requestServer({ page });
    const cachedResult = await requestServer({ page });

    expect(result.result).toEqual(data);
    expect(cachedResult.result).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
