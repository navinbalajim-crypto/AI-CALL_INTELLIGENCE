// Fix: Import ReactNode to resolve 'Cannot find namespace React' error.
import { ReactNode } from 'react';

export enum Sentiment {
  Positive = 'Positive',
  Neutral = 'Neutral',
  Negative = 'Negative',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ActionItem {
  id: string;
  callId: string;
  task: string;
  owner: string;
  deadline: string;
  status: 'pending' | 'completed';
}

export interface Problem {
  id: string;
  description: string;
}

export interface Solution {
  id: string;
  description: string;
  resourceLink?: string;
}

export interface SentimentAnalysis {
  id: string;
  line: string;
  sentiment: Sentiment;
}

export interface CallAnalysis {
  problems: Omit<Problem, 'id'>[];
  solutions: Omit<Solution, 'id'>[];
  actionItems: Omit<ActionItem, 'id' | 'callId' | 'status'>[];
  sentimentAnalysis: Omit<SentimentAnalysis, 'id'>[];
}

export interface Call {
  id: string;
  name: string;
  distributor: string;
  participants: string;
  date: string;
  transcript: string;
  problems: Problem[];
  solutions: Solution[];
  actionItems: ActionItem[];
  sentimentAnalysis: SentimentAnalysis[];
  status: 'Processed' | 'Pending';
  healthScore: number;
}

export type KPI = {
  title: string;
  value: string | number;
  // Fix: Changed React.ReactNode to the imported ReactNode type.
  icon: ReactNode;
  color: string;
};

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdDate: string;
  status: 'Active' | 'Revoked';
}
