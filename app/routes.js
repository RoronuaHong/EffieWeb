const controller = require('./controller')

module.exports = app => {
  app
    .post('/api/note', controller.createNewNote)
    .get('/api/note/:type', controller.getAllNotes)
    .put('/api/note:id', controller.updateNoteById)
    .delete('/api/note/:id', controller.deleteNote)
}
