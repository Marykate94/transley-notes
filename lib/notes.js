const fs = require("fs");
const path = require("path");

// creating a new note function to be added after get request
function createNewNote(body, allNotes) {
    const note = body;
    allNotes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ allNotes }, null, 2)
    );
    return note;
  }

 

// calling function create new note
  module.exports = {
    createNewNote
  };