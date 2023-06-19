/**
 * @swagger
 * /api/EagleSpritAcademy/News/createNews:
 *   post:
 *     summary: Create a new News
 *     tags: [News]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *                 description: The title of News
 *               content:
 *                 type: string
 *                 required: true
 *                 description: The content of News
 *               newsImage:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of News
 *     responses:
 *       200:
 *         description: Returns the created user
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/EagleSpritAcademy/News/updateNews/{id}:
 *   put:
 *     tags:
 *       - News
 *     description: Update post by postId
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: postId
 *         in: path
 *         description: ID of the post to update
 *         required: true
 *         type: string
 *       - name: title
 *         in: body
 *         description: The Title of News
 *         required: true
 *         type: string
 *       - name: content
 *         in: body
 *         description: The Content of News
 *         required: true
 *         type: string
 *       - name: newsImage
 *         type: string
 *         format: file
 *         required: true
 *         description: The Image of News
 *     responses:
 *       200:
 *         description: Update success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

// Get all News
/**
 * @swagger
 * /api/EagleSpritAcademy/News/readNews:
 *   get:
 *     tags:
 *       - News
 *     description: Returns all News
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */
// Get one News
/**
 * @swagger
 * /api/EagleSpritAcademy/News/readOneNews/{id}:
 *   get:
 *     tags: [News]
 *     description: Display one News
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the News to be Displayed
 *     responses:
 *       201:
 *         description: User has been Displayed
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Retrieve  News
 */

// delte user
/**
 * @swagger
 *  /api/EagleSpritAcademy/news/deleteNews/{id}:
 *   delete:
 *     tags: [News]
 *     description: Deletes one News
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the News to delete
 *     responses:
 *       201:
 *         description: User has been deleted
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Delete User
 */
