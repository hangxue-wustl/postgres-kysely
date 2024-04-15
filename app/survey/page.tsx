import React, { useState } from 'react';

const Page: React.FC = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState<string>('');

  // Handler function to update the input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Question</h1>
      <p>What is your favorite programming language?</p>
      {/* Input box to capture the user's response */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Type your answer here..." 
      />
      {/* Display the user's input */}
      <p>Your answer: {inputValue}</p>
    </div>
  );
};

export default Page;
