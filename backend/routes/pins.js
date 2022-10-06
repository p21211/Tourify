const router = require("express").Router();
const Pin = require("../models/Pin");

// create a Pin

router.post("/", async (req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all pins

router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    }
    catch (err) {
        res.status(500).json(er);
    }
});

module.exports = router;

// get a pin

router.get("/:id", async (req, res) => {
    try {
        const pin = await Pin.find({ _id: req.params.id });
        res.status(200).json(pin);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// delete a pin

router.delete("/:id", async (req, res) => {
    try {
        await Pin.findByIdAndDelete(req.params.id);
        res.status(200).json("Pin has been deleted.");
    }
    catch (err) {
        res.status(500).json(err);
    }
});


// update a pin

router.put("/:id", async (req, res) => {
    try {
        const updatedPin = await Pin.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).json(updatedPin);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
