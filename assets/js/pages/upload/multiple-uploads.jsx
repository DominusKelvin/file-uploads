import { Head } from '@inertiajs/react'
import InputButton from '@/components/InputButton.jsx'
import useFormWithUploads from '@/hooks/useFormWithUploads'

export default function MultipleUploads() {
  const { data, setData, progress, ...form } = useFormWithUploads({
    productImages: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    form.post('/multiple-uploads')
  }

  return (
    <>
      <Head title="Multiple files | Sails & TBJS File Upload" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-screen w-3/12 flex-col items-center justify-center space-y-4"
      >
        {form.recentlySuccessful && (
          <div className="mb-4 w-full rounded border border-green-400 bg-green-100 p-2 text-center text-green-700">
            Upload successful!
          </div>
        )}
        <input
          type="file"
          name="productImages"
          multiple
          onChange={(e) => setData('productImages', [...e.target.files])}
        />
        {form.errors.productImages && (
          <p className="text-red-500">{form.errors.productImages}</p>
        )}
        {data.productImages.length > 0 && (
          <ul>
            {data.productImages.map((file, index) => (
              <li key={index}>File selected: {file.name}</li>
            ))}
          </ul>
        )}
        {progress && progress.percentage && (
          <progress value={progress.percentage} max="100">
            {progress.percentage}%
          </progress>
        )}
        <InputButton
          processing={form.processing}
          disabled={form.processing || data.productImages.length === 0}
          label="Upload Product Images"
        />
      </form>
    </>
  )
}
