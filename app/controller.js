const { createNote, fetchAllNotes, updateNote, deleteNote } = require('./model')
const { getTime } = require('./helper')

exports.createNewNote = async(req, res) => {
  // title, desc, archive, createAt, updatedAt
  try {
    let currentTime = getTime()

    let newNote = {
      title: 'Untitled',
      desc: '',
      createdAt: currentTime,
      updatedAt: currentTime
    }

    let id = await this.createNote(newNote)

    newNote['_id'] = id

    res.status(200).send(newNote)
  } catch(ex) {
    res.status(400).send(ex.message)
  }
}

exports.getAllNotes = async(req, res) => {
  try {
    let query = {
      archive: 0
    }

    if(req.params.type === 'trash') {
      query.archive = 1
    }

    let data = await fetchAllNotes(query)

    res.status(200).send(data)
  } catch(ex) {
    res.status(400).send(ex.message)
  }
}

exports.updateNoteById = async(req, res) => {
  // req.body
  try {
    let currentTime = getTime()
    let query = {
      ...req.body,
      updateAt: currentTime
    }

    await updateNote(req.params.id, query)

    req.status(200).send(query)
  } catch(ex) {
    res.status(400).send(ex.message)
  }
}

exports.deleteNote = async(req, res) => {
  try {
    await deleteNote(req.params.id)

    res.status(200).send(id)
  } catch(ex) {
    res.status(400).send(ex.message)
  }
}
