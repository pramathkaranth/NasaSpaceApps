import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export function EmergencyAlert() {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Emergency: Wildfire Detected</AlertTitle>
      <AlertDescription>
        A significant wildfire has been reported in the North Bay. Air quality is hazardous. Stay indoors and use air purifiers if possible.
      </AlertDescription>
    </Alert>
  )
}
