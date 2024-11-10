/**
 * File Upload Settings
 * (sails.config.uploads)
 *
 * These options tell Sails where (and how) to store uploaded files.
 *
 *  > This file is mainly useful for configuring how file uploads in your
 *  > work during development; for example, when lifting on your laptop.
 *  > For recommended production settings, see `config/env/production.js`
 *
 * For all available options, see:
 * https://sailsjs.com/config/uploads
 */

module.exports.uploads = {
  /***************************************************************************
   *                                                                          *
   * Sails apps upload and download to the local disk filesystem by default,  *
   * using a built-in filesystem adapter called `skipper-disk`. This feature  *
   * is mainly intended for convenience during development since, in          *
   * production, many apps will opt to use a different approach for storing   *
   * uploaded files, such as Amazon S3, Cloudflare D3, or
   * DigitalOcean Spaces, Azure, or GridFS.                     *
   *                                                                          *
   * Most of the time, the following options should not be changed.           *
   * (Instead, you might want to have a look at `config/env/production.js`.)  *
   *                                                                          *
   ***************************************************************************/
  // dirpath: '.tmp/uploads',

  /**
   * Amazon S3
   */
  adapter: require('skipper-s3'),
  key: process.env.S3_ACCESS_KEY,
  secret: process.env.S3_SECRET_KEY,
  bucket: process.env.S3_BUCKET

  /**
   * Cloudflare R2
   */
  // adapter: require('skipper-s3'),
  // key: process.env.R2_ACCESS_KEY,
  // secret: process.env.R2_SECRET_KEY,
  // bucket: process.env.R2_BUCKET,
  // endpoint: process.env.R2_ENDPOINT
  /**
   * DigitalOcean Spaces
   */
  // https://cloud.digitalocean.com/account/api/spaces
  // adapter: require('skipper-s3'),
  // key: process.env.SPACES_ACCESS_KEY,
  // secret: process.env.SPACES_SECRET_KEY,
  // bucket: process.env.SPACES_BUCKET,
  // endpoint: process.env.SPACES_ENDPOINT
}
