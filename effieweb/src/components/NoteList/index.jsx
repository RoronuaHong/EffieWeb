import React from 'react'

import "./index.scss"

const NoteList = props => {
  const { 
    title 
  } = props

  return (
    <div className="note-list">
      <div className="note-list-header">
        <div className="note-list-header-title">
          <h1>{ title }</h1>
        </div>
        <div className="note-list-header-sub-head">
          <div className="note-count">
            2 notes
          </div>
        </div>
      </div>
      <div className="note-list-body">
        <div className="note-card">
          <div className="note-card-head">
            <div className="note-card-title">
              Note One
            </div>
            <div className="note-card-desc">
              Some Descrpition
            </div>
          </div>
          <div className="note-card-date">
            12 July 2022
          </div>
        </div>
        <div className="note-card">
          <div className="note-card-head">
            <div className="note-card-title">
              Note One
            </div>
            <div className="note-card-desc">
              Some Descrpition
            </div>
          </div>
          <div className="note-card-date">
            12 July 2022
          </div>
        </div>
      </div>  
    </div>
  )
}

export default NoteList
