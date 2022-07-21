import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faStickyNote, faSearch, faTrash, faPlus, faStar, faInfo } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { NavLink } from 'react-router-dom'
import { BASE_URL, CREATE_NOTES } from '@/utils/apiEndpoints'

const SideNavbar = () => {
  const handleCreateNote = async() => {
    const res = await postRequest()


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
