import React from 'react';
import BR2JSX from './BR2JSX';

export default () => {
  const text = 'первый<br>второй<br/>третий<br />последний';
  return (
    <BR2JSX text={text} />
  );
};
