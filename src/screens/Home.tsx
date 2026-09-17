import AppAreaChart from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import AppPieChart from "@/components/AppPieChart"

export function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <AppBarChart/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <AppAreaChart/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">test</div>
    </div>
  )
}

export default Home
