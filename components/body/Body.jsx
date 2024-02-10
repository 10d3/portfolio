import About from '../../pages/about/About'
import Home from '../../pages/home/Home'
import Projects from '../../pages/project/Projects'
import Blog from '../../pages/blog/Blog'
import './body.css'
import { Routes, Route } from 'react-router-dom'


function Body() {

  return (
    <div className='main-body'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default Body