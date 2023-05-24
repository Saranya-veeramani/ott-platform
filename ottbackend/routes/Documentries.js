const router = require("express").Router();
const Documentries = require("../models/Documentries");
const verify = require("../verifyToken");
//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newDocumentries = new Documentries(req.body);
      try {
        const savedDocumentries = await newDocumentries.save();
        res.status(201).json(savedDocumentries);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  
  //UPDATE
  router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const updatedDocumentries = await Documentries.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedDocumentries);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  
  //DELETE
  router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await Documentries.findByIdAndDelete(req.params.id);
        res.status(200).json("The Documentries has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  //GET ALL SERIES
router.get("/", verify, async (req, res) => {
    const { genre } = req.query;
    const filter = genre ? { genre: genre } : {};
  
    if (req.user.isAdmin) {
      try {
        const Documentries = await Documentries.find(filter);
        res.status(200).json(Documentries.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  
  //GET SERIES BY ID
  router.get("/find/:id", verify, async (req, res) => {
    try {
      const Documentries = await Documentries.findById(req.params.id);
      res.status(200).json(Documentries);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET RANDOM SERIES
  router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let Documentries;
    try {
      if (type === "Documentries") {
        series = await Documentries.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
    }
    res.status(200).json(Documentries);
  } catch (err) {
    res.status(500).json(err);
  }});



  module.exports = router;