/**
 * @swagger
 * /api/EagleSpritAcademy/blog/createBlog:
 *   post:
 *     summary: Create a new Blog
 *     tags: [Blog]
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
 *                 description: The title of Blog
 *               content:
 *                 type: string
 *                 required: true
 *                 description: The content of blog
 *               blogImage:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of Blog
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
 * /api/EagleSpritAcademy/blog/updateBlog/{id}:
 *   put:
 *     tags:
 *       - Blog
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
 *         description: The Title of Blog
 *         required: true
 *         type: string
 *       - name: content
 *         in: body
 *         description: The Content of Blog
 *         required: true
 *         type: string
 *       - name: blogImage
 *         type: string
 *         format: file
 *         required: true
 *         description: The Image of Blog
 *     responses:
 *       200:
 *         description: Update success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

// Get all Blog
/**
 * @swagger
 * /api/EagleSpritAcademy/blog/readBlog:
 *   get:
 *     tags:
 *       - Blog
 *     description: Returns all Blogs
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
// Get one Blog
/**
 * @swagger
 * /api/EagleSpritAcademy/blog/readOneBlog/{id}:
 *   get:
 *     tags: [Blog]
 *     description: Display one Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Blog to be Displayed
 *     responses:
 *       201:
 *         description: User has been Displayed
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Retrieve  Blog
 */

// delte user
/**
 * @swagger
 *  /api/EagleSpritAcademy/blog/deleteBlog/{id}:
 *   delete:
 *     tags: [Blog]
 *     description: Deletes one Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Blog to delete
 *     responses:
 *       201:
 *         description: User has been deleted
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Delete User
 */