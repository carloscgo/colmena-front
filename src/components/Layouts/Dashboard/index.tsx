import { useRef } from 'react';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';

import { MetaTags, Menu, ButtonTheme, Providers } from '@/components';
import Dashboard from './styles';
import { appName } from '@/utils/common';
import useSideBar from '@/hooks/useSideBar';

interface Props {
  children: React.ReactNode;
  [key: string]: string | boolean | number | React.ReactNode;
};

export default function DashboardLayout({ children, ...props }: Props) {
  const sidebar = useRef<HTMLDivElement>(null);
  const maxSidebar = useRef<HTMLDivElement>(null);
  const miniSidebar = useRef<HTMLDivElement>(null);
  const maxToolbar = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const { className = '', ...propsExtra } = { ...props };

  const openNav = useSideBar({
    sidebar, maxSidebar, miniSidebar, maxToolbar, logo, content,
  });

  return (
    <Providers>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <MetaTags />

      <Dashboard className={`bg-white dark:bg-[#0F172A] ${className}`} {...propsExtra}>
        <div className='fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10'>
          <div ref={logo} className='logo ml-10 dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center'>
            {appName}
          </div>
          <div className='grow h-full flex items-center justify-center'></div>
          <div className='flex-none h-full text-center flex items-center justify-center'>
            <div className='flex space-x-3 items-center px-3'></div>
          </div>
        </div>

        <aside ref={sidebar} data-testid='sidebar' className='w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]'>
          <div ref={maxToolbar} className='max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12'>
            <div className='flex pl-4 items-center space-x-2 '>
              <div>
                <ButtonTheme />
              </div>
            </div>
            <div className='flex items-center space-x-3 group bg-gradient-to-r from-cyan-500 to-blue-500 pl-4 pr-2 py-1 rounded-full text-white'>
              <div className='transform ease-in-out duration-300 mr-12'>
                {appName}
              </div>
            </div>
          </div>
          <div onClick={() => openNav()} data-testid='open-button' className='cursor-pointer -right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45'>
            <HiOutlineSquares2X2 />
          </div>

          <Menu maxSidebar={maxSidebar} miniSidebar={miniSidebar} />
        </aside>

        <div ref={content} className='content h-[100vh] ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4'>
          {children}
        </div>
      </Dashboard>
    </Providers>
  );
};
