import * as Yup from "yup"
import Form from "./Form"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Controller } from "react-hook-form"
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
import { useRef } from "react"

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
  images: Yup.object({} as Record<string, Yup.StringSchema>)
    .test(
      "match-colors",
      "Images required", // Fallback text
      function (imagesValue) {
        const selectedColors: string[] = this.parent.colors || []
        if (selectedColors.length === 0) return true

        const imagesObj = imagesValue || {}
        // Find all selected colors that don't have a value in our record
        const missingColors = selectedColors.filter(
          (color) => !imagesObj[color]
        )

        if (missingColors.length > 0) {
          // Create an explicit list of missing items (e.g., "Red, Blue")
          const formattedList = missingColors
            .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
            .join(", ")

          return this.createError({
            message: `Missing images for: ${formattedList}`,
          })
        }
        return true
      }
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
  images: {},
}
const AddProductForm = () => {
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({})
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
                <Controller
                  name="images"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    const selectedColors: string[] = form.watch("colors") || []
                    const imagesRecord = field.value || {}

                    const handleFileChange = (
                      color: string,
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      const file = e.target.files?.[0]
                      if (!file) return

                      const localUrl = URL.createObjectURL(file)
                      field.onChange({
                        ...imagesRecord,
                        [color]: localUrl,
                      })
                    }

                    const removeImageForColor = (color: string) => {
                      const updatedImages = { ...imagesRecord }
                      if (updatedImages[color]?.startsWith("blob:")) {
                        URL.revokeObjectURL(updatedImages[color])
                      }
                      delete updatedImages[color]
                      field.onChange(updatedImages)

                      // Reset the DOM file input native state so users can upload the same image back-to-back if needed
                      if (fileInputRefs.current[color]) {
                        fileInputRefs.current[color]!.value = ""
                      }
                    }

                    if (selectedColors.length === 0) {
                      return (
                        <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                          Please select colors above to assign variant images.
                        </div>
                      )
                    }

                    return (
                      <Field
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel>Images</FieldLabel>

                        <div className="space-y-3">
                          {selectedColors.map((color) => {
                            const hasImage = !!imagesRecord[color]

                            return (
                              <div
                                key={color}
                                className="flex items-center justify-between rounded-lg border bg-card px-3 py-1.5"
                              >
                                
                                  <span className="text-md font-medium capitalize" aria-invalid={fieldState.invalid}>
                                    {color}
                                  </span>
                                

                                <div className="flex items-center gap-3">
                                  {hasImage ? (
                                    <div className="group relative h-12 w-12 overflow-hidden rounded border">
                                      <img
                                        src={imagesRecord[color]}
                                        alt={`${color} variant preview`}
                                        className="h-full w-full object-cover"
                                      />
                                      <button
                                        type="button"
                                        onClick={() =>
                                          removeImageForColor(color)
                                        }
                                        className="absolute inset-0 flex items-center justify-center bg-destructive/80 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                                      >
                                        ✕
                                      </button>
                                    </div>
                                  ) : (
                                    <>
                                      {/* Capture DOM references dynamically into the ref lookup map */}
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        ref={(el) => {
                                          fileInputRefs.current[color] = el
                                        }}
                                        onChange={(e) =>
                                          handleFileChange(color, e)
                                        }
                                      />
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          fileInputRefs.current[color]?.click()
                                        }
                                      >
                                        Upload Image
                                      </Button>
                                    </>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Displays the custom message detailing exactly which variants are empty */}
                        {fieldState.invalid && (
                          <FieldError>
                            {fieldState.error?.message ||
                              "Each selected variant needs an image."}
                          </FieldError>
                        )}
                      </Field>
                    )
                  }}
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
    </ScrollArea>
  )
}

export default AddProductForm
