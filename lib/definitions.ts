export type surveyResults = {
    year: number;
    pyes: number;
  };

export type genderbias = {
  metrics: string;
  SDP: number;
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