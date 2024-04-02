import { Route, Routes } from 'react-router-dom'
import { SignInPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<SignInPage />} />
    </Routes>
  )
}

export default App
