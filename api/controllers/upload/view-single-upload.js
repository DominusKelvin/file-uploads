module.exports = {
  friendlyName: 'View single upload',

  description: 'Display "Single upload" page.',

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    // Respond with view.
    return {
      page: 'upload/single-upload'
    }
  }
}
