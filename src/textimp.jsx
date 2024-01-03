import React, { useRef, useState } from 'react';

const TextInput = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');
  const handleInputChange = () => {
    setText(inputRef.current.value);
  };
  const handleClearClick = () => {
    inputRef.current.value = '';
    setText('');
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <br />
      <label>{text}</label>
      <br />
      <button onClick={handleClearClick}>Очистить</button>
    </div>
  );
};

export default TextInput;