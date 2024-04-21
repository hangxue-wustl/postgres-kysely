import ms from 'ms'
import { surveyResults } from './definitions';

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

export const generateYAxis = (surveyResults: surveyResults[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const topLabel = 100;

  for (let i = topLabel; i >= 0; i -= 10) {
    yAxisLabels.push(`${i}%`);
  }
  

  return { yAxisLabels, topLabel };
};