const router = require("express").Router();
const TvSeries = require("../models/TvSeries");
const verify = require("../verifyToken");
//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      const newSeries = new TvSeries(req.body);
      try {
        const savedSeries = await newSeries.save();
        res.status(201).json(savedSeries);
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
        const updatedSeries = await TvSeries.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedSeries);
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
        await TvSeries.findByIdAndDelete(req.params.id);
        res.status(200).json("The series has been deleted...");
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
        const series = await TvSeries.find(filter);
        res.status(200).json(series.reverse());
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
      const series = await TvSeries.findById(req.params.id);
      res.status(200).json(series);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET RANDOM SERIES
  router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let series;
    try {
      if (type === "series") {
        series = await TvSeries.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
    }
    res.status(200).json(TvSeries);
  } catch (err) {
    res.status(500).json(err);
  }});



  module.exports = router;