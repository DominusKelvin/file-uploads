module.exports = {
  friendlyName: 'Multiple uploads',
  description: 'Upload multiple files.',

  files: ['productImages'],

  inputs: {
    productImages: {
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

  fn: async function ({ productImages }) {
    const uploadedProductImages = await sails.upload(productImages)

    sails.log(uploadedProductImages)

    return '/multiple-uploads'
  }
}
