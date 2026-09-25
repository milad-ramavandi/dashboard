export interface IProductImage {
  color:string;
  imageUrl:string;
}

export interface IProduct {
  id: string | number
  name: string
  shortDescription: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  images: IProductImage[]
}

export interface IPayment {
  id: string
  amount: number
  fullname: string
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export interface ITransaction {
  id: number
  title: string
  badge: string
  image: string
  count: number
}

export interface IUser {
  id: string;
  avatar: string;
  fullname: string;
  status: "active" | "inactive";
  email: string;
}
