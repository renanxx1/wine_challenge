const CepRepository = require("../repositories/CepRepository")

class CepService {

    async create(store_code, cep_start, cep_end) {
        console.log(cep_start)
        var cepResult = await checkCep(cep_start, cep_end);

        if (cepResult == true) {
            return await CepRepository.create(store_code, cep_start, cep_end)
        } else {
            return cepResult;
        }
    }

    async update(store_code, cep_start, cep_end, id) {
        var cepResult = await checkCep(cep_start, cep_end);

        if (result != true) {
            return cepResult;
        } else {
            var result = await CepRepository.update(store_code, cep_start, cep_end, id);
            return "Updated successfully!"
        }
    }

    async delete(id) {
        var result = await CepRepository.deleteCepById(id);

        if (result == 0) {
            return "ID not found!"
        } else {
            return "Deleted successfully!"
        }
    }

    async findOneByCep(cep) {
        var cepResult = await CepRepository.findCepRange(cep, cep)

        if (cepResult == undefined) {
            return "Cep not found!";
        } else {
            return cepResult;
        }
    }

    async findAllCep() {
        var cepsResult = await CepRepository.findAllCep();

        if (cepsResult[0] == undefined) {
            return "No cep registered.";
        } else {
            return cepsResult;
        }
    }

}


async function checkCep(cep_start, cep_end) {

    if (cep_start > cep_end) {
        return "Initial Cep can't be higher than the End Cep!";

    } else if (cep_start.length != 8 || cep_end.length != 8) {
        return "Incorrect values. Cep needs to be 8 caracters.";

    } else {
        var cepRange = await CepRepository.findCepRange(cep_start, cep_end)
        if (cepRange) {
            return "Range cep already has a store: " + cepRange.store_code;
        } else {
            return true;
        }
    }
}

module.exports = new CepService();