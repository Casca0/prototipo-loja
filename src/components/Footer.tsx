import InstagramLogo from '../assets/InstagramLogo';
import FacebookLogo from '../assets/FacebookLogo';
import WhatsAppLogo from '../assets/WhatsAppLogo';

export default function Footer() {
	return (
		<footer className='bg-light-purple p-4 flex items-center justify-evenly text-cream'>
			<ul>
				<li>Lorem</li>
				<li>Ipsum</li>
				<li>Dolor</li>
				<li>Sit</li>
				<li>Amet</li>
			</ul>
			<section className='text-center'>
				<h1 className='font-bold mb-4'>Redes sociais</h1>
				<ul className='flex justify-evenly'>
					<li>
						<InstagramLogo className='h-8 w-8' />
					</li>
					<li>
						<FacebookLogo className='h-8 w-8' />
					</li>
					<li>
						<WhatsAppLogo className='h8 w-8' />
					</li>
				</ul>
			</section>
		</footer>
	);
}
