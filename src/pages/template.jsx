import React from 'react';
import { useParams } from 'react-router-dom';

export default function Template() {
  const { template } = useParams();
  console.log('decode222',  JSON.parse(decodeURIComponent(template)));
  return <div>TEmpate</div>;
}
