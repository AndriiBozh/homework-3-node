const { FightRepository } = require("../repositories/fightRepository");

class FightersService {
  // OPTIONAL TODO: Implement methods to work with fights

  create(data) {
    const fight = FightRepository.create(data);
    if (!fight) {
      throw Error("Failed to add a fight");
    }
    return fight;
  }

  update(id, dataToUpdate) {
    const updatedFight = FightRepository.update(id, dataToUpdate);
    return updatedFight;
  }

  delete(id) {
    return FightRepository.delete(id);
  }

  search(search) {
    const fight = FightRepository.getOne(search);
    if (!fight) {
      return null;
    }
    return fight;
  }

  getAll() {
    const allFights = FightRepository.getAll();
    return allFights;
  }
}

module.exports = new FightersService();
