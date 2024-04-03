import Button from '../UI/Button/Button.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { queryClient } from '../../Provider.tsx';
import { createItem } from '../../api/request/items.ts';

const CreateForm = () => {
  const { register, handleSubmit } = useForm();
  const [imageBase64, setImageBase34] = useState<ImageType>('');
  const handlerFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.length ? event.target.files[0] : null;
    if (!file) return;
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase34(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const mutation = useMutation((data: Item) => createItem({ params: data }), {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    }
  });
  const onSubmit: SubmitHandler<Item> = (data) => mutation.mutate({ ...data, img: imageBase64 });

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder={'Title'} />
      <input {...register('img')} type={'file'} onChange={handlerFileChange} />
      <input {...register('link')} placeholder={'Link'} />
      <input {...register('category')} placeholder='Category' />
      <div className={'form-btn'}>
        <Button type={'submit'}>Create</Button>
      </div>
    </form>
  );
};

export default CreateForm;
