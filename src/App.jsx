import { useState, useEffect } from "react"
import Body from "../components/body/Body"
import Header from "../components/header/Header"
import './App.css'
import ThemeContext from "../context/ThemeContext"

function App() {

  const links = [
    {
      navlink: 'Home',
      path: '/',
      refere:'home'
    },
    {
      navlink: 'About',
      path: '/about',
      refere:'about'
    },
    {
      navlink: 'Blog',
      path: '/blog',
      refere:'blog'
    },
    {
      navlink: 'Projects',
      path: '/projects',
      refere:'projects'
    },
  ]

  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue = {
    theme,
    updateTheme: setTheme,
    links
  };


  return (
    <ThemeContext.Provider value={contextValue}>
    <div className="main" data-theme={theme}>
      <Header data={{setTheme, theme, links}} />
      <Body data={links} />
    </div>
    </ThemeContext.Provider>
  )
}

export default App