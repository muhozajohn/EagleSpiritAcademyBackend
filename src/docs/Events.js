/**
 * @swagger
 * /api/EagleSpritAcademy/events/createEvent:
 *   post:
 *     summary: Create a new Event
 *     tags: [Event]
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
 *                 description: The title of Event
 *               content:
 *                 type: string
 *                 required: true
 *                 description: The content of Event
 *               eventImage:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of Event
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
 * /api/EagleSpritAcademy/events/updateEvent/{id}:
 *   put:
 *     tags:
 *       - Event
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
 *         description: The Title of Event
 *         required: true
 *         type: string
 *       - name: content
 *         in: body
 *         description: The Content of Event
 *         required: true
 *         type: string
 *       - name: eventImage
 *         type: string
 *         format: file
 *         required: true
 *         description: The Image of Event
 *     responses:
 *       200:
 *         description: Update success
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

// Get all Event
/**
 * @swagger
 * /api/EagleSpritAcademy/events/readEvent:
 *   get:
 *     tags:
 *       - Event
 *     description: Returns all Events
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
// Get one Event
/**
 * @swagger
 * /api/EagleSpritAcademy/events/readOneEvent/{id}:
 *   get:
 *     tags: [Event]
 *     description: Display one Event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Event to be Displayed
 *     responses:
 *       201:
 *         description: User has been Displayed
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Retrieve  Event
 */

// delte user
/**
 * @swagger
 *  /api/EagleSpritAcademy/events/deleteEvent/{id}:
 *   delete:
 *     tags: [Event]
 *     description: Deletes one Event
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Event to delete
 *     responses:
 *       201:
 *         description: User has been deleted
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Delete User
 */
