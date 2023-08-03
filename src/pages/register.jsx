import React from 'react';
import { useState } from 'react';

import DarkInput from '../components/DarkInput';
import Twitter from '../assets/Twitter.svg';
import Discord from '../assets/Discord.svg';
import Fb from '../assets/Fb.svg';
import Instagram from '../assets/Instagram.svg';
import { useFormik } from 'formik';
import { registerSchema } from '../utils/yupValidations';
import Button from '../components/Button';

export const Register = () => {
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      twitter: '',
      discord: '',
      facebook: '',
      instagram: '',
      password: '',
      confirmPassword: '',
      acceptTOS: false
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      <div className='flex min-h-full  flex-col justify-center bg-black mx-auto px-6  py-12 sm:px-6 lg:px-8'>
        <div className='bg-sign-bg bg-no-repeat relative bg-right-top '>
          <div className='mt-28 mx-4  sm:mx-auto sm:w-full sm:max-w-5xl'>
            <div className=' py-8  bg-grey shadow rounded-lg '>
              <div className='border-b-[1.5px] border-gray-600 px-6 sm:px-10 pb-5 '>
                <h2 className='mt-6  flex text-start text-xl font-semibold tracking-wide text-white'>
                  Personal Information
                </h2>
              </div>

              <form className='space-y-8 divide-y divide-gray-200 px-6 sm:px-10'>
                <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5 text-white'>
                  <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-8'>
                    <div className='space-y-3 sm:space-y-3'>
                      <DarkInput
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        label={'Full name'}
                        type={'text'}
                        name='fullName'
                        placeholder={'Suvoroy97'}
                        id='fullName'
                        autoComplete={'given-name'}
                        isInvalid={
                          'fullName' in formik.errors && formik.touched.fullName
                        }
                        errorMessage={formik.errors.fullName}
                      />

                      <DarkInput
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        label={'Email address'}
                        id='email'
                        name='email'
                        type='email'
                        placeholder='infomail@gmail.com'
                        autoComplete='email'
                        isInvalid={
                          'email' in formik.errors && formik.touched.email
                        }
                        errorMessage={formik.errors.email}
                      />
                      <DarkInput
                        type={'phone'}
                        name={'phoneNumber'}
                        label={' Phone Number'}
                        onBlur={formik.handleBlur('phoneNumber')}
                        value={formik.values.phoneNumber}
                        onChange={(value) => {
                          formik.handleChange({
                            target: { name: 'phoneNumber', value: value }
                          });
                        }}
                        isInvalid={
                          'phoneNumber' in formik.errors &&
                          formik.touched.phoneNumber
                        }
                        errorMessage={formik.errors.phoneNumber}
                      />
                      <DarkInput
                        value={formik.values.twitter}
                        onChange={formik.handleChange}
                        icon={Twitter}
                        label={'Twitter'}
                        id='twitter'
                        name='twitter'
                        type='text'
                        autoComplete='twitter link'
                        placeholder='Add'
                        bgIcon={'bg-twitter-blue'}
                        isInvalid={
                          'twitter' in formik.errors && formik.touched.twitter
                        }
                        errorMessage={formik.errors.twitter}
                      />

                      <DarkInput
                        value={formik.values.discord}
                        onChange={formik.handleChange}
                        icon={Discord}
                        label={'Discord'}
                        id='Discord'
                        name='discord'
                        type='text'
                        autoComplete='twitter link'
                        placeholder='Add'
                        bgIcon={'bg-discord-blue'}
                        isInvalid={
                          'discord' in formik.errors && formik.touched.discord
                        }
                        errorMessage={formik.errors.discord}
                      />

                      <DarkInput
                        value={formik.values.facebook}
                        onChange={formik.handleChange}
                        icon={Fb}
                        label={'Facebook'}
                        id='facebook'
                        name='facebook'
                        type='text'
                        autoComplete='facebook link'
                        placeholder='Add'
                        bgIcon={'bg-facebook-blue'}
                        isInvalid={
                          'facebook' in formik.errors && formik.touched.facebook
                        }
                        errorMessage={formik.errors.facebook}
                      />

                      <DarkInput
                        value={formik.values.instagram}
                        onChange={formik.handleChange}
                        icon={Instagram}
                        label={'Instagram'}
                        id='instagram'
                        name='instagram'
                        type='text'
                        autoComplete='instagram link'
                        placeholder='Add'
                        bgIcon={'bg-instgram-purple'}
                        isInvalid={
                          'instagram' in formik.errors &&
                          formik.touched.instagram
                        }
                        errorMessage={formik.errors.instagram}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='mt-11  mx-6 sm:mx-auto sm:w-full sm:max-w-5xl'>
            <div className=' py-8  bg-grey shadow rounded-lg '>
              <div className='border-b-[1.5px] border-gray-600 px-6 sm:px-10 pb-5 '>
                <h2 className='mt-6  flex text-start text-xl font-semibold tracking-wide text-white'>
                  Account Secuirty
                </h2>
              </div>
              <form className='space-y-8 divide-y divide-gray-200 px-6 sm:px-10'>
                <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5 text-white'>
                  <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-8'>
                    <div className='space-y-3 sm:space-y-3'>
                      <DarkInput
                        securityText={showPassword}
                        setShowPassword={setShowPassword}
                        label={'Password'}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type='password'
                        name='password'
                        id='password'
                        autoComplete=''
                        placeholder='***********'
                        isInvalid={
                          'password' in formik.errors && formik.touched.password
                        }
                        errorMessage={formik.errors.password}
                      />
                      <DarkInput
                        securityText={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                        label={'Confrim Password'}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          'confirmPassword' in formik.errors &&
                          formik.touched.confirmPassword
                        }
                        errorMessage={formik.errors.confirmPassword}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='*********'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='mt-11  mx-6 sm:mx-auto sm:w-full sm:max-w-5xl'>
            <div className=' py-8  bg-grey shadow rounded-lg '>
              <div className='border-b-[1.5px] border-gray-600 px-6 sm:px-10 pb-5 '>
                <h2 className='mt-6  flex text-start text-xl font-semibold tracking-wide text-white'>
                  Join Our Mailing List
                </h2>
              </div>
              <form className='space-y-8 divide-y divide-gray-200 px-6 sm:px-10'>
                <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5 text-white'>
                  <div className='space-y-6 pt-8 sm:space-y-5 sm:pt-8'>
                    <p className='text-xs sm:text-sm'>
                      We would like to send you occasional news, information and
                      special offers by email. To join our mailing list, simply
                      tick the box below. You can unsubscribe at any time.
                    </p>
                    <div className='flex space-x-5 sm:space-x-36 pb-16 items-center'>
                      <h4 className=' text-lg'>Receive Emails :</h4>
                      <div className=' flex rounded-md border-gradient-to-r border-2 border-dark-purple '>
                        <div
                          onClick={() => setReceiveEmails(!receiveEmails)}
                          className={
                            receiveEmails
                              ? ' cursor-pointer bg-gradient-to-r from-light-purple rounded-r-md to-dark-purple bg-origin-border px-4 py-1 text-xs sm:text-sm font-normal text-white shadow-sm '
                              : ' cursor-pointer px-4 py-1 text-xs sm:text-sm font-normal'
                          }
                        >
                          Yes
                        </div>

                        <div
                          onClick={() => setReceiveEmails(!receiveEmails)}
                          className={
                            !receiveEmails
                              ? ' cursor-pointer bg-gradient-to-r from-light-purple rounded-r-md to-dark-purple bg-origin-border px-4 py-1 text-xs sm:text-sm font-normal text-white shadow-sm '
                              : 'cursor-pointer px-4 py-1 text-xs sm:text-sm font-normal'
                          }
                        >
                          {' '}
                          No
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='mt-11  mx-6 sm:mx-auto sm:w-full sm:max-w-5xl'>
            <div className=' shadow rounded-lg '>
              <div className='flex flex-col sm:flex-row  mx-6  items-center sm:space-x-9 text-white'>
                <div>
                  <div className='flex space-x-3 md:space-x-5 items-center '>
                    <input
                      aria-describedby='tos'
                      name='acceptTOS'
                      id='tos'
                      fill='none'
                      type='checkbox'
                      value={formik.values.acceptTOS}
                      onChange={formik.handleChange}
                      className='h-4 w-4 accent-dark-purple hover:accent-light-purple rounded bg-none bg-transparent checked:color-light-purple border-dark-purple border-2  shadow-sm hover:border-purple-700 focus:ring-dark-purple'
                    />
                    <h4 className='tracking-wide text-sm sm:text-lg uppercase'>
                      I have read and agree to the
                      <span className=' ml-4 text-transparent bg-clip-text bg-gradient-to-r from-light-purple to-dark-purple'>
                        terms of services
                      </span>
                    </h4>
                  </div>

                  {'acceptTOS' in formik.errors && (
                    <div class='  text-red-700  my-1  '>
                      <span class='block sm:inline'>
                        {formik.errors.acceptTOS}
                      </span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={formik.handleSubmit}
                  title={'Submit and Select Package'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
