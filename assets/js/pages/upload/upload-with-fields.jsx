import { Head, useForm } from '@inertiajs/react'
import InputButton from '@/components/InputButton.jsx'

export default function UploadWithFields() {
  const { data, setData, progress, ...form } = useForm({
    fullName: '',
    email: '',
    avatar: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    form.post('/upload-with-fields')
  }

  return (
    <>
      <Head title="Upload with fields | Sails & TBJS File Upload" />
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
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => setData('fullName', e.target.value)}
          className="w-full rounded border border-gray-300 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          className="w-full rounded border border-gray-300 p-2"
        />
        <input
          type="file"
          name="avatar"
          onChange={(e) => setData('avatar', e.target.files[0])}
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
          label="Upload Avatar"
          className="w-full"
        />
      </form>
    </>
  )
}
