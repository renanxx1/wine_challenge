const express = require("express");
const router = express.Router();
const CepController = require("../controllers/CepController")

router.post('/', CepController.cepCreate); //Rota post para create

router.patch('/:id', CepController.cepUpdate); //Rota patch para update

router.get('/:cep', CepController.cepFindOne); //Rota get para retornar dados

router.get('/', CepController.cepFindAll); //Rota get para retornar dados

router.delete('/:id', CepController.cepDelete); //Rota delete para deletar


module.exports = router;