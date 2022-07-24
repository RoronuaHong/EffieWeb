import React, { useState, useEffect, useContext } from 'react'

import "./index.scss"

import { useLocation, useNavigate } from "react-router-dom"
import { BASE_URL, GET_ALL_NOTES, GET_TRASH_NOTES } from '@/utils/apiEndpoints'
import { getRequest } from '@/utils/apiRequests'
import { NotesContext } from '@/context/context'

const NoteList = props => {
  const { title } = props
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState(null)
  const notesContext = useContext(NotesContext)

  useEffect(() => {
    getNotes()  
  }, [location.pathname])

  const getNotes = async() => {
    let endpoint = ''

    if(location.pathname === '/all-notes') {
      endpoint = GET_ALL_NOTES
    } else if(location.pathname === '/trash') {
      endpoint = GET_TRASH_NOTES
    } else {
      return
    }

    const res = await getRequest(`${BASE_URL}${endpoint}`)

    if(res.error) {
      setError(res.error)

      return false
    }

    if(res.length > 0) {
      notesContext.notesDispatch({
        type: 'getAllNotesSuccess',
        payload: res
      })

      // TODO: 跳转会重定向
      // navigate(`${location.pathname}/${res[0]._id}`, { state: { note: res[0] }} )
    }
  }

  return (
    <div className="note-list">
      <div className="note-list-header">
        <div className="note-list-header-title">
          <h1>{ title }</h1>
        </div>
        <div className="note-list-header-sub-head">
          <div className="note-count">
            {notesContext.notesState.length} notes
          </div>
        </div>
      </div>
      <div className="note-list-body">
        {
          notesContext.notesState.length > 0 ? notesContext.notesState.map(note => (
            <div className="note-card" key={note.updatedAt}>
              <div className="note-card-head">
                <div className="note-card-title">
                  { note.title }
                </div>
                <div className="note-card-desc">
                  { note.desc }
                </div>
              </div>
              <div className="note-card-date">
                { note.updatedAt }
              </div>
            </div>
          )) 
          :
          <div className="empty-state">No Data Found</div>
        }
      </div>  
    </div>
  )
}

export default NoteList
