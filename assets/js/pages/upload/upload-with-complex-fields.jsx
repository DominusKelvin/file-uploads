import { Head } from '@inertiajs/react'
import InputButton from '@/components/InputButton.jsx'
import useFormWithUploads from '@/hooks/useFormWithUploads'

export default function UploadWithComplexFields() {
  const { data, setData, progress, ...form } = useFormWithUploads({
    name: '',
    description: '',
    categories: [],
    images: []
  })

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setData(
      'categories',
      checked
        ? [...data.categories, value]
        : data.categories.filter((category) => category !== value)
    )
  }

  const handleFileChange = (e) => {
    setData('images', Array.from(e.target.files))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.post('/upload-with-complex-fields')
  }

  return (
    <>
      <Head title="Upload Product Details | Sails & TBJS File Upload" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-screen w-3/12 flex-col items-center justify-center space-y-4 rounded-lg p-4"
      >
        {form.recentlySuccessful && (
          <div className="mb-4 w-full rounded border border-green-400 bg-green-100 p-2 text-center text-green-700">
            Upload successful!
          </div>
        )}

        <input
          type="text"
          placeholder="Product Name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="w-full rounded border border-gray-300 p-2"
        />
        <textarea
          placeholder="Product Description"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          className="w-full rounded border border-gray-300 p-2"
        />
        <div className="w-full">
          <label className="mb-2 block">Categories:</label>
          <label className="block">
            <input
              type="checkbox"
              value="Electronics"
              checked={data.categories.includes('Electronics')}
              onChange={handleCheckboxChange}
            />
            Electronics
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="Books"
              checked={data.categories.includes('Books')}
              onChange={handleCheckboxChange}
            />
            Books
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="Clothing"
              checked={data.categories.includes('Clothing')}
              onChange={handleCheckboxChange}
            />
            Clothing
          </label>
        </div>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full rounded border border-gray-300 p-2"
        />
        {progress && progress.percentage && (
          <progress value={progress.percentage} max="100" className="w-full">
            {progress.percentage}%
          </progress>
        )}
        <InputButton
          processing={form.processing}
          disabled={form.processing}
          label="Upload Product"
          className="w-full"
        />
      </form>
    </>
  )
}
