import type { IUser } from "@/types"
import { columns } from "./table/columns"
import { DataTable } from "./table/data-table"



const data: IUser[] = [
    {
      id: "728ed521",
      avatar: "./src/assets/users/1.png",
      status: "active",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",
      avatar: "./src/assets/users/2.png",
      status: "active",
      fullname: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      avatar: "./src/assets/users/3.png",
      status: "inactive",
      fullname: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      avatar: "./src/assets/users/4.png",
      status: "inactive",
      fullname: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      avatar: "./src/assets/users/5.png",
      status: "active",
      fullname: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      avatar: "./src/assets/users/6.png",
      status: "active",
      fullname: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      avatar: "./src/assets/users/7.png",
      status: "active",
      fullname: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      avatar: "./src/assets/users/8.png",
      status: "active",
      fullname: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      avatar: "./src/assets/users/9.png",
      status: "inactive",
      fullname: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      avatar: "./src/assets/users/10.png",
      status: "active",
      fullname: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      avatar: "./src/assets/users/11.png",
      status: "active",
      fullname: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      avatar: "./src/assets/users/12.png",
      status: "active",
      fullname: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      avatar: "./src/assets/users/13.png",
      status: "inactive",
      fullname: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      avatar: "./src/assets/users/14.png",
      status: "active",
      fullname: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      avatar: "./src/assets/users/15.png",
      status: "active",
      fullname: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      avatar: "./src/assets/users/16.png",
      status: "inactive",
      fullname: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      avatar: "./src/assets/users/17.png",
      status: "active",
      fullname: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      avatar: "./src/assets/users/18.png",
      status: "active",
      fullname: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      avatar: "./src/assets/users/19.png",
      status: "inactive",
      fullname: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      avatar: "./src/assets/users/20.png",
      status: "active",
      fullname: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      avatar: "./src/assets/users/21.png",
      status: "active",
      fullname: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      avatar: "./src/assets/users/22.png",
      status: "active",
      fullname: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      avatar: "./src/assets/users/23.png",
      status: "inactive",
      fullname: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      avatar: "./src/assets/users/24.png",
      status: "active",
      fullname: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      avatar: "./src/assets/users/25.png",
      status: "active",
      fullname: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      avatar: "./src/assets/users/26.png",
      status: "active",
      fullname: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      avatar: "./src/assets/users/27.png",
      status: "active",
      fullname: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      avatar: "./src/assets/users/28.png",
      status: "inactive",
      fullname: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      avatar: "./src/assets/users/29.png",
      status: "active",
      fullname: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      avatar: "./src/assets/users/30.png",
      status: "active",
      fullname: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      avatar: "./src/assets/users/31.png",
      status: "active",
      fullname: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      avatar: "./src/assets/users/32.png",
      status: "active",
      fullname: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      avatar: "./src/assets/users/33.png",
      status: "inactive",
      fullname: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      avatar: "./src/assets/users/34.png",
      status: "active",
      fullname: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      avatar: "./src/assets/users/35.png",
      status: "active",
      fullname: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      avatar: "./src/assets/users/36.png",
      status: "active",
      fullname: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];

const UsersPage = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-md bg-secondary px-8 py-2">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

export default UsersPage
