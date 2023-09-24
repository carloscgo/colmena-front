import { MouseEventHandler } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BiImage } from 'react-icons/bi';

interface Form {
  id?: string | undefined,
  name?: string | undefined;
  url?: string | undefined;
};

interface Props {
  title: string,
  inputs?: Form,
  onSubmit: Function,
  onClose: MouseEventHandler<HTMLButtonElement>,
};

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  url: Yup.string().url()
    .required("Url is required"),
});

export default function ModalFormImage({ title, inputs, onSubmit, onClose }: Props) {
  const formik = useFormik<Form>({
    initialValues: {
      id: inputs?.id ?? '',
      name: inputs?.name ?? '',
      url: inputs?.url ?? '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <>
      <div className='py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0' id='modal'>
        <div role='alert' className='container mx-auto w-11/12 md:w-2/3 max-w-lg'>
          <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
            <div className='w-full flex justify-start text-gray-600 mb-3'>
              <BiImage size={70} />
            </div>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>{title}</h1>
            <label htmlFor='name' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
              Name
            </label>
            <input id='name'
              {...formik.getFieldProps('name')}
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='Picture'
            />
            <label htmlFor='url' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
              Url
            </label>
            <input id='url'
              {...formik.getFieldProps('url')}
              className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
              placeholder='https://picsum.photos/seed/picsum/536/354'
            />
            <div className='flex items-center justify-start w-full'>
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
                onClick={handleSubmit}
                disabled={!formik.isValid}
              >
                Submit
              </button>
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <button className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
              onClick={onClose} aria-label='close modal' role='button'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-x' width='20' height='20' viewBox='0 0 24 24' strokeWidth='2.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
