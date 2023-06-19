/**
 * @swagger
 * /api/EagleSpritAcademy/gallery/create:
 *   post:
 *     summary: Create a new Gallery
 *     tags: [Gallery]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Gallery:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of School property
 *     responses:
 *       200:
 *         description: Returns the created Gallery
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
// Get all Gallery
/**
 * @swagger
 * /api/EagleSpritAcademy/gallery/getAll:
 *   get:
 *     tags:
 *       - Gallery
 *     description: Returns all Gallery
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

// delte Gallery
/**
 * @swagger
 *  /api/EagleSpritAcademy/gallery/delete/{id}:
 *   delete:
 *     tags: [Gallery]
 *     description: Deletes one Gallery
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Gallery to delete
 *     responses:
 *       201:
 *         description: Gallery has been deleted
 *       404:
 *         description: Gallery ID not found
 *       500:
 *         description: Failed To Delete Gallery
 */
