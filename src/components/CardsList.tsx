import { latestTransactions, popularProducts } from "@/constants"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

const CardsList = ({ title }: { title: string }) => {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">{title}</p>
      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => {
              return (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                        <img
                          src={Object.values(item.images)[0]}
                          alt={item.name}
                          className="absolute top-0 left-0 h-full w-full object-cover"
                        />
                      </div>

                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                    <p>${item.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              )
            })
          : latestTransactions.map((item) => {
              return (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute top-0 left-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium">{item.title}</p>
                        <Badge variant={"secondary"}>{item.badge}</Badge>
                      </div>
                    </div>
                    <p>${item.count / 1000}K</p>
                  </CardContent>
                </Card>
              )
            })}
      </div>
    </div>
  )
}

export default CardsList
