import './EffieWeb.scss'

import Note from './components/Note'
import NoteList from './components/NoteList'
import SideNavbar from './components/SideNavBar'

function EffieWeb() {
  return (
    <div className="EffieWeb">
      <SideNavbar />
      <NoteList />
      <Note />
    </div>
  )
}

export default EffieWeb
