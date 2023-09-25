import { RefObject, useCallback } from 'react';

interface Props {
  sidebar: RefObject<HTMLElement>,
  maxSidebar: RefObject<HTMLElement>,
  miniSidebar: RefObject<HTMLElement>,
  maxToolbar: RefObject<HTMLElement>,
  logo: RefObject<HTMLElement>,
  content: RefObject<HTMLElement>,
};

const useSideBar = ({ sidebar, maxSidebar, miniSidebar, maxToolbar, logo, content }: Props) => {
  const openNav = useCallback(() => {
    if (!sidebar.current) return;

    if (sidebar.current.classList.contains('-translate-x-48')) {
      // max sidebar
      sidebar.current.classList.remove('-translate-x-48')
      sidebar.current.classList.add('translate-x-none')
      maxSidebar.current && maxSidebar.current.classList.remove('hidden')
      maxSidebar.current && maxSidebar.current.classList.add('flex')
      miniSidebar.current && miniSidebar.current.classList.remove('flex')
      miniSidebar.current && miniSidebar.current.classList.add('hidden')
      maxToolbar.current && maxToolbar.current.classList.add('translate-x-0')
      maxToolbar.current && maxToolbar.current.classList.remove('translate-x-24', 'scale-x-0')
      logo.current && logo.current.classList.remove('ml-12')
      content.current && content.current.classList.remove('ml-12')
      content.current && content.current.classList.add('ml-12', 'md:ml-60')
    } else {
      // mini sidebar
      sidebar.current.classList.add('-translate-x-48')
      sidebar.current.classList.remove('translate-x-none')
      maxSidebar.current && maxSidebar.current.classList.add('hidden')
      maxSidebar.current && maxSidebar.current.classList.remove('flex')
      miniSidebar.current && miniSidebar.current.classList.add('flex')
      miniSidebar.current && miniSidebar.current.classList.remove('hidden')
      maxToolbar.current && maxToolbar.current.classList.add('translate-x-24', 'scale-x-0')
      maxToolbar.current && maxToolbar.current.classList.remove('translate-x-0')
      logo.current && logo.current.classList.add('ml-12')
      content.current && content.current.classList.remove('ml-12', 'md:ml-60')
      content.current && content.current.classList.add('ml-12')
    }
  }, [sidebar, maxSidebar, miniSidebar, maxToolbar, logo, content]);

  return openNav;
};

export default useSideBar;

