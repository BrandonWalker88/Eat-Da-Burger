const express = require("express");
const burgers = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burgers.selectAll((data) => {
    const burObject = {
      burger: data,
    };
    res.render("index", burObject);
  });
});

router.post("/", (req, res) => {
  burger.insertOne(["burger_name"], [req.body.burger_name], (data) => {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (data) => {
      res.redirect("/");
    }
  );
});

module.exports = router;
