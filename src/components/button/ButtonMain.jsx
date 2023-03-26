import React, { useEffect } from 'react';

const ButtonMain = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonMain;
