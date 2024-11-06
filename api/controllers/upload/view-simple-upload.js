module.exports = {
  friendlyName: 'View simple upload',

  description: 'Display "Simple upload" page.',

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    // Respond with view.
    return {
      page: 'upload/simple-upload'
    }
  }
}
