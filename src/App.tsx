import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
	return (
		<main className='h-full w-full bg-navy'>
			<Header />
			<MainBanner />
			<Slider />
			<Footer />
		</main>
	);
}

export default App;

