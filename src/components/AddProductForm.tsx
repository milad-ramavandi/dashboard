import * as Yup from "yup"
import Form from "./Form"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field"
import { Controller, useFieldArray, useWatch } from "react-hook-form"
import { Input } from "./ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import {
  product_categories_list,
  product_colors_list,
  product_sizes_list,
} from "@/constants"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "./ui/combobox"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { useEffect, useRef } from "react"
import { ImagePlus, X } from "lucide-react"
import { cn } from "cn"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  description: Yup.string()
    .max(100, "Describtion must be at most 100 characters.")
    .required("Description is required."),
  shortDescription: Yup.string()
    .max(50, "Describtion must be at most 50 characters.")
    .required("Description is required."),
  price: Yup.number()
    .positive("Price must be a positive number.")
    .required("Price is required."),
  category: Yup.string().required("Category is required."),
  sizes: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one size is required.")
    .required("Sizes is required."),
  colors: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one color is required.")
    .required("Colors is required."),
  images: Yup.array()
    .of(
      Yup.object().shape({
        color: Yup.string().required(),
        imageUrl: Yup.string().required("Image is required."),
      })
    )
    .required("Images is required."),
})

type TInputsForm = Yup.InferType<typeof validationSchema>

const defaultValues: TInputsForm = {
  name: "",
  description: "",
  shortDescription: "",
  price: 0,
  category: "",
  sizes: [],
  colors: [],
  images: [],
}
const AddProductForm = () => {
  const onSubmit = (data: TInputsForm) => {
    console.log(data)
  }
  return (
    <ScrollArea className={"h-170 w-full"}>
      <Form<TInputsForm>
        validationSchema={validationSchema}
        defaultValues={defaultValues}
      >
        {({ form }) => {
          const fileInput = useRef<Record<number, HTMLInputElement | null>>({})
          const { fields, replace } = useFieldArray({
            control: form.control,
            name: "images",
          })
          const selectedColors = useWatch({
            control: form.control,
            name: "colors",
          })
          useEffect(() => {
            const current = form.getValues("images") || []
            const next = selectedColors.map((color) => {
              const existing = current.find((img) => img?.color === color)
              return existing ?? { color, imageUrl: "" }
            })
            replace(next)
          }, [selectedColors])
          return (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-2"
            >
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        {...field}
                        id="name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Product Name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="description">Description</FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          {...field}
                          id="description"
                          placeholder="Describe your product in 100 characters."
                          rows={4}
                          className="min-h-16 resize-none"
                          aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value.length}/100 characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="shortDescription"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="shortDescription">
                        Short Description
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          {...field}
                          id="shortDescription"
                          placeholder="Describe your product shortly in 50 characters."
                          rows={3}
                          className="min-h-8 resize-none"
                          aria-invalid={fieldState.invalid}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value.length}/50 characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="price"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="price">Price</FieldLabel>
                      <Input
                        {...field}
                        id="price"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter Product Price"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="category"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      orientation="responsive"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor="category">Category</FieldLabel>
                      <Select
                        id="category"
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-language"
                          aria-invalid={fieldState.invalid}
                          className="min-w-30"
                        >
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {product_categories_list.map((category, index) => {
                            return (
                              <SelectItem key={index} value={category}>
                                {category}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="sizes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      orientation="responsive"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor="sizes">Sizes</FieldLabel>
                      <Combobox
                        id="sizes"
                        items={product_sizes_list}
                        multiple
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <ComboboxChips>
                          <ComboboxValue>
                            {field.value.map((item) => (
                              <ComboboxChip key={item}>
                                {item?.toUpperCase()}
                              </ComboboxChip>
                            ))}
                          </ComboboxValue>
                          <ComboboxChipsInput
                            placeholder="Add Size"
                            aria-invalid={fieldState.invalid}
                          />
                        </ComboboxChips>
                        <ComboboxContent>
                          <ComboboxList>
                            {(item) => (
                              <ComboboxItem key={item} value={item}>
                                {item?.toUpperCase()}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      {fieldState.invalid && (
                        <FieldError>{fieldState.error?.message}</FieldError>
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="colors"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      orientation="responsive"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor="colors">Colors</FieldLabel>
                      <Combobox
                        id="colors"
                        items={product_colors_list}
                        multiple
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <ComboboxChips>
                          <ComboboxValue>
                            {field.value.map((item) => (
                              <ComboboxChip key={item}>
                                {typeof item === "string"
                                  ? item[0].toUpperCase() + item.slice(1)
                                  : item}
                              </ComboboxChip>
                            ))}
                          </ComboboxValue>
                          <ComboboxChipsInput
                            placeholder="Add Color"
                            aria-invalid={fieldState.invalid}
                          />
                        </ComboboxChips>
                        <ComboboxContent>
                          <ComboboxList>
                            {(item) => (
                              <ComboboxItem key={item} value={item}>
                                {item[0].toUpperCase() + item.slice(1)}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <FieldSet>
                  <FieldLegend>Images</FieldLegend>
                  <FieldGroup>
                    {selectedColors.length < 1 && (
                      <div className="text-sm text-muted-foreground">
                        Please select colors above to assign variant images.
                      </div>
                    )}
                    {fields.map((img, index) => {
                      return (
                        <Controller
                          key={img.id}
                          name={`images.${index}.imageUrl`}
                          control={form.control}
                          render={({ field, fieldState }) => {
                            return (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className="capitalize">
                                  {img.color}
                                </FieldLabel>
                                <input
                                  ref={(el) => {
                                    fileInput.current[index] = el
                                  }}
                                  type="file"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      field.onChange(URL.createObjectURL(file))
                                    }
                                  }}
                                />
                                <div
                                  onClick={() => {
                                    fileInput.current[index]?.click()
                                  }}
                                  className={cn(
                                    "relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-dashed transition-colors hover:bg-muted/50",
                                    fieldState.invalid
                                      ? "border-destructive"
                                      : "border-input"
                                  )}
                                >
                                  {field.value ? (
                                    <>
                                      <img
                                        src={field.value}
                                        alt={img.color}
                                        className="h-full w-full object-cover"
                                      />
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          field.onChange("")
                                          if (fileInput.current[index]) {
                                            fileInput.current[index].value = ""
                                          }
                                        }}
                                        className="absolute top-1 right-1 rounded-full bg-black/60 p-0.5 text-white hover:bg-black/80"
                                      >
                                        <X className="h-3 w-3" />
                                      </button>
                                    </>
                                  ) : (
                                    <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                      <ImagePlus className="h-6 w-6" />
                                      <p className="text-sm font-semibold">
                                        Uplaod Image
                                      </p>
                                    </div>
                                  )}
                                </div>

                                {fieldState.invalid && (
                                  <FieldError errors={[fieldState.error]} />
                                )}
                              </Field>
                            )
                          }}
                        />
                      )
                    })}
                  </FieldGroup>
                  {form.formState.errors.images?.root && (
                    <FieldError errors={[form.formState.errors.images.root]} />
                  )}
                </FieldSet>
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
    </ScrollArea>
  )
}

export default AddProductForm
