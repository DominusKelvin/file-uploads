import { useForm } from '@inertiajs/react'

export default function useFormWithUploads(initialData) {
  const form = useForm(initialData)

  const transformDataToFormData = (data) => {
    const formData = new FormData()
    const fileFields = []

    // Append all fields, collecting file fields to append last
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        if (data[key].length > 0 && data[key][0] instanceof File) {
          fileFields.push(key)
        } else {
          formData.append(key, JSON.stringify(data[key]))
        }
      } else if (data[key] instanceof File) {
        fileFields.push(key)
      } else {
        formData.append(key, data[key])
      }
    })

    // Append file fields last
    fileFields.forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((file) => {
          formData.append(key, file)
        })
      } else {
        formData.append(key, data[key])
      }
    })

    return formData
  }

  const submitWithUploads = (method, url, options) => {
    form.transform(transformDataToFormData)
    form.submit(method, url, options)
  }

  const post = (url, options) => submitWithUploads('post', url, options)
  const get = (url, options) => submitWithUploads('get', url, options)
  const put = (url, options) => submitWithUploads('put', url, options)
  const patch = (url, options) => submitWithUploads('patch', url, options)
  const del = (url, options) => submitWithUploads('delete', url, options)

  return {
    ...form,
    submitWithUploads,
    submit: submitWithUploads,
    post,
    get,
    put,
    patch,
    delete: del
  }
}
