import React from 'react';
import '@babel/polyfill';
import { useForm } from 'react-hook-form';

function UploadFile() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('picture', data.picture[0])

    const res = await fetch('http://localhost:3000/picture', {
      method: "POST",
      body: formData
    }).then(res => res.json())
    alert(JSON.stringify(res))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('picture', { required: true })} type='file' />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadFile;
