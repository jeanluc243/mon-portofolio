import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CV from "./pages/CV"
import Stack from "./pages/Stack"
import VSCode from "./pages/VSCode"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/vscode" element={<VSCode />} />
      </Routes>
    </Router>
  )
}

export default App
