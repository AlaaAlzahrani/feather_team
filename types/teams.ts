// types/teams.ts

export interface Resource {
  title: string;
  description: string;
  icon: any; 
  count: string;
}

export interface Report {
  title: string;
  author: string;
  date: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
}

export interface TeamData {
  resources: Resource[];
  memberCount: number;
}