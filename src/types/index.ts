export type AqiData = {
  source: 'TEMPO' | 'OpenAQ' | 'Pandora' | 'Weather';
  value: number;
  pollutant: 'PM2.5' | 'O₃' | 'NO₂' | 'SO₂';
  city: string;
  recommendation: string;
};

export type HealthAlert = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
};

export type CommunityReport = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  observation: string;
  location: string;
  timestamp: string;
};

export type HistoricalAqi = {
  date: string;
  'PM2.5': number;
  'O₃': number;
  'NO₂': number;
};
