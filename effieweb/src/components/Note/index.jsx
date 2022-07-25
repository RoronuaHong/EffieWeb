import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

import {
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom'

import { putRequest, deleteRequest } from '@/utils/apiRequests'
import { BASE_URL, UPDATE_NOTE, DELETE_NOTE } from '@/utils/apiEndpoints'

import { NotesContext } from '@/context/context'
import { noteFormatDate } from '@/utils/helpers'

const Note = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)
  const [updatedAt, setUpdatedAt] = useState('')
  const [isArchive, setIsArchive] = useState(0)

  const notesContext = useContext(NotesContext)

  useEffect(() => {
    const { note } = location.state

    if(note) {
      setTitle(note.title)
      setDesc(note.desc)
      setUpdatedAt(note.updatedAt)
      setIsArchive(note.archive)
    }
  }, [location.state.note])

  useEffect(() => {
    if(notesContext.notesState.length > 0) {
      const [selectednote] = notesContext.notesState.filter(e => e._id === params.id)

      if(selectednote) {
        setTitle(selectednote.title)
        setDesc(selectednote.desc)
        setUpdatedAt(selectednote.updatedAt)
        setIsArchive(selectednote.archive)
      }
    }
  }, [notesContext.notesState])

  const handleNoteTitle = e => {
    setTitle(e.target.value)
  }

  const handleNoteContent = e => {
    setDesc(e.target.value)
  }

  const handleUpdateNote = async(key) => {
    let query = {}

    if(key === 'title') {
      query['title'] = title
    } else if(key === 'desc') {
      query['desc'] = desc
    }

    const res = await putRequest(`${BASE_URL}${UPDATE_NOTE}/${params.ids}`, query)

    if(res.error) {
      setError(res.error)

      return false
    }

    notesContext.notesDispatch({
      type: 'updateNoteSuccess',
      id: params.ids,
      payload: res
    })
  }

  const handleUnArchiveNote = async() => {
    let query = {
      archive: 0
    }

    const res = await putRequest(`${BASE_URL}${UPDATE_NOTE}/${params.ids}`, query)

    if(res.error) {
      setError(res.error)

      return false
    }

    notesContext.notesDispatch({
      type: 'updateNoteSuccess',
      id: params.ids,
      payload: res
    })

    resetState()

    navigate(`/trash`)
  }

  const handleArchiveNote = async() => {
    let query = {
      archive: 1
    }

    const res = await putRequest(`${BASE_URL}${UPDATE_NOTE}/${params.ids}`, query)

    if(res.error) {
      setError(res.error)

      return false
    }

    notesContext.notesDispatch({
      type: 'updateNoteSuccess',
      id: params.ids,
      payload: res
    })

    resetState()

    navigate(`/all-notes`)
  }

  const handleDeleteNote = async() => {
    const res = await deleteRequest(`${BASE_URL}${DELETE_NOTE}/${params.ids}`)

    if(res.error) {
      setError(res.error)

      return false
    }

    notesContext.notesDispatch({
      type: 'updateNoteSuccess',
      id: params.ids,
      payload: res
    })

    resetState()

    navigate(`/trash`)
  }
  
  const resetState = () => {
    setTitle('')
    setDesc('')
    setUpdatedAt('')
    setIsArchive(0)
    setError(null)
  }

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-date">
          Last edited on { noteFormatDate(updatedAt) }
        </div>
        <div className="note-header-action-btn">
          { !isArchive ? (
            <div className="action-btn" onClick={handleArchiveNote}>
              <FontAwesomeIcon className="icon" icon={faArchive} />
            </div>
          ) : (
            <>
              <div className="action-btn" onClick={handleUnArchiveNote}>
                <FontAwesomeIcon className="icon" icon={faBackward} />
              </div>
              <div className="action-btn" onClick={handleDeleteNote}>
                <FontAwesomeIcon className="icon" icon={faTrash} />
              </div>
            </>
          ) }
        </div>
      </div>
      <div className="note-body">
        <div className="note-body-header">
          <input value={title} type="text" placeholder="Title" onChange={handleNoteTitle} onBlur={() => handleUpdateNote('title')} />
        </div>
        <div className="note-body-content">
          <textarea value={desc} placeholder="Start writing..." onChange={handleNoteContent} onBlur={() => handleUpdateNote('desc')}></textarea>
        </div>
      </div>
    </div>
  )
}

export default Note
