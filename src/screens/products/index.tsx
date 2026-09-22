import type { IProduct } from "@/types"
import { columns } from "./table/columns"
import { DataTable } from "./table/data-table"
import { popularProducts } from "@/constants"

const data: IProduct[] = popularProducts;

const ProductsPage = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-md bg-secondary px-8 py-2">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

export default ProductsPage
