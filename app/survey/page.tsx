'use client'

import React, { useState } from 'react';

const Page: React.FC = () => {
  // State variables to store input values
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [mentalHealthIssues, setMentalHealthIssues] = useState<boolean>(false);

  // Handler functions to update input values
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleMentalHealthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMentalHealthIssues(event.target.checked);
  };

  return (
    <div>
      <h1>Survey</h1>

      <div>
        <h2>Question 1</h2>
        <p>What is your age?</p>
        <input 
          type="text" 
          value={age} 
          onChange={handleAgeChange} 
          placeholder="Type your answer here..." 
        />
        <p>Your answer: {age}</p>
      </div>

      <div>
        <h2>Question 2</h2>
        <p>What is your gender?</p>
        <input 
          type="text" 
          value={gender} 
          onChange={handleGenderChange} 
          placeholder="Type your answer here..." 
        />
        <p>Your answer: {gender}</p>
      </div>

      <div>
        <h2>Question 3</h2>
        <p>What is your country of origin?</p>
        <input 
          type="text" 
          value={country} 
          onChange={handleCountryChange} 
          placeholder="Type your answer here..." 
        />
        <p>Your answer: {country}</p>
      </div>

      <div>
        <h2>Question 4</h2>
        <p>Have you ever experienced mental health issues?</p>
        <label>
          <input 
            type="checkbox" 
            checked={mentalHealthIssues} 
            onChange={handleMentalHealthChange} 
          />
          Yes, I have experienced mental health issues
        </label>
        <p>Your answer: {mentalHealthIssues ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default Page;

