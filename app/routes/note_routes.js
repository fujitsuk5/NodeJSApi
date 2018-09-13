// note_routes.js

var ObjectID = require('mongodb').ObjectID;

// note_routes.js Retrieve Note

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

// note_routes.js Delete Note

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('notes').remove(details, (err, item) => {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      res.send('Note ' + id + ' deleted!');
    } 
  });
});

// note_routes.js Update Note

app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  const note = { FirstName: req.body.Firstname, LastName: req.body.Lastname, MobileNumber: req.body.MobileNumber, EmailAddress: req.body.EmailAddress };
  db.collection('notes').update(details, note, (err, result) => {
    if (err) {
        res.send({'error':'An error has occurred'});
    } else {
        res.send(note);
    } 
  });
});

// note_routes.js Post Note

  app.post('/notes', (req, res) => {
      const note = { FirstName: req.body.Firstname, LastName: req.body.Lastname, MobileNumber: req.body.MobileNumber, EmailAddress: req.body.EmailAddress };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};