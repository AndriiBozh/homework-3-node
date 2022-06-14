const { FighterRepository } = require("../repositories/fighterRepository");

class FighterService {
  // TODO: Implement methods to work with fighters

  create(data) {
    const fighter = FighterRepository.create(data);
    if (!fighter) {
      throw Error("Failed to add a fighter");
    }
    return fighter;
  }

  update(id, dataToUpdate) {
    const updatedFighter = FighterRepository.update(id, dataToUpdate);
    return updatedFighter;
  }

  delete(id) {
    return FighterRepository.delete(id);
  }

  search(search) {
    const fighter = FighterRepository.getOne(search);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  getAll() {
    const allFighters = FighterRepository.getAll();
    if (!allFighters) {
      return null;
    }
    return allFighters;
  }
}

module.exports = new FighterService();
