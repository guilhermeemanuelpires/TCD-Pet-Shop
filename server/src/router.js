const express = require('express');
const router = express.Router();

/*   Importa controllers */
const AuthController = require('./controllers/AuthConroller');
const PetController = require('./controllers/PetController');
const EnderecoController = require('./controllers/EnderecoController');
const ServicoController = require('./controllers/ServicoController');

/* Auth e documentaçõa Swagger*/

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Usuário
 *     description: Usuário
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: Cadastra 
 *       description: Puppy object 
 *       required: true
 *       in: body
 *       schema:
 *          $ref: '#/definitions/Register'
 *     responses:
 *       200:
 *         description: Cadastro Realizado com sucesso!
 *         schema:
 *            $ref: '#/definitions/Register'
 *       500:
 *         description: Server error!
 */
router.post('/auth/register', AuthController.register);

router.put('/auth/register', AuthController.update);

/**
 * @swagger
 * /auth:
 *   post:
 *     tags:
 *       - Usuário
 *     description: Usuário
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: Cadastra 
 *       description: Puppy object 
 *       required: true
 *       in: body
 *       schema:
 *          $ref: '#/definitions/Auth'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso! 
 *       404:
 *         description: Senha inválida!! 
 *       500:
 *         description: Server error!
 */
router.post('/auth', AuthController.login);

/**
 * @swagger
 * /pet/add:
 *   post:
 *     tags:
 *       - Pet
 *     description: Pet
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: Cadastra 
 *       description: Puppy object 
 *       required: true
 *       in: body
 *       schema:
 *          $ref: '#/definitions/Pet'
 *     responses:
 *       200:
 *         description: Pet Incluido com sucesso!
 *       500:
 *         description: Não foi possivel incluir um novo Pet!
 */
router.post('/pet/add', PetController.add);

/**
 * @swagger
 * /pet/findall:
 *   get:
 *     tags:
 *       - Pet
 *     description: Pet
 *     produces:
 *       - application/json 
 *     responses:
 *       200:
 *         description: Pet Incluido com sucesso!
 *         schema:
 *            $ref: '#/definitions/Register' 
 *       500:
 *         description: Erro ao cosultar pets!
 */
router.get('/pet/findall', PetController.findAll);

/**
 * @swagger
 * /pet/delete/{id}:
 *   delete:
 *     tags:
 *       - Pet
 *     description: Pet
 *     produces:
 *       - application/json 
 *     parameters:
 *       - name: id
 *         description: id pet
 *         in: path
 *         required : true
 *         type: integer 
 *     responses:
 *       200:
 *         description: Pet excluido com sucesso!
 *       404:
 *         description: Nenhum Pet Encontrado!
 *       500:
 *         description: Erro ao excluir pet!
 */
router.delete('/pet/delete/:id([0-9]+)', PetController.delete);

/**
 * @swagger
 * /pet/update:
 *   put:
 *     tags:
 *       - Pet
 *     description: Usuário
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: Cadastra 
 *       description: Puppy object 
 *       required: true
 *       in: body
 *       schema:
 *          $ref: '#/definitions/PetUpDate'
 *     responses:
 *       200:
 *         description: Cadastro Realizado com sucesso!
 *         schema:
 *            $ref: '#/definitions/PetUpDate'
 *       500:
 *         description: Server error!
 */
router.put('/pet/update', PetController.update);

router.get('/pet/:id([0-9]+)', PetController.findByID);
router.get('/pet/count/:id([0-9]+)', PetController.findByIDCount);


/* Rota de Endereco  */
router.post('/endereco/add', EnderecoController.add);
router.delete('/endereco/delete/:id([0-9]+)', EnderecoController.delete);
router.put('/endereco/update', EnderecoController.update);
router.get('/endereco/:id([0-9]+)', EnderecoController.findByID);
router.get('/endereco/count/:id([0-9]+)', EnderecoController.findByIDCount);

/* Rota Servicos*/
router.post('/servico/add', ServicoController.add);
router.delete('/servico/delete/:id([0-9]+)', ServicoController.delete);
router.get('/servico/:id([0-9]+)', ServicoController.findByID);
router.get('/servico/count', ServicoController.findAllCount);
router.get('/servico/count/:id([0-9]+)', ServicoController.findByIDCount);
router.get('/servico', ServicoController.findAll);
router.put('/servico/update', ServicoController.update);


module.exports = (app) => app.use(router);