
import './App.css'
import Layout from './pages/Layout'
import { AuthProvider } from './context/AuthContent'

function App() {

  return (
    <>
    <AuthProvider>
     <Layout/>
    </AuthProvider>
    </>
  )
}

export default App
