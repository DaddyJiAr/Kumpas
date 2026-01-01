import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage/Homepage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
