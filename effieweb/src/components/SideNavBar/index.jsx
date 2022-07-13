import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
      </div>
    </div>
  )
}

export default SideNavbar
