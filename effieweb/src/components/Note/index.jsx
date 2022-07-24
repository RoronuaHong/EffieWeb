import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

import {
  useLocation
} from 'react-router-dom'

const Note = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [isArchive, setIsArchive] = useState(0)

  useEffect(() => {
    const { note } = location.state

    if(note) {
      setTitle(note.title)
      setDesc(note.desc)
      setUpdatedAt(note.updatedAt)
      setIsArchive(note.isArchive)
    }
  }, [location.state.note])

  const handleNoteTitle = () => {
    alert(updatedAt)
  }

  const handleNoteContent = () => {
    alert(updatedAt)
  }

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-date">
          Last edited on { updatedAt }
        </div>
        <div className="note-header-action-btn">
          <div className="action-btn">
            <FontAwesomeIcon className="icon" icon={faArchive} />
          </div>
        </div>
      </div>
      <div className="note-body">
        <div className="note-body-header">
          <input value={title} type="text" placeholder="Title" onChange={handleNoteTitle} />
        </div>
        <div className="note-body-content">
          <textarea value={desc} placeholder="Start writing..." onChange={handleNoteContent} ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Note
