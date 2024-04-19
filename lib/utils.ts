import ms from 'ms';
import { Survey } from './definitions';


export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

export const generateYAxis = (surveys: Survey[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on the highest record of survey responses
  const yAxisLabels = [];
  const highestRecord = Math.max(...surveys.map((survey) => survey.count)); // Assuming count is the field representing the number of surveys
  const topLabel = Math.ceil(highestRecord / 100) * 100; // Adjust the divisor based on your data

  for (let i = topLabel; i >= 0; i -= 100) { // Adjust the step based on your data
    yAxisLabels.push(`${i}`);
  }

  return { yAxisLabels, topLabel };
};
