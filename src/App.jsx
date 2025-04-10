import './App.css'
import Dashboard from './navigation/Dashboard'
import MainStack from './navigation/MainStack'
import Nav from './navigation/Nav'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	const Main = true;

	return (
		
			<BrowserRouter>
				{
					Main ? (

						<>
						<Header/>
						<Nav/>
						<MainStack/>
						<Footer/>
						</>
					): <Dashboard/>
				}
			</BrowserRouter>
		
		
	)
}

export default App
