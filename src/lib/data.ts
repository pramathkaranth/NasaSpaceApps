import type { AqiData, HealthAlert, CommunityReport, HistoricalAqi } from '@/types';

export const aqiData: AqiData[] = [
  {
    source: 'TEMPO',
    value: 45,
    pollutant: 'O₃',
    city: 'San Francisco',
    recommendation: 'Good air quality. Enjoy outdoor activities.',
  },
  {
    source: 'OpenAQ',
    value: 78,
    pollutant: 'PM2.5',
    city: 'San Francisco',
    recommendation: 'Moderate. Sensitive groups should reduce outdoor exertion.',
  },
  {
    source: 'Pandora',
    value: 22,
    pollutant: 'NO₂',
    city: 'San Francisco',
    recommendation: 'Excellent air quality.',
  },
];

export const personalExposureScore = 65;

export const healthAlerts: HealthAlert[] = [
  {
    id: '1',
    title: 'High Pollen Count',
    description: 'Pollen levels are expected to be high today. Consider taking allergy medication.',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    title: 'PM2.5 Spike Alert',
    description: 'A temporary increase in PM2.5 is forecasted for 3 PM. Plan activities accordingly.',
    timestamp: '8 hours ago',
  },
];

export const communityReports: CommunityReport[] = [
  {
    id: 'cr1',
    user: { name: 'Jane D.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    observation: 'Noticed a strange haze near the industrial park. My asthma is acting up.',
    location: 'Bayview District',
    timestamp: '45 minutes ago',
  },
  {
    id: 'cr2',
    user: { name: 'Mike R.', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    observation: 'Smell of smoke in the air, but no visible fire. Anyone else?',
    location: 'Golden Gate Park',
    timestamp: '2 hours ago',
  },
];

export const historicalAqiData: HistoricalAqi[] = [
  { date: 'Mon', 'PM2.5': 55, 'O₃': 40, 'NO₂': 25 },
  { date: 'Tue', 'PM2.5': 62, 'O₃': 45, 'NO₂': 30 },
  { date: 'Wed', 'PM2.5': 75, 'O₃': 50, 'NO₂': 35 },
  { date: 'Thu', 'PM2.5': 68, 'O₃': 55, 'NO₂': 32 },
  { date: 'Fri', 'PM2.5': 50, 'O₃': 42, 'NO₂': 28 },
  { date: 'Sat', 'PM2.5': 45, 'O₃': 38, 'NO₂': 22 },
  { date: 'Sun', 'PM2.5': 42, 'O₃': 35, 'NO₂': 20 },
];
