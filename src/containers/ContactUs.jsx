import React from 'react';
import Button from '../components/Button';
import OulinedInput from '../components/OulinedInput';
import { BillingTypes } from '../constants/AppConstants';
import { useFormik } from 'formik';
import { useState } from 'react';
import { contactSchema } from '../utils/yupValidations';
import { contactService } from '../api/userServices';
import { errorToaster, successToaster } from '../utils/toasts';
import { CONTACT_SCUCCESS, FAILURE } from '../constants/AppMessages';
import Loader from '../components/Loader';

export default function ContactUs() {
  const [type, setType] = useState(BillingTypes[0]);
  const [loading, setLoading] = useState(false);
  const handleContact = async (values) => {
    setLoading(true);
    const res = await contactService({
      ...values,
      type
    });
    if (res.status === 200) {
      formik.resetForm();
      successToaster(CONTACT_SCUCCESS);
    } else {
      errorToaster(FAILURE);
    }
    setLoading(false);
  };
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: ''
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      await handleContact(values);
    }
  });
  return (
    <div>
      <div className='sm:flex sm:space-x-12'>
        <OulinedInput
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={'fullName' in formik.errors && formik.touched.fullName}
          errorMessage={formik.errors.fullName}
          label={'Full Name'}
          id={'name'}
          name={'fullName'}
          type={'text'}
        />

        <OulinedInput
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={'email' in formik.errors && formik.touched.email}
          errorMessage={formik.errors.email}
          label={'Email'}
          id={'mail'}
          name={'email'}
          type={'email'}
        />
      </div>

      <div className='mt-1  sm:mt-5 '>
        <label
          id='type'
          className='block text-md font-medium mt-4 sm:mt-px sm:pt-2'
        >
          Select Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id='type'
          name='type'
          required
          className='block mt-3 w-full max-w-sm border-b bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-lg sm:text-sm'
        >
          {BillingTypes?.map((type) => (
            <>
              <option value={type}>{type}</option>
            </>
          ))}
        </select>
      </div>
      <div className='mt-1  sm:mt-5 '>
        <OulinedInput
          value={formik.values.message}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={'message' in formik.errors && formik.touched.message}
          errorMessage={formik.errors.message}
          label={'Message'}
          id={'Message'}
          name={'message'}
          type={'textarea'}
        />

        <Button
          onClick={formik.handleSubmit}
          className={
            'flex !mt-12 tracking-wide justify-center rounded-sm bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-1 sm:py-3 !px-12 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
          }
          title={loading ? <Loader /> : 'Submit'}
        />
      </div>
    </div>
  );
}
