'use client'

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
      <h1>Question 1</h1>
      <p>What is your age?</p>
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
    
    <div>
      <h1>Question 2</h1>
      <p>What is your gender?</p>
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

    <div>
      <h1>Question 3</h1>
      <p>Which country is your home country?</p>
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

    <div>
      <h1>Question 4</h1>
      <p>Have you experienced mental health issues?</p>
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
