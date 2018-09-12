// routes/note_routes.js

module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // you'll create your notes here.
        console.log(req.body)
        res.send('hello')
        }
    )
};