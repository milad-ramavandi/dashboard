import { useTheme } from "@/components/providers/theme-provider"
import { Button } from "@/components/ui/button"


export function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="">
      <Button
            className="mt-2 cursor-pointer"
            onClick={() => {
              if (theme === "dark") {
                setTheme("light")
              } else {
                setTheme("dark")
              }
            }}
          >
            Button
      </Button>
    </div>
  )
}

export default Home
