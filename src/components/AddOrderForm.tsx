import * as Yup from "yup"
import Form from "./Form"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Controller } from "react-hook-form"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required."),
  email: Yup.string().email("Email invalid").required("Email is required."),
  status: Yup.string().required("Status is required."),
  amount: Yup.number().positive('Amount must be positive').required("Amount is required."),
})

type TInputsForm = Yup.InferType<typeof validationSchema>

const defaultsValues: TInputsForm = {
  fullname: "",
  email: "",
  status: "",
  amount: 0,
}

const AddOrderForm = () => {
  const onSubmit = (data: TInputsForm) => {
    console.log(data)
  }
  return (
    <Form<TInputsForm>
      validationSchema={validationSchema}
      defaultValues={defaultsValues}
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
                name="status"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation="responsive"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="status">Status</FieldLabel>
                    <Select
                      id="status"
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form-rhf-select-language"
                        aria-invalid={fieldState.invalid}
                        className="min-w-30"
                      >
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="amount"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="amount">Amount</FieldLabel>
                    <Input
                      {...field}
                      id="amount"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Amount"
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

export default AddOrderForm
