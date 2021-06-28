const fs = require('fs');
const router = require('express').Router();
// const { createNewNote, readNotes} = require('../../lib/notes');
let entry = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db/db.json"))
  
  console.log("Notes - GET",entry)
  entry = data;
  res.json(entry);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, entry);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  console.log("Post",req.body)
  let newNote = {
       id: Math.floor(Math.random()*100),
       title: req.body.title,
       text: req.body.text

  }
  entry.push(newNote)
  fs.writeFileSync("./db/db.json",
    JSON.stringify(entry),function(err){
      if (err) throw err;
    })
  res.json(entry)
  // req.body.id = entry.length.toString();
  // // do i have to validate the note?

  // if (!validateNote(req.body)) {
  //   res.status(400).send('The note is not properly entered.');
  // } else {
  //   const note = createNewNote(req.body, entry);
  //   res.json(note);
  // }
})

router.delete("/notes/:id", (req, res) => {
  console.log("Delete",req.params.id)
  let noteObj = [];
  for (let i = 0; i<entry.length; i++) {
    if (entry[i].id!=req.params.id) {
      noteObj.push(entry[i])
    }
  }
  entry = noteObj;
  console.log(noteObj, "hello delete")
  fs.writeFileSync("./db/db.json",
    JSON.stringify(entry),function(err){
      if (err) throw err;
    })
  res.json(entry)
})
module.exports = router;
// do i need two files in apiroutes or can this all be one since only getting and posting one thing?
