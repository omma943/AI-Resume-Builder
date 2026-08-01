export type Education = {
  id: number;
  college: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  cgpa: string;
};

export type ResumeData = {
  fullName: string;
  jobTitle: string;

  email: string;
  phone: string;
  location: string;

  linkedin: string;
  github: string;

  summary: string;

  website: string;
  portfolio: string;
  dateOfBirth: string;
  nationality: string;

  education: Education[];

  skills: string[];
};