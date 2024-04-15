import React, { useState } from 'react';

interface SurveyStep {
  title: string;
  fields: SurveyField[];
}

interface SurveyField {
  type: string;
  id: string;
  label: string;
  options?: SurveyOption[];
  selectMultiple?: boolean;
}

interface SurveyOption {
  id: string;
  label: string;
  reveals?: {
    id: string;
    label: string;
  };
}

interface SurveyInfo {
  surveyName: string;
  surveySlug: string;
  surveySteps: SurveyStep[];
}

interface SurveyProps {
  surveyInfo: SurveyInfo;
  onSubmit: (value: any) => void;
}

const Survey: React.FC<SurveyProps> = ({ surveyInfo, onSubmit }) => {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (stepIndex: number, fieldIndex: number) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    const newFormData = { ...formData };

    if (surveyInfo.surveySteps[stepIndex].fields[fieldIndex].selectMultiple) {
      if (!newFormData[id]) {
        newFormData[id] = [];
      }

      if (event.target.checked) {
        newFormData[id].push(value);
      } else {
        newFormData[id] = newFormData[id].filter((val: string) => val !== value);
      }
    } else {
      newFormData[id] = value;
    }

    setFormData(newFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {surveyInfo.surveySteps.map((step, stepIndex) => (
        <div key={stepIndex}>
          <h3>{step.title}</h3>
          {step.fields.map((field, fieldIndex) => (
            <div key={fieldIndex}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === 'select' ? (
                <select id={field.id} onChange={handleChange(stepIndex, fieldIndex)}>
                  {field.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'text' ? (
                <input type="text" id={field.id} onChange={handleChange(stepIndex, fieldIndex)} />
              ) : (
                field.type === 'select' && (
                  <div>
                    {field.options?.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <input
                          type="checkbox"
                          id={option.id}
                          value={option.id}
                          onChange={handleChange(stepIndex, fieldIndex)}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Survey;
