const { fighter } = require("../models/fighter");

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during creation

  const { name, health, power, defense } = req.body;
  if (
    typeof name === "string" &&
    name.trim().length !== 0 &&
    typeof health === "number" &&
    health > 80 &&
    health < 120 &&
    typeof power === "number" &&
    power > 1 &&
    power < 100 &&
    typeof defense === "number" &&
    defense > 1 &&
    defense < 10
  ) {
    next();
  } else {
    res.status(401).send("Failed to create a fighter");
  }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during update
  const { name, health, power, defense } = req.body;
  if (
    (typeof name === "string" && name.trim().length !== 0) ||
    (typeof health === "number" && health > 80 && health < 120) ||
    (typeof power === "number" && power > 1 && power < 100) ||
    (typeof defense === "number" && defense > 1 && defense < 10)
  ) {
    next();
  } else {
    res.status(401).send("Failed to update a fighter");
  }
};

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
