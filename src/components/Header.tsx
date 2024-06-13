import { useEffect, useState } from 'react';

import ShoppingCartLogo from '../assets/ShoppingCartLogo.tsx';
import ShoppingBagLogo from '../assets/ShoppingBagLogo.tsx';
import TrashBinLogo from '../assets/TrashBinLogo.tsx';
import ShirtLogo from '../assets/ShirtLogo';
import ShoppingCart from './ShoppingCart.tsx';
import { CartProduct, useCart } from '../provider.tsx';

function Header() {
	const [modal, setModal] = useState(false);
	const { cart, setCart } = useCart();

	useEffect(() => {
		if (cart?.length === 1) {
			setModal(true);
			return;
		}
	}, [cart?.length]);

	return (
		<div className='sticky top-0'>
			<header className='bg-light-purple flex p-4 justify-between'>
				<div className='flex items-center'>
					<ShoppingCartLogo className='w-12 h-12 ' />
					<h1 className='ml-4 font-bold text-cream'>Nome da loja</h1>
				</div>
				<div
					id='shoppingCart'
					data-before={cart?.length}
					className='before:content-[attr(data-before)]'>
					<button onClick={() => setModal(true)}>
						<ShoppingBagLogo className='w-12 h-12' />
					</button>
					<ShoppingCart
						openModal={modal}
						closeModal={() => setModal(false)}>
						<div className='md:w-96 w-full h-full flex flex-col bg-light-purple absolute right-0 rounded-md p-4'>
							<button
								onClick={() => setModal(false)}
								className='text-cream font-bold self-end'>
								X
							</button>
							<ul className='h-96 overflow-auto'>
								{cart?.map((product: CartProduct, index) => {
									function removeFromCart() {
										const tempArr = cart?.slice();
										tempArr?.splice(index, 1);
										setCart(tempArr!);
										if (tempArr!.length < 1) {
											setModal(false);
											return;
										}
										return;
									}
									return (
										<li
											className='bg-cream m-2 rounded-lg p-4 flex items-center justify-evenly'
											key={index}>
											<ShirtLogo className='w-10 h-10' />
											<section className='text-center'>
												<h1 className='font-bold text-navy'>{product.name}</h1>
												<p className='text-navy'>{product.value}</p>
											</section>
											<button onClick={() => removeFromCart()}>
												<TrashBinLogo className='w-7 h-7' />
											</button>
										</li>
									);
								})}
							</ul>
						</div>
					</ShoppingCart>
				</div>
			</header>
			<nav className='w-full flex justify-center items-center bg-cream text-navy p-2'>
				<ul className='flex justify-evenly grow'>
					<li>Lorem</li>
					<li>Ipsum</li>
					<li>Dolor</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
