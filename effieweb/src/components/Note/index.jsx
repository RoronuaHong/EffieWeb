import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const Note = () => {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-date">
          Last edited on Sep 11, 2022
        </div>
        <div className="note-header-action-btn">
          <div className="action-btn">
            <FontAwesomeIcon className="icon" icon={faArchive} />
          </div>
        </div>
      </div>
      <div className="note-body">
        <div className="note-body-header">
          <input type="text" placeholder="Title" />
        </div>
        <div className="note-body-content">
          <textarea placeholder="Start writing..."></textarea>
        </div>
      </div>
    </div>
  )
}

export default Note
