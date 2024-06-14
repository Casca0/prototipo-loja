import ShirtLogo from '../assets/ShirtLogo';
import { products } from '../assets/products.json';
import { useCart } from '../provider';

function Slider() {
	const { cart, setCart, total, setTotal } = useCart();

	const currencyFormat = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'BRL',
	});

	const cartArr = cart?.slice();
	const totalArr = total?.slice();

	return (
		<div className='text-center p-4 mb-4'>
			<h1 className='font-bold text-cream text-3xl m-4'>MAIS VENDIDOS</h1>
			<ul className='flex justify-evenly items-center w-full overflow-auto'>
				{products.map((product) => {
					return (
						<li
							className='bg-pink flex flex-col items-center h-72 w-52 rounded-md p-4 md:m-0 m-4'
							key={product.name}>
							<ShirtLogo className='w-40 h-40' />
							<section className='m-4'>
								<h1 className='font-bold text-navy'>{product.name}</h1>
								<p className='text-navy text-center'>
									{currencyFormat.format(product.value)}
								</p>
							</section>
							<button
								onClick={() => {
									cartArr?.push({
										name: product.name,
										value: currencyFormat.format(product.value),
										quantity: 1,
									});
									setCart(cartArr!);
									totalArr?.push(product.value);
									setTotal(totalArr);
								}}
								className='bg-navy text-cream rounded-lg p-2'>
								Comprar
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Slider;
