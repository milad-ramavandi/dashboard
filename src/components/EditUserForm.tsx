import * as Yup from "yup"
import Form from "./Form"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Controller } from "react-hook-form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required."),
  email: Yup.string().email("Invalid Email").required("Email is required."),
  phone: Yup.string().required("Phone is required."),
  city: Yup.string().required("Location is required."),
  address: Yup.string().required("Location is required."),
})

type TInputsEditUserForm = Yup.InferType<typeof validationSchema>

const EditUserForm = () => {
  const onSubmit = (data: TInputsEditUserForm) => {
    console.log(data)
  }
  const defaultValues: TInputsEditUserForm = {
    fullname: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  }
  return (
    <Form<TInputsEditUserForm>
      validationSchema={validationSchema}
      defaultValues={defaultValues}
    >
      {({ form }) => {
        return (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 px-2"
          >
            <FieldGroup>
              <Controller
                name="fullname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="fullname">Fullname</FieldLabel>
                    <Input
                      {...field}
                      id="fullname"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Fullname"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Email"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      {...field}
                      id="phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Phone"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="address">Address</FieldLabel>
                    <Input
                      {...field}
                      id="address"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Address"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input
                      {...field}
                      id="city"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter City"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
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

export default EditUserForm
