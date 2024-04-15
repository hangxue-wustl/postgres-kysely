import React from 'react';

const SurveyPage: React.FC = () => {
  const userSurvey = {
    surveyName: 'User Survey',
    surveySlug: 'user-survey',
    surveySteps: [
      {
        title: 'What is your favorite color?',
        fields: [
          {
            type: 'select',
            id: 'favorite-color',
            label: 'Favorite color',
            options: [
              {
                id: 'red',
                label: "Red",
              },
              {
                id: 'green',
                label: "Green",
              },
              {
                id: 'other',
                label: "Other",
                reveals: {
                  id: 'which-color',
                  label: 'Which color?'
                }
              },
            ],
          },
        ],
      },
      {
        title: 'Where have you visited?',
        fields: [
          {
            type: 'select',
            id: 'places-visited',
            label: 'Places visited',
            selectMultiple: true,
            options: [
              {
                id: 'paris',
                label: "Paris",
              },
              {
                id: 'london',
                label: "London",
              },
              {
                id: 'kyoto',
                label: "Kyoto",
              },
            ],
          },
          {
            type: 'text',
            id: 'favorite-place',
            label: 'What is your favorite place?'
          }
        ],
      },
      {
        title: 'Do aliens exist?',
        fields: [
          {
            type: 'select',
            id: 'do-aliens-exist',
            label: 'Add your answer...',
            as: 'dropdown',
            options: [
              {
                id: 'yes',
                label: "Yes",
              },
              {
                id: 'no',
                label: "No",
                reveals: {
                  id: 'why-not',
                  label: 'Why not?'
                }
              },

            ]
          },
          {
            type: 'select',
            as: 'combobox',
            id: 'confidence-in-alien-existence',
            label: 'Who is your favorite alien?',
            options: [
              {
                id: 'et',
                label: "ET",
              },
              {
                id: 'stitch',
                label: "Stitch",
              },
              {
                id: 'toy-story-aliens',
                label: "The aliens from Toy Story",
              },
              {
                id: 'zoidberg',
                label: "Zoidberg",
              },
            ],
          }
        ],
      },
    ],
  };

  return (
    <div>
      <h1>{userSurvey.surveyName}</h1>
      {userSurvey.surveySteps.map((step, stepIndex) => (
        <div key={stepIndex}>
          <h2>{step.title}</h2>
          {step.fields.map((field, fieldIndex) => (
            <div key={fieldIndex}>
              <label>{field.label}</label>
              {field.type === 'select' && field.options ? (
                <select id={field.id}>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'text' ? (
                <input type="text" id={field.id} />
              ) : null}
              {field.reveals && field.reveals.label && (
                <div>
                  <label>{field.reveals.label}</label>
                  <input type="text" id={field.reveals.id} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SurveyPage;
