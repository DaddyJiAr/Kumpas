import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage/Homepage"
import Translation from "./pages/TranslationPage/Translation"
import Profile from "./pages/Profile/Profile"
import LearningDashboard from "./pages/Learning Dashboard/LearningDashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/translate" element={<Translation/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/learning-dashboard" element={<LearningDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
