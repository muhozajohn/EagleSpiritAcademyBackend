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
 *  post:
 *      summary: "Login on a Eagle Spirit Academy"
 *      tags: [Users]
 *      description: "Needed is  email and password"
 *      consumes:
 *        - multipart/form-data
 *      parameters:
 *       - in: formData
 *         name: username
 *         type: string
 *         required: true
 *       - in: formData
 *         name: email
 *         type: string
 *         required: true
 *       - in: formData
 *         name: password
 *         type: string
 *         required: true
 *
 *      responses:
 *       "201":
 *         description: "Account created"
 *       "200":
 *         description: Success
 *       "403":
 *         description: "Account creation failed"
 *
 */
