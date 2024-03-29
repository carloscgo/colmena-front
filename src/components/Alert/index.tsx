import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

interface Props {
  message: string;
  title?: string;
  type: 'danger' | 'warning' | 'info' | 'success';
  showClose?: boolean;
};

import AlertContent, { Title, Close } from './styles';

export default function Alert({ message, type, title, showClose = true }: Props) {
  const [show, setShow] = useState(true);
  const [color, setColor] = useState({
    text: '',
    textDark: '',
    bg: '',
    bgDark: '',
  });

  useEffect(() => {
    const colors = {
      danger: {
        text: 'text-red-700',
        textDark: 'dark:text-red-800',
        bg: 'bg-red-100',
        bgDark: 'dark:bg-red-200',
      },
      warning: {
        text: 'text-orange-700',
        textDark: 'dark:text-orange-800',
        bg: 'bg-orange-100',
        bgDark: 'dark:bg-orange-200',
      },
      info: {
        text: 'text-blue-700',
        textDark: 'dark:text-blue-800',
        bg: 'bg-blue-100',
        bgDark: 'dark:bg-blue-200',
      },
      success: {
        text: 'text-green-700',
        textDark: 'dark:text-green-800',
        bg: 'bg-green-100',
        bgDark: 'dark:bg-green-200',
      },
    }[type];

    colors && setColor(colors);
  }, [type]);

  if (!color.text || !show) return null;

  return (
    <AlertContent className={`flex items-center p-4 mb-4 text-sm rounded-lg shadow-lg shadow-gray-500/20 ${color.text} ${color.textDark} ${color.bg} ${color.bgDark}`} role='alert'>
      <Title className='grow'>
        {title && <span className='font-medium'>{title}</span>}
        {' '}{message}
      </Title>

      {showClose && (
        <Close data-testid='btn-close' className='cursor-pointer hover:opacity-75' onClick={() => setShow(false)}>
          <MdClose size='28px' className='text-gray-600' />
        </Close>
      )}
    </AlertContent>
  );
};
