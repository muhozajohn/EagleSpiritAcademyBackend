/**
 * @swagger
 * /api/EagleSpritAcademy/users/create:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 required: true
 *                 description: The firstName of User
 *               lastname:
 *                 type: string
 *                 required: true
 *                 description: The lastname of User
 *               username:
 *                 type: string
 *                 required: true
 *                 description: The username of User
 *               userProfile:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The profile of User
 *               email:
 *                 type: string
 *                 required: true
 *                 description: The email of User
 *               password:
 *                 type: string
 *                 required: true
 *                 description: The password of User
 *     responses:
 *       200:
 *         description: Returns the created user
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */

// Signin
/**
 * @swagger
 * /api/EagleSpritAcademy/users/login:
 *   post:
 *     summary: login for user
 *     tags: [Users]
 *     description: Log in an existing user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The email for the user
 *               email:
 *                 type: string
 *                 description: The username for the user
 *               password:
 *                 type: string
 *                 description: The password for the user
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the operation
 *                 message:
 *                   type: string
 *                   description: The message to the user
 *                 data:
 *                   type: string
 *                   description: The JWT assigned to the user
 *       400:
 *         description: Bad request
 */

// delte user
/**

// Get all users
/**
 * @swagger
 * /api/EagleSpritAcademy/users/read:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all Users
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

// Update a user

// =============================update users=========================
// Blog Update

/**
 * @swagger
 * /api/EagleSpritAcademy/users/update/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Update post by postId
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: postId
 *         in: path
 *         description: ID of the post to update
 *         required: true
 *         type: string
 *       - name: firstname
 *         in: body
 *         description: The firstname of user
 *         required: true
 *         type: string
 *       - name: lastname
 *         in: body
 *         description: The lastname of user
 *         required: true
 *         type: string
 *       - name: username
 *         in: body
 *         description: The username of user
 *         required: true
 *         type: string
 *       - name: email
 *         in: body
 *         description: The email of user
 *         required: true
 *         type: string
 *       - name: password
 *         in: body
 *         description: The password of user
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Update success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */
// delte user
/**
 * @swagger
 *  /api/EagleSpritAcademy/users/delete/{id}:
 *   delete:
 *     tags: [Users]
 *     description: Deletes a user
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       201:
 *         description: User has been deleted
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Delete User
 */
