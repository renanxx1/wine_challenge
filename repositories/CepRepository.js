const Cep = require("../models/Cep");

class CepRepository {

    async create(store_code, cep_start, cep_end) {
        return await
            Cep.create({
                store_code: store_code,
                cep_start: cep_start,
                cep_end: cep_end
            })
    }

    async update(store_code, cep_start, cep_end, id) {
        return await
            Cep.update({
                store_code: store_code,
                cep_start: cep_start,
                cep_end: cep_end
            }, {
                where: { id: id }
            })
    }

    async deleteCepById(id) {
        return await
            Cep.destroy({
                where: { id: id }
            })
    }

    async findAllCep() {
        return await
            Cep.findAll();
    }

    async findCepRange(cep_start, cep_end) {
        var ceps = await Cep.findAll();
        for (var i = 0; i < ceps.length; i++) {
            if (cep_start >= ceps[i].cep_start && cep_start <= ceps[i].cep_end || cep_start >= ceps[i].cep_start && cep_end <= ceps[i].cep_end) {
                return ceps[i];
            }
        }
    }

}
module.exports = new CepRepository();