import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage/Homepage"
import Translation from "./pages/TranslationPage/Translation"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/translate" element={<Translation/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
