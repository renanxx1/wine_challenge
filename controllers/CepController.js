const CepService = require("../services/CepService");
class CepController {

    async cepCreate(req, res) {
        res.status(200).json(await CepService.create(req.body.store_code, req.body.cep_start, req.body.cep_end));
    }

    async cepUpdate(req, res) {
        res.status(200).json(await CepService.update(req.body.store_code, req.body.cep_start, req.body.cep_end, req.params.id));
    }

    async cepDelete(req, res) {
        res.status(200).json(await CepService.delete(req.params.id));
    }

    async cepFindOne(req, res) {
        res.status(200).json(await CepService.findOneByCep(req.params.cep));
    }

    async cepFindAll(req, res) {
        res.status(200).json(await CepService.findAllCep());
    }


}

module.exports = new CepController();