module.exports = {
  friendlyName: 'Upload with fields',

  description: '',
  files: ['avatar'],
  inputs: {
    fullName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    avatar: {
      type: 'ref',
      required: true,
      description: 'The uploaded file'
    }
  },

  exits: {
    success: {
      responseType: 'redirect',
      description: 'The user has been created successfully.'
    },
    badRequest: {
      responseType: 'badRequest',
      description: 'The provided request parameters are invalid'
    }
  },

  fn: async function ({ fullName, email, avatar }) {
    sails.log({ fullName, email })
    const uploadedAvatar = await sails.uploadOne(avatar)
    const avatarUrl = `https://yourdomain.com/uploads/${uploadedAvatar.fd}`

    // const user = await User.create({
    //   fullName,
    //   email,
    //   avatarUrl
    // }).fetch()
    return '/upload-with-fields'
  }
}
