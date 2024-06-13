import { createContext, useContext, useState } from 'react';

interface ShoppingCart {
	cart: CartProduct[] | null;
	setCart: React.Dispatch<React.SetStateAction<CartProduct[] | null>>;
}

export type CartProduct = {
	name: string;
	quantity: number;
	value: string;
};

const CartContext = createContext<ShoppingCart | null>(null);

export default function CartProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [cart, setCart] = useState<CartProduct[] | null>([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart(): ShoppingCart {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart deve ser usado dentro de um CartProvider!');
	}

	return context;
}
