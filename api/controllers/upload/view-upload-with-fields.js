module.exports = {
  friendlyName: 'View upload with fields',

  description: 'Display "Upload with fields" page.',
  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return { page: 'upload/upload-with-fields' }
  }
}
