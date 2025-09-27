
import { Call, ActionItem, Sentiment, ApiKey, User } from './types';

// NOTE: This is an internal type for the mock API, not for general app use.
// It's defined here to be used in MOCK_USERS if needed.
export interface UserWithPassword extends User {
  password_DO_NOT_USE_IN_PROD: string;
}

export const MOCK_USERS: UserWithPassword[] = [];


export const MOCK_CALLS: Call[] = [
  {
    id: 'call-1',
    name: 'Q1 Partnership Review',
    distributor: 'TechLink Solutions',
    participants: 'John Doe (Vendor), Jane Smith (TechLink)',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    transcript: "John: Thanks for joining, Jane. How's Q1 looking? Jane: It's been tough. Our sales team struggles with the new CRM. It's not intuitive. John: I see. We have a new CRM onboarding guide I can send over. Jane: That would be great. Also, we're seeing low adoption of the new X-series product. John: We can schedule a workshop for your team. I'll get that set up. Jane: Perfect, thanks John. That's a positive step.",
    problems: [
      { id: 'p1', description: 'Sales team struggles with the new CRM due to its lack of intuitive design.' },
      { id: 'p2', description: 'Low adoption of the new X-series product.' },
    ],
    solutions: [
      { id: 's1', description: 'Provide the new CRM onboarding guide.', resourceLink: 'https://example.com/crm-guide' },
      { id: 's2', description: 'Schedule a product workshop for the sales team on the X-series.', resourceLink: 'https://example.com/workshop-signup' },
    ],
    actionItems: [
      { id: 'a1', callId: 'call-1', task: 'Send CRM onboarding guide', owner: 'John Doe', deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], status: 'pending' },
      { id: 'a2', callId: 'call-1', task: 'Schedule X-series workshop', owner: 'John Doe', deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], status: 'pending' },
    ],
    sentimentAnalysis: [
        { id: 'sa1', line: "It's been tough.", sentiment: Sentiment.Negative },
        { id: 'sa2', line: "Our sales team struggles with the new CRM.", sentiment: Sentiment.Negative },
        { id: 'sa3', line: "That would be great.", sentiment: Sentiment.Positive },
        { id: 'sa4', line: "Perfect, thanks John.", sentiment: Sentiment.Positive },
        { id: 'sa5', line: "That's a positive step.", sentiment: Sentiment.Positive },
    ],
    status: 'Processed',
    healthScore: 68,
  },
    {
    id: 'call-2',
    name: 'Enablement Sync',
    distributor: 'Global Connect',
    participants: 'Alice (Vendor), Bob (Global)',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    transcript: "Alice: Hey Bob, checking in on the new marketing assets. Bob: Hey Alice, the team loves them. The campaigns are performing really well. Alice: Great to hear! Any roadblocks? Bob: None at all. Everything is smooth. We're very happy with the support.",
    problems: [],
    solutions: [],
    actionItems: [
        { id: 'a3', callId: 'call-2', task: 'Follow-up on campaign results', owner: 'Alice', deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], status: 'completed' },
    ],
    sentimentAnalysis: [
        { id: 'sa6', line: "The team loves them.", sentiment: Sentiment.Positive },
        { id: 'sa7', line: "The campaigns are performing really well.", sentiment: Sentiment.Positive },
        { id: 'sa8', line: "Great to hear!", sentiment: Sentiment.Positive },
        { id: 'sa9', line: "Everything is smooth.", sentiment: Sentiment.Positive },
        { id: 'sa10', line: "We're very happy with the support.", sentiment: Sentiment.Positive },
    ],
    status: 'Processed',
    healthScore: 100,
  },
];

export const MOCK_ACTION_ITEMS: ActionItem[] = MOCK_CALLS.flatMap(call => call.actionItems);

export const MOCK_API_KEYS: ApiKey[] = [
  {
    id: 'key-1',
    name: 'Default Integration Key',
    key: `sk-live_${'a'.repeat(10)}${'*'.repeat(30)}${'1'.repeat(4)}`,
    createdDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'Active',
  },
  {
    id: 'key-2',
    name: 'Marketing Analytics Tool',
    key: `sk-live_${'b'.repeat(10)}${'*'.repeat(30)}${'2'.repeat(4)}`,
    createdDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'Active',
  },
  {
    id: 'key-3',
    name: 'Old Dev Key (Revoked)',
    key: `sk-live_${'c'.repeat(10)}${'*'.repeat(30)}${'3'.repeat(4)}`,
    createdDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'Revoked',
  },
];