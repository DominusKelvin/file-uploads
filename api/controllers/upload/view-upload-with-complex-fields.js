module.exports = {
  friendlyName: 'View upload with complex fields',

  description: 'Display "Upload with complex fields" page.',

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    // Respond with view.
    return { page: 'upload/upload-with-complex-fields' }
  }
}
