import { Head, useForm } from '@inertiajs/react'
import InputButton from '@/components/InputButton.jsx'

export default function SimpleUpload() {
  const { data, setData, progress, ...form } = useForm({
    avatar: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    form.post('/single-upload')
  }

  return (
    <>
      <Head title="Single file | Sails & TBJS File Upload" />
      <form
        onSubmit={handleSubmit}
        className="flex h-screen flex-col items-center justify-center space-y-4"
      >
        {form.recentlySuccessful && (
          <div className="mb-4 w-full rounded border border-green-400 bg-green-100 p-2 text-center text-green-700">
            Upload successful!
          </div>
        )}
        <input
          type="file"
          onChange={(e) => setData('avatar', e.target.files[0])}
        />
        {form.errors.avatar && (
          <p className="text-red-500">{form.errors.avatar}</p>
        )}
        {data.avatar && <p>File selected: {data.avatar.name}</p>}
        {progress && progress.percentage && (
          <progress value={progress.percentage} max="100">
            {progress.percentage}%
          </progress>
        )}
        <InputButton
          processing={form.processing}
          disabled={form.processing || !data.avatar}
          label="Simple Upload"
        />
      </form>
    </>
  )
}
