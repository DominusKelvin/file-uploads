module.exports = {
  friendlyName: 'Upload with complex fields',
  description: '',

  files: ['images'],
  inputs: {
    name: {
      description: 'Name of the product',
      type: 'string',
      required: true
    },
    description: {
      description: 'Description of the product',
      type: 'string',
      required: true
    },
    categories: {
      description: 'Category of the product',
      type: 'ref',
      required: true
    },
    images: {
      description: 'Uploaded files',
      type: 'ref',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'redirect',
      description: 'All done.'
    }
  },

  fn: async function ({ name, description, categories, images }) {
    sails.log({ name, description, categories })

    const uploadedProductImages = await sails.upload(images)

    // const product = await Product.create({
    //   name,
    //   description,
    //   categories,
    //   images: uploadedProductImages.map((file) => file.fd)
    // }).fetch()

    return '/upload-with-complex-fields'
  }
}
