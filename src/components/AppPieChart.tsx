import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
import { TrendingUp } from "lucide-react"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-6)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-8)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-9)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-10)",
  },
  other: {
    label: "Other",
    color: "var(--chart-11)",
  },
} satisfies ChartConfig
const AppPieChart = () => {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">Browser Usage</p>
      <ChartContainer config={chartConfig} className="min-h-50 w-full">
        <PieChart accessibilityLayer data={chartData}>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie data={chartData} dataKey="visitors" nameKey="browser" />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  )
}

export default AppPieChart
