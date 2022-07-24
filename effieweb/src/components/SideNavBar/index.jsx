import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faStickyNote, faSearch, faTrash, faPlus, faStar, faInfo } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { postRequest } from '@/utils/apiRequests'
import { BASE_URL, CREATE_NOTE } from '@/utils/apiEndpoints'
import { NotesContext } from '@/context/context'

const SideNavbar = () => {
  const notesContext = useContext(NotesContext)
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const handleCreateNote = async() => {
    const res = await postRequest(`${BASE_URL}${CREATE_NOTE}`)

    if(res.error) {
      setError(res.error)

      return false
    }

    if(res._id) {
      notesContext.notesDispatch({
        type: 'createNoteSuccess',
        payload: res
      })

      navigate(`/all-notes/${res._id}`, { state: { note: res }} )
    }
  }

  return (
    <div className="sidenavbar">
      <div className="sidenavbar-top">
        <div className="sidenavbar-top-profile">
          <div className="profile-icon">
            A
          </div>
          <div className="profile-title">
            SigmaHong
            <FontAwesomeIcon className="icon" icon={faAngleDown} />
          </div>
        </div>
        <div className="sidenavbar-top-search">
          <div className="search-block">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="sidenavbar-top-create-notes">
          <div className="create-note-btn" onClick={handleCreateNote}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <div className="title">
              New Note
            </div>
          </div>
        </div>
        <div className="sidenavbar-top-menu-item">
          <ul>
            <li>
              <NavLink to="/Sigma-1">
                <FontAwesomeIcon className="icon" icon={faStar} />
                Sigma.
              </NavLink>
            </li>
            <li>
              <NavLink to="/Sigma-2">
                <FontAwesomeIcon className="icon" icon={faStar} />
                Sigma.
              </NavLink>
            </li>
            <li>
              <NavLink to="all-notes">
                <FontAwesomeIcon className="icon" icon={faStickyNote} />
                All Notes
              </NavLink>
            </li>
            <li>
              <NavLink to="trash">
                <FontAwesomeIcon className="icon" icon={faTrash} />
                Trash
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidenavbar-bottom">
        <div className="sidenavbar-bottom-need-help">
          <FontAwesomeIcon className="icon" icon={faInfo} />
          Need a little help?
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
