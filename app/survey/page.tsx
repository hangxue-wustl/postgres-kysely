import React from 'react';

const Page: React.FC = () => {
  const [answer, setAnswer] = React.useState<string>('');

  const questions: string[] = ["What is your favorite color?"];

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the submission of the answer
    console.log('Submitted answer:', answer);
    // You can send the answer to your backend, or perform any other action
  };

  return (
    <div>
      <h1>Simple Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {questions[0]} {/* Assuming questions is an array */}
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
