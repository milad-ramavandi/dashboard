export interface IPayment {
    id:string;
    amount: number;
    username:string;
    status: "pending" | "processing" | "success" | "failed";
    email:string
}