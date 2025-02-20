import { addDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';

import { blogCollectionRef } from '../../../config/firebase';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import { editBlogStore } from '../../../stores/editBlogStore';
import { getDocRef } from '../../../utils/getBlogRef';

import 'react-quill-new/dist/quill.snow.css';
import '../../../styles/blogTextEditor.css';

import { uploadImage } from '../../../utils/uploadImage';
import { ModalHeader } from '../../modal/ModalHeader';
import { Loader } from '../../shared/Loader';
import { Backdrop } from '../Backdrop';
import { LabelledInput } from '../auth/LabelledInput';

const closeModal = () => {
  isCreateModalOpen.set(false);
  editBlogStore.set(undefined);
};

export const CreateEditForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Backdrop onClick={closeModal}>
      <CreateEditFormContent />
    </Backdrop>
  );
};

const CreateEditFormContent = () => {
  const [blog] = useState<any>(editBlogStore.get());
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isImageUploading, setIsImageUploading] = useState(false);

  const handleImageUpload = async () => {
    await uploadImage({
      image,
      setImgUrl,
      setError,
      setIsImageUploading,
    });
  };

  const createBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    try {
      await addDoc(blogCollectionRef, {
        title: title,
        body: body,
        bannerImage: imgUrl,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error(error);
    }

    setError('');
  };

  const updateBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    try {
      const blogRef = getDocRef(blog.blogId);
      await updateDoc(blogRef, {
        title: title,
        body: body,
        bannerImage: imgUrl,
      });
    } catch (error) {
      console.error('Error during update: ' + error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    blog ? await updateBlog() : await createBlog();
    isCreateModalOpen.set(false);
    if (blog) {
      editBlogStore.set(undefined);
    }
    window.location.reload();
  };

  useEffect(() => {
    if (image) {
      handleImageUpload();
    }
  }, [image]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setImgUrl(blog.bannerImage);
    }
  }, []);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col flex-wrap gap-y-4 w-[90%] md:w-[60%] lg:w-[40%] max-w-4xl bg-beige rounded-lg p-4 z-50"
    >
      <ModalHeader closeModal={closeModal} />
      <h4 className="text-xl text-center">
        {blog ? 'Upravit blog' : 'Přidat blog'}
      </h4>
      <button className="bg-dark-green px-2 py-1 text-xl text-beige rounded-lg max-w-max self-center">
        Uveřejnit blog
      </button>
      <LabelledInput
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        text="Název"
      />
      <div className="grid gap-2">
        <p>Text</p>
        <ReactQuill theme="snow" value={body} onChange={setBody} />
      </div>
      <LabelledInput
        name="image"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        text="Obrázek"
      />
      {isImageUploading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
      <LabelledInput
        name="image url"
        type="text"
        value={imgUrl ?? ''}
        onChange={(e) => setImgUrl(e.target.value)}
        text="Url obrázku"
      />

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
