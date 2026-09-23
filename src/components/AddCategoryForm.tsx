import * as Yup from "yup"
import Form from "./Form"
import { Field, FieldError, FieldLabel } from "./ui/field"
import { Controller } from "react-hook-form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required."),
})

type TInputForm = Yup.InferType<typeof validationSchema>

const defaultValues: TInputForm = {
  category: "",
}

const AddCategoryForm = () => {
  const onSubmit = (data: TInputForm) => {
    console.log(data)
  }
  return (
    <Form<TInputForm>
      validationSchema={validationSchema}
      defaultValues={defaultValues}
    >
      {({ form }) => {
        return (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 px-2"
          >
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Category</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </form>
        )
      }}
    </Form>
  )
}

export default AddCategoryForm
