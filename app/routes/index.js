// routes/index.js

const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
    noteRoutes(app, db);
    //other routes groups could go here, in the future
};