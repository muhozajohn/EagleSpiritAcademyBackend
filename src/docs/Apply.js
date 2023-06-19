/**
 * @swagger
 * /api/EagleSpritAcademy/application/apply:
 *   post:
 *     summary: Create a new Application
 *     tags: [Application]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pname:
 *                 type: string
 *                 required: true
 *                 description: The parent name of Applicant
 *               pnumber:
 *                 type: string
 *                 required: true
 *                 description: The parent number of applicant
 *               pmail:
 *                 type: string
 *                 required: true
 *                 description: The parent email of applicant
 *               pnationality:
 *                 type: string
 *                 required: true
 *                 description: The parent Nationality of applicant
 *               pcity:
 *                 type: string
 *                 required: true
 *                 description: The parent City of applicant
 *               pstate:
 *                 type: string
 *                 required: true
 *                 description: The parent State of applicant
 *               stName:
 *                 type: string
 *                 required: true
 *                 description: The Student firstname of applicant
 *               stMiddleName:
 *                 type: string
 *                 required: true
 *                 description: The Student middlename of applicant
 *               stLname:
 *                 type: string
 *                 required: true
 *                 description: The Student lastname of applicant
 *               stGender:
 *                 type: string
 *                 required: true
 *                 description: The Student Gender of applicant
 *               stBirth:
 *                 type: string
 *                 required: true
 *                 description: The Student Birthday of applicant
 *               stMail:
 *                 type: string
 *                 required: true
 *                 description: The Student Mail of applicant
 *               stNationality:
 *                 type: string
 *                 required: true
 *                 description: The Student nationality of applicant
 *               stCity:
 *                 type: string
 *                 required: true
 *                 description: The Student City of applicant
 *               stState:
 *                 type: string
 *                 required: true
 *                 description: The Student State of applicant
 *               stProfile:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of Applicant
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
 * /api/EagleSpritAcademy/application/update/{id}:
 *   post:
 *     summary: Update a new Application
 *     tags: [Application]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pname:
 *                 type: string
 *                 required: true
 *                 description: The parent name of Applicant
 *               pnumber:
 *                 type: string
 *                 required: true
 *                 description: The parent number of applicant
 *               pmail:
 *                 type: string
 *                 required: true
 *                 description: The parent email of applicant
 *               pnationality:
 *                 type: string
 *                 required: true
 *                 description: The parent Nationality of applicant
 *               pcity:
 *                 type: string
 *                 required: true
 *                 description: The parent City of applicant
 *               pstate:
 *                 type: string
 *                 required: true
 *                 description: The parent State of applicant
 *               stName:
 *                 type: string
 *                 required: true
 *                 description: The Student firstname of applicant
 *               stMiddleName:
 *                 type: string
 *                 required: true
 *                 description: The Student middlename of applicant
 *               stLname:
 *                 type: string
 *                 required: true
 *                 description: The Student lastname of applicant
 *               stGender:
 *                 type: string
 *                 required: true
 *                 description: The Student Gender of applicant
 *               stBirth:
 *                 type: string
 *                 required: true
 *                 description: The Student Birthday of applicant
 *               stMail:
 *                 type: string
 *                 required: true
 *                 description: The Student Mail of applicant
 *               stNationality:
 *                 type: string
 *                 required: true
 *                 description: The Student nationality of applicant
 *               stCity:
 *                 type: string
 *                 required: true
 *                 description: The Student City of applicant
 *               stState:
 *                 type: string
 *                 required: true
 *                 description: The Student State of applicant
 *               stProfile:
 *                 type: string
 *                 format: binary
 *                 required: true
 *                 description: The Image of Applicant
 *     responses:
 *       200:
 *         description: Returns the created user
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */


// Get all Application
/**
 * @swagger
 * /api/EagleSpritAcademy/application/getAll:
 *   get:
 *     tags:
 *       - Application
 *     description: Returns all Applications
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
// Get one Application
/**
 * @swagger
 * /api/EagleSpritAcademy/application/getOne/{id}:
 *   get:
 *     tags: [Application]
 *     description: Display one Application
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Application to be Displayed
 *     responses:
 *       201:
 *         description: User has been Displayed
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Retrieve  Application
 */

// delte user
/**
 * @swagger
 *  /api/EagleSpritAcademy/application/delete/{id}:
 *   delete:
 *     tags: [Application]
 *     description: Deletes one Application
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Application to delete
 *     responses:
 *       201:
 *         description: User has been deleted
 *       404:
 *         description: User ID not found
 *       500:
 *         description: Failed To Delete User
 */
