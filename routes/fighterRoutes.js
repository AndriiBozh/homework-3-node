const { Router } = require("express");
const FighterService = require("../services/fighterService");
const { responseMiddleware } = require("../middlewares/response.middleware");
const {
  createFighterValid,
  updateFighterValid,
} = require("../middlewares/fighter.validation.middleware");

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/api/fighters", function (req, res, next) {
  const allFighters = FighterService.getAll();
  if (allFighters) {
    res.status(200).json(allFighters);
  } else {
    res.status(400).json({ message: "Failed to load fighters." });
  }
});

router.get("/api/fighters/:id", function (req, res, next) {
  const fighterId = req.params.id;
  const fighter = FighterService.search(fighterId);
  if (fighter) {
    res.status(200).json(fighter);
  } else {
    res.status(400).json({ message: "Failed to find a fighter." });
  }
});

router.post("/api/fighters", function (req, res, next) {
  const fighterData = req.body;
  const result = FighterService.create(fighterData);
  if (result) {
    res.status(200).json({ message: "Fighter created." });
  } else {
    res.status(400).json({ message: "Failed to create a fighter." });
  }
});

router.put("/api/fighters/:id", function (req, res, next) {
  const fighterId = req.params.id;
  const dataToUpdate = req.body;
  const result = FighterService.update(fighterId, dataToUpdate);
  if (result) {
    res.status(200).json({ message: "Data updated." });
  } else {
    res.status(400).json({ message: "Failed to update data." });
  }
});

router.delete("/api/fighters/:id", function (req, res, next) {
  const fighterId = req.params.id;
  const result = FighterService.delete(fighterId);
  if (result) {
    res.status(200).json({ message: "Fighter deleted." });
  } else {
    res.status(400).json({ message: "Failed to delete a fighter." });
  }
});

module.exports = router;
