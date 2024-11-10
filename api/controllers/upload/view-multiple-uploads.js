module.exports = {
  friendlyName: 'View multiple uploads',

  description: 'Display "Multiple uploads" page.',

  exits: {
    success: {
      responseType: 'inertia'
    }
  },

  fn: async function () {
    return { page: 'upload/multiple-uploads' }
  }
}
