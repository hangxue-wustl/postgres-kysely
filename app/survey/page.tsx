import { writeSurveyResults } from '@/lib/data';
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

  const handleSubmit = async () => {
    // Construct the data object with survey responses
    const data = {
      age,
      gender,
      country,
      mentalHealthIssues,
    };
    writeSurveyResults(data);

  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>
      <h1 style={{ fontSize: '32px', textAlign: 'center' }}>Use Client</h1>

      <div>
        <h2 style={{ fontSize: '24px' }}>Question 1</h2>
        <p style={{ fontSize: '20px' }}>What is your age?</p>
        <input 
          type="text" 
          value={age} 
          onChange={handleAgeChange} 
          placeholder="Type your answer here..." 
          style={{ fontSize: '20px', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
        />
        <p style={{ fontSize: '20px' }}>Your answer: {age}</p>
      </div>

      <div>
        <h2 style={{ fontSize: '24px' }}>Question 2</h2>
        <p style={{ fontSize: '20px' }}>What is your gender?</p>
        <input 
          type="text" 
          value={gender} 
          onChange={handleGenderChange} 
          placeholder="Type your answer here..." 
          style={{ fontSize: '20px', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
        />
        <p style={{ fontSize: '20px' }}>Your answer: {gender}</p>
      </div>

      <div>
        <h2 style={{ fontSize: '24px' }}>Question 3</h2>
        <p style={{ fontSize: '20px' }}>What is your country of origin?</p>
        <input 
          type="text" 
          value={country} 
          onChange={handleCountryChange} 
          placeholder="Type your answer here..." 
          style={{ fontSize: '20px', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
        />
        <p style={{ fontSize: '20px' }}>Your answer: {country}</p>
      </div>

      <div>
        <h2 style={{ fontSize: '24px' }}>Question 4</h2>
        <p style={{ fontSize: '20px' }}>Have you ever experienced mental health issues?</p>
        <label style={{ fontSize: '20px', marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            checked={mentalHealthIssues} 
            onChange={handleMentalHealthChange} 
          />
          Yes, I have experienced mental health issues
        </label>
        <p style={{ fontSize: '20px' }}>Your answer: {mentalHealthIssues ? 'Yes' : 'No'}</p>
      </div>

      <button onClick={handleSubmit} style={{ 
        backgroundColor: '#4CAF50', 
        border: 'none', 
        color: 'white', 
        padding: '15px 32px', 
        textAlign: 'center', 
        textDecoration: 'none', 
        display: 'inline-block', 
        fontSize: '24px', 
        margin: '4px 2px', 
        cursor: 'pointer', 
        borderRadius: '12px',
        transition: 'background-color 0.3s ease',
        }}
        // Add hover style
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        // Reset to original color when mouse leaves button
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Submit
      </button>
    </div>
  );
};

export default Page;
