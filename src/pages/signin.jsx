import { Link } from 'react-router-dom';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import LightInput from '../components/LightInput';
import Google from '../assets/Google.svg';
import Facebook from '../assets/Facebook.svg';
import { useFormik } from 'formik';
import { loginSchema } from '../utils/yupValidations';

export default function Sigin() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <div className='flex min-h-full  flex-col justify-center bg-black mx-auto px-6  py-12 sm:px-6 lg:px-8'>
        <div className='bg-sign-bg bg-no-repeat relative bg-top-4 '>
          <div className='mt-28 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className=' py-8  bg-grey shadow rounded-lg px-6 sm:px-10'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-xl font-semibold tracking-tight text-white'>
                  Sign in
                </h2>
                <p className='m1-2 text-center font-normal text-sm text-white'>
                  <a href='#' className='mt-2 font-normal text-gray-300'>
                    Let's build something greate
                  </a>
                </p>
              </div>
              <form className='space-y-6 ' action='#' method='POST'>
                <div>
                  <div className='mt-10'>
                    <LightInput
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      placeholder='Enter your email'
                      isInvalid={
                        'email' in formik.errors && formik.touched.email
                      }
                      errorMessage={formik.errors.email}
                    />
                  </div>
                </div>

                <div>
                  <div className='mt-8'>
                    <LightInput
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      placeholder='Enter your password'
                      isInvalid={
                        'password' in formik.errors && formik.touched.password
                      }
                      errorMessage={formik.errors.password}
                    />
                  </div>
                </div>

                <div>
                  <Button title={'Login'} className='w-full' />
                </div>
                <div className='text-sm flex justify-end'>
                  <a
                    href='#'
                    className='font-medium text-white hover:text-gray-500'
                  >
                    Forgot your password?
                  </a>
                </div>
              </form>

              <div className='mt-6'>
                <div className='mt-6 grid grid-cols-2 gap-1'>
                  <IconButton icon={Google} label={'Sign in with Google'} />

                  <IconButton icon={Facebook} label={'Sign in with Facebook'} />
                </div>
              </div>
              <div className='mt-4 text-sm flex justify-center'>
                <a href='#' className='font-normal text-white '>
                  Don't have account ?
                  <Link to='/register'>
                    {' '}
                    <span className='text-dark-purple hover:text-light-purple'>
                      {' '}
                      Sign up
                    </span>{' '}
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
