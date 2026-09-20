import React from "react"
import * as Yup from "yup"
import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Form = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  children,
}: {
  defaultValues: DefaultValues<T>
  validationSchema: Yup.AnyObjectSchema
  children: ({ form }: { form: UseFormReturn<T, any, T> }) => React.ReactNode
}) => {
  const form = useForm<T>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })
  return children({ form })
}

export default Form
