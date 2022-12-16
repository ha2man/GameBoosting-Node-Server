import Header from "../components/Header";
import Landing_lady from "../components/Landing-lady-thing";
import LandingContainer from "../components/LandingContainer";

export default function Home() {
  return (
    <div className="flex flex-col">
     <Header/>
     <Landing_lady/>


     <LandingContainer/>
    </div>
  )
}
