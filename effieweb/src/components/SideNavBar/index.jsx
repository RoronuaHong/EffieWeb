import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faStickyNote, faSearch, faTrash, faPlus, faStar, faInfo } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const SideNavbar = () => {
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
          <div className="create-note-btn">
            <FontAwesomeIcon className="icon" icon={faPlus} />
            <div className="title">
              New Note
            </div>
          </div>
        </div>
        <div className="sidenavbar-top-menu-item">
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faStar} />
              Sigma.
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faStickyNote} />
              All Notes
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faTrash} />
              Trash
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
