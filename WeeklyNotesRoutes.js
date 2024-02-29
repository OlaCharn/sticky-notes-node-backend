const { Router } = require("express");
const { getNote, saveNote, deleteNote, editNote } = require("./WeeklyNotesController");

const router = Router();

router.get("/", getNote);
router.post("/saveNote", saveNote);
router.post("/deleteNote", deleteNote);
router.post("/editNote", editNote);

module.exports = router;