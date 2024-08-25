import './details.css'
import ProfileSummary from '../profile-summary/ProfileSummary'
import TechDetails from '../tech-details/TechDetails'
import WorkHighlights from '../work-hightlights/WorkHighlights'

function Details() {
  return (
    <div className="details">
      <ProfileSummary />
      <TechDetails />
      <WorkHighlights />
    </div>
  )
}

export default Details
