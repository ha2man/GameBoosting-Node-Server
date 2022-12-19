import Header from '../components/Header'
import Landing_lady from '../components/Landing-lady-thing'
import LandingContainer from '../components/LandingContainer'
import Landing_JobStyle from '../components/Landing-job-style'
import Landing_Think_About_US from '../components/Landing-think-about-us'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing_lady />
      <Landing_JobStyle />
      <LandingContainer />
      <Landing_Think_About_US />
    </div>
  )
}
