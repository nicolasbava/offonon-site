
export type FormProps<T> = {
    submitAction: (fields: T) => unknown
    formId: string
    initialValues?: Partial<T> | T
}