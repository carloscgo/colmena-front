import { useCallback, useEffect, useRef } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useLocalStorage } from '@/hooks';
import { Themes } from '@/utils';

export default function ButtonTheme() {
  const [theme, setTheme] = useLocalStorage('theme', Themes.light);

  const moon = useRef<HTMLDivElement>(null);
  const sun = useRef<HTMLDivElement>(null);

  const setDark = useCallback((val: string) => {
    if (val === Themes.dark) {
      document.documentElement.classList.add(Themes.dark)
      document.documentElement.classList.remove(Themes.light)

      moon.current && moon.current.classList.add('hidden')
      sun.current && sun.current.classList.remove('hidden')
    } else {
      document.documentElement.classList.add(Themes.light)
      document.documentElement.classList.remove(Themes.dark)

      sun.current && sun.current.classList.add('hidden')
      moon.current && moon.current.classList.remove('hidden')
    }

    setTheme(val);
  }, [moon, sun, setTheme]);

  useEffect(() => {
    setDark(theme);
  }, [theme, setDark]);

  return (
    <>
      <div data-testid='moon-button' onClick={() => setDark(Themes.dark)} ref={moon} className='moon cursor-pointer text-white hover:text-blue-500 dark:hover:text-[#38BDF8]'>
        <BiMoon />
      </div>
      <div data-testid='sun-button' onClick={() => setDark(Themes.light)} ref={sun} className='sun cursor-pointer hidden text-white hover:text-blue-500 dark:hover:text-[#38BDF8]'>
        <BiSun />
      </div>
    </>
  );
};
