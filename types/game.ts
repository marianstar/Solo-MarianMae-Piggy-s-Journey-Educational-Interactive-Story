export interface Choice {
  text: string;
  walletChange: number;
  lesson: string;
}

export interface StoryEvent {
  id: number;
  day: number;
  title: string;
  description: string;
  choices: Choice[];
}

export interface Wallet {
  balance: number;
  goal: number;
  transactions: string[];
}
