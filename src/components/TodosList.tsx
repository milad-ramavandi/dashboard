import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Calendar1Icon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { ScrollArea } from "./ui/scroll-area"
import { Card, CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { todosList } from "@/constants"



const TodosList = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [isOpenPopOver, setIsOpenPopOver] = useState<boolean>(false)
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">Todos List</p>
      <Popover open={isOpenPopOver} onOpenChange={setIsOpenPopOver}>
        <PopoverTrigger
          render={
            <Button className={"w-full"}>
              <Calendar1Icon />
              <span>{date ? date.toDateString() : "Pick a date"}</span>
            </Button>
          }
        />
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setIsOpenPopOver(false)
            }}
            className="rounded-lg border"
            captionLayout="dropdown"
            required
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className={"w-full h-160 space-y-6"}>
        <div className="space-y-4">
          {todosList.map((todo) => {
            return (
              <Card key={todo.id} className="w-full">
                <CardContent className="flex gap-4">
                  <Checkbox id={String(todo.id)} checked={todo.completed} />
                  <Label htmlFor={String(todo.id)}>
                    {todo.title}
                  </Label>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodosList
