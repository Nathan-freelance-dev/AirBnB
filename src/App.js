import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navabar from './components/Navbar/Navabar'
import Hero from './components/Hero/Hero'
import CardData from './components/Cards/CardData'

const App = () => {
	return (
		<>
			<Navabar />
			<Hero />
			<CardData />
		</>
	)
}

export default App