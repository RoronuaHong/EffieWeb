import React, { useReducer } from 'react'

import './EffieWeb.scss'

import Note from './components/Note'
import NoteList from './components/NoteList'
import SideNavbar from './components/SideNavBar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NoteReducer from '@/reducer/NoteReducer'
import { NotesContext } from '@/context/context'

const initialState = []

function EffieWeb() {
  const [notes, notesDispatch] = useReducer(NoteReducer, initialState)

  return (
    <Router>
      <NotesContext.Provider value={{ notesState: notes, notesDispatch }}>
        <div className="EffieWeb">
          <SideNavbar />
          <Routes>
            <Route path="/all-notes" element={ <NoteList title="All Notes" /> } />
            <Route path="/all-notes/:ids" element={ <Note /> } />
            <Route path="/trash" element={ <NoteList title="Trash" /> } />
            <Route path="/trash/:ids" element={ <Note /> } />
          </Routes>
        </div>
      </NotesContext.Provider>
    </Router>
  )
}

export default EffieWeb
