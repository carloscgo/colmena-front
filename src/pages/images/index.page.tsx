import { BsHouseFill } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiImageAdd, BiSolidEditAlt, BiSolidTrash } from 'react-icons/bi';

import { Nav, Layouts, CardPost, Alert, ModalFormImage } from '@/components';
import { routes } from '@/utils';
import { generateUUID, styleIconNav } from '@/utils/common';
import { State, addImage, setImages, updateImage, deleteImage } from '@/store/images/reducer';
import { useLocalStorage } from '@/hooks';

export const ACTIONS = {
  add: 'add',
  delete: 'delete',
  update: 'update',
}

export default function ImagesPage() {
  const dispatch = useDispatch();

  const images = useSelector((state: { images: State }) => state.images.images);

  const [imagesStore, setImagesStore] = useLocalStorage('images', []);

  useEffect(() => {
    if (imagesStore.length) {
      dispatch(setImages(imagesStore));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (images.length) {
      setImagesStore(images);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const [action, setAction] = useState(ACTIONS.add);
  const [inputs, setInputs] = useState({});

  const titleModal = {
    [ACTIONS.add]: 'Add new image',
    [ACTIONS.update]: 'Update image',
  }[action];
  const actionDispatch = {
    [ACTIONS.add]: addImage,
    [ACTIONS.update]: updateImage,
  }[action];

  return (
    <Layouts.Dashboard>
      <Nav current='Images' previous={[
        {
          label: 'Home',
          icon: <BsHouseFill size='16px' style={{ ...styleIconNav }} />,
          route: routes.home,
        }
      ]} />

      <div className='w-full flex items-center justify-end'>
        <button type='button' className='cursor-pointer flex items-center gap-2 mt-4 mr-5 p-2 border-[1px] text-indigo-600 border-indigo-600 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
          onClick={() => setInputs({
            id: generateUUID(), name: '', url: '',
          })}>
          <BiImageAdd /> new image
        </button>
      </div>

      {Object.keys(inputs).length > 0 && (
        <ModalFormImage
          title={titleModal}
          inputs={inputs}
          onClose={() => setInputs({})}
          onSubmit={(data: any) => {
            dispatch(actionDispatch(data));
            setInputs({});
          }}
        />
      )}

      <div className='px-[20%] pb-[30px]'>
        {images.length > 0 ? (
          <>
            {images.map(({ id, name, url }) => (
              <CardPost
                key={id}
                title={name}
                image={url}
                labelEdit={<BiSolidEditAlt />}
                labelDelete={<BiSolidTrash />}
                onEdit={() => {
                  setAction(ACTIONS.update);
                  setInputs({
                    id, name, url,
                  });
                }}
                onDelete={() => {
                  dispatch(deleteImage(id));
                }}
              />
            ))}
          </>) : (
          <>
            <Alert
              message='No images found'
              type='warning'
              showClose={false}
            />
          </>
        )}
      </div>
    </Layouts.Dashboard>
  );
};

