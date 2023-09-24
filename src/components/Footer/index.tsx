import Link from 'next/link';

import FooterContent, { Items, Item } from './styles';

export default function Footer() {
  return (
    <FooterContent>
      <hr />

      <Items>
        <Item>
          <Link href='https://next-auth.js.org'>Documentation</Link>
        </Item>
        <Item>
          <Link href='https://www.npmjs.com/package/next-auth'>NPM</Link>
        </Item>
        <Item>
          <Link href='https://github.com/nextauthjs/next-auth-example'>GitHub</Link>
        </Item>
        <Item>
          <Link href='/policy'>Policy</Link>
        </Item>
      </Items>
    </FooterContent>
  );
};
