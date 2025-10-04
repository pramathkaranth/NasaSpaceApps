import { AqiCard } from "@/components/dashboard/aqi-card";
import { ExposureScoreCard } from "@/components/dashboard/exposure-score-card";
import { HistoricalChartCard } from "@/components/dashboard/historical-chart-card";
import { ActivityPlannerCard } from "@/components/dashboard/activity-planner-card";
import { CommunityReportsCard } from "@/components/dashboard/community-reports-card";
import { CarbonFootprintCard } from "@/components/dashboard/carbon-footprint-card";
import { EmergencyAlert } from "@/components/dashboard/emergency-alert";

import { aqiData, personalExposureScore, historicalAqiData, communityReports } from "@/lib/data";

export default function DashboardPage() {
  return (
    <>
      <EmergencyAlert />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {aqiData.map(data => <AqiCard key={data.source} data={data} />)}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <HistoricalChartCard data={historicalAqiData} />
            <CommunityReportsCard reports={communityReports} />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-3 xl:col-span-1">
          <ExposureScoreCard score={personalExposureScore} />
          <ActivityPlannerCard />
          <CarbonFootprintCard />
        </div>
      </div>
    </>
  );
}
