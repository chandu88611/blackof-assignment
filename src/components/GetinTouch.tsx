import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email format').required('E-mail is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const GetInTouch: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
  };

  const textFieldStyles = {
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiFormHelperText-root': {
      color: 'white',
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-between bg-blue-600 text-white rounded-lg w-full lg:w-[1200px] mx-auto p-4 md:px-20 py-6">
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl font-semibold mb-4">Get in touch</h1>
        <p className="mb-4 text-[18px]">For general enquiries</p>
        <div className="mb-4">
          <p className="font-semibold text-[18px]">Address :</p>
          <p>110, 16th Road, Chembur, Mumbai - 400071</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[18px]">Phone :</p>
          <p>+91 22 25208822</p>
        </div>
        <div>
          <p className="font-semibold text-[18px]">Email :</p>
          <p>info@supremegroup.co.in</p>
        </div>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Full name"
                variant="standard"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName ? errors.fullName.message : ''}
                sx={textFieldStyles}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="E-mail"
                variant="standard"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                sx={textFieldStyles}
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Subject"
                variant="standard"
                fullWidth
                error={!!errors.subject}
                helperText={errors.subject ? errors.subject.message : ''}
                sx={textFieldStyles}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                variant="standard"
                fullWidth
                multiline
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
                sx={textFieldStyles}
              />
            )}
          />
          <button   type="submit" className='!text-white rounded-full border-2 border-white px-10 py-2'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
