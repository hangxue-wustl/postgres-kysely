import React, { useState } from 'react';

interface SurveyPageProps {
  questions: string[]; // Array of survey questions
}

const SurveyPage: React.FC<SurveyPageProps> = ({ questions }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(new Array(questions.length).fill(''));

  const handleOptionSelect = (questionIndex: number, option: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <h1>Survey</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question}</h3>
          <div>
            <button onClick={() => handleOptionSelect(index, 'Option 1')}>Option 1</button>
            <button onClick={() => handleOptionSelect(index, 'Option 2')}>Option 2</button>
            <button onClick={() => handleOptionSelect(index, 'Option 3')}>Option 3</button>
            {/* Add more options as needed */}
          </div>
          <p>Selected Option: {selectedOptions[index]}</p>
        </div>
      ))}
      <button onClick={() => console.log(selectedOptions)}>Submit</button>
      {/* Replace console.log with submission logic */}
    </div>
  );
};

export default SurveyPage;
