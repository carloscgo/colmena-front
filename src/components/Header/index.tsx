import Link from 'next/link';
import { routes } from '@/utils';
import HeaderContent, { Nav, Items, Item } from './styles';

export default function Header() {
  return (
    <HeaderContent>
      <Nav className='my-10'>
        <Items>
          <Item>
            <Link href={routes.home}>Home</Link>
          </Item>
          <Item>
            <Link href={routes.client}>Client</Link>
          </Item>
          <Item>
            <Link href={routes.api}>API</Link>
          </Item>
          <Item>
            <Link href={routes.dashboard.index}>Admin</Link>
          </Item>
        </Items>
      </Nav>
    </HeaderContent>
  );
};
