import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name:Yup.string().required("Name is required")
})
const AddProductForm = () => {
  return (
    <div>AddProductForm</div>
  )
}

export default AddProductForm