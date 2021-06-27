const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const entry = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let entry = notes;
    res.json(entry);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  router.post('/animals', (req, res) => {
      req.body.id = notes.length.toString();
      // do i have to validate the note?

      if (!validateNote(req.body)) {
          res.status(400).send('The note is not properly entered.');
      } else {
          const note = createNewNote(req.body, notes);
          res.json(note);
      }
  })

  module.exports = router;
// do i need two files in apiroutes or can this all be one since only getting and posting one thing?
