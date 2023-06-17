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