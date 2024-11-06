import { useForm } from '@inertiajs/react'
import InputButton from '@/components/InputButton.jsx'

export default function SimpleUpload() {
  const { data, setData, progress, ...form } = useForm({
    avatar: ''
  })

  const handleFileChange = (event) => {
    setData('avatar', event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    form.post('/simple-upload')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen flex-col items-center justify-center space-y-4"
    >
      <input type="file" onChange={handleFileChange} className="mb-2" />
      {form.errors.avatar && (
        <p className="text-red-500">{form.errors.avatar}</p>
      )}
      {data.avatar && <p>File selected: {data.avatar.name}</p>}
      <InputButton
        processing={form.processing}
        disabled={form.processing || !data.avatar}
        label="Upload"
      />
    </form>
  )
}
