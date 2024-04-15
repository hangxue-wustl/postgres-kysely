import React, { useRef } from 'react';

interface SurveyPageProps {
  questions: string[]; // Array of survey questions
}

const SurveyPage: React.FC<SurveyPageProps> = ({ questions }) => {
  const selectedOptionsRef = useRef<string[]>(new Array(questions.length).fill(''));

  const handleOptionSelect = (questionIndex: number, option: string) => {
    selectedOptionsRef.current[questionIndex] = option;
  };

  const handleSubmit = () => {
    console.log(selectedOptionsRef.current);
    // Replace console.log with submission logic
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
          <p>Selected Option: {selectedOptionsRef.current[index]}</p>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SurveyPage;
