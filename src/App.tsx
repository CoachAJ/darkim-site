import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import InnerCircle from './pages/InnerCircle'
import About from './pages/About'
import Tour from './pages/Tour'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inner-circle" element={<InnerCircle />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
