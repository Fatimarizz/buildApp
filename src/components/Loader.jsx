import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={25}
      width={25}
      color='#fff'
      wrapperStyle={{}}
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor='#fff'
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
}
