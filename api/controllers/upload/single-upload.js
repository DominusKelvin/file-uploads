module.exports = {
  friendlyName: 'Single upload',

  files: ['avatar'],

  description: '',

  inputs: {
    avatar: {
      type: 'ref',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'redirect',
      description: 'All done.'
    },
    badUploadRequest: {
      responseType: 'badRequest',
      description: 'The provided request parameters are invalid'
    }
  },

  fn: async function ({ avatar }) {
    const uploadedAvatar = await sails.uploadOne(avatar)

    if (!uploadedAvatar) {
      throw {
        badUploadRequest: {
          problems: [
            {
              avatar: 'No avatar uploaded'
            }
          ]
        }
      }
    }

    sails.log(uploadedAvatar)

    return '/single-upload'
  }
}
