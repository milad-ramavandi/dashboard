import AppAreaChart from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import AppPieChart from "@/components/AppPieChart"
import CardsList from "@/components/CardsList"
import TodosList from "@/components/TodosList"

export function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart/>
      </div>
       <div className="bg-primary-foreground rounded-lg p-4">
        <CardsList title="Latest Transactions"/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardsList title="Popular Products"/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <TodosList/>
      </div>
    </div>
  )
}

export default Home
