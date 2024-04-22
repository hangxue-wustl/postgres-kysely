export type surveyResults = {
    year: number;
    age: number;
  };

export type genderbias = {
  metrics: string;
  bias: number;
};

export type racebias = {
  metrics: string;
  bias: number;
};

export type agebias = {
  metrics: string;
  bias: number;
};

export type surveyUser = {
    id: string;
    year: number;
    age: number;
    gender: string;
    country: string;
    mental_health: string;
    createdAt: string;

  };