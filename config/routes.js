/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'home/view-home',

  'GET /signup': 'auth/view-signup',
  'POST /signup': 'auth/signup',

  'GET /check-email': 'auth/view-check-email',
  'GET /verify-email': 'auth/verify-email',

  'GET /link-expired': 'auth/view-link-expired',
  'GET /resend-link': 'auth/resend-link',

  'GET /:operation/success': 'auth/view-success',

  'GET /login': 'auth/view-login',
  'POST /login': 'auth/login',

  'GET /forgot-password': 'auth/view-forgot-password',
  'POST /forgot-password': 'auth/forgot-password',

  'GET /reset-password': 'auth/view-reset-password',
  'POST /reset-password': 'auth/reset-password',

  'GET /dashboard': 'dashboard/view-dashboard',

  'GET /profile': 'user/view-profile',
  'PATCH /profile': 'user/update-profile',
  'DELETE /profile': 'user/delete-profile',

  'DELETE /logout': 'user/logout',

  'GET /auth/:provider/redirect': 'auth/redirect',

  'GET /auth/:provider/callback': 'auth/callback',

  /**
   * Uploads
   */

  // Single file uploads
  'GET /single-upload': 'upload/view-single-upload',
  'POST /single-upload': 'upload/single-upload',

  // Multiple file uploads
  'GET /multiple-uploads': 'upload/view-multiple-uploads',
  'POST /multiple-uploads': 'upload/multiple-uploads',

  // Upload with fields and files
  'GET /upload-with-fields': 'upload/view-upload-with-fields',
  'POST /upload-with-fields': 'upload/upload-with-fields',

  // Upload with complex fields and files
  'GET /upload-with-complex-fields': 'upload/view-upload-with-complex-fields',
  'POST /upload-with-complex-fields': 'upload/upload-with-complex-fields',

  // Testing multiple file uploads with EJS
  'GET /test': { view: 'pages/multiple-uploads' }
}
