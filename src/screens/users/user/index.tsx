import AppLineChart from "@/components/AppLineChart"
import CardsList from "@/components/CardsList"
import EditUserForm from "@/components/EditUserForm"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import paths from "@/routes/paths"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import { Link } from "react-router"

const UserPage = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link to={paths.home}>Home</Link>} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link to={paths.users.root}>Users</Link>} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="w-full space-y-6 xl:w-1/3">
          <div className="space-y-4 rounded-lg bg-primary-foreground p-4">
            <p className="text-xl font-semibold">User Badges</p>
            <div className="flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full border border-blue-500/50 bg-blue-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full border border-green-800/50 bg-green-800/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full border border-yellow-500/50 bg-yellow-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full border border-orange-500/50 bg-orange-500/30 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="mb-2 font-bold">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">User Information</p>
              <Sheet>
                <SheetTrigger render={<Button>Edit User</Button>} />
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone.
                    </SheetDescription>
                  </SheetHeader>
                  <EditUserForm />
                </SheetContent>
              </Sheet>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Profile Completion
              </p>
              <Progress value={65} />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Username:</span>
              <span>john.doe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <span>john.doe@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Phone:</span>
              <span>+1 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Location:</span>
              <span>New York, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Role:</span>
              <Badge>Admin</Badge>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Joined on 2025.01.01
            </p>
          </div>
          <div className="rounded-lg bg-primary-foreground p-4">
            <CardsList title="Latest Transaction" />
          </div>
        </div>
        <div className="w-full space-y-6 xl:w-2/3">
          <div className="space-y-2 rounded-lg bg-primary-foreground p-4">
            <div className="flex items-center gap-2">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-xl font-semibold">John Doe</p>
            </div>
            <p className="text-sm text-muted-foreground">
              An image element with a fallback for representing the user.
            </p>
          </div>
          <div className="rounded-lg bg-primary-foreground p-4">
            <p className="text-xl font-semibold">User Activity</p>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
