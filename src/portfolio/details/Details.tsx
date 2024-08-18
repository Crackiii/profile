import './details.css'
import Footer from '../footer/Footer'
import ProfileSummary from '../profile-summary/ProfileSummary'
import TechDetails from '../tech-details/TechDetails'
import WorkHighlights from '../work-hightlights/WorkHighlights'

function Details() {
  return (
    <div className="details">
      <ProfileSummary />
      <TechDetails />
      <WorkHighlights />
      <Footer />
    </div>
  )
}

export default Details
