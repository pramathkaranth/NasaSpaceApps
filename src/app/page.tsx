
import Link from 'next/link';
import { AqiCard } from '@/components/shared/aqi-card';
import { aqiData } from '@/lib/data';

export default function LandingPage() {
  const tempoData = aqiData.find(d => d.source === 'TEMPO');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Welcome to the Air Quality Dashboard
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
          Here is the current Air Quality Index.
        </p>
        <div className="mt-8 flex justify-center">
          {tempoData && <AqiCard data={tempoData} />}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Go to Full Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
