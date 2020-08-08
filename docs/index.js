
/**
 * @api {get} /owner 站主信息
 * @apiVersion 1.0.0
 * @apiGroup info
 * @apiName owner_info
 *
 * @apiSuccess {String} name Name of Owner.
 * @apiSuccess {String} country Country of Owner.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "corey",
 *       "country": "China"
 *     }
 *
 */

/**
 * @api {get} /:id 帐本信息
 * @apiVersion 1.0.0
 * @apiGroup book
 * @apiName book_base
 *
 * @apiParam {Number} id Book unique ID.
 *
 * @apiSuccess {String} name Name of the Book.
 * @apiSuccess {String} createtime  Create time of the Book.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "book1",
 *       "createtime": "2020-01-01 12:00:01"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
