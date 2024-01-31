import './App.scss'
import { PostList } from './pages/main/widgets/PostList'
import { Routes, Route } from 'react-router-dom';
import AboutInfo from './pages/aboutPost/widgets/AboutInfo';


function App() {


  return (
    <Routes>
      <Route path="/" element={<PostList  />}/>
      <Route path="/about" element={<AboutInfo />} />
    </Routes>
        
  )
}

export default App
