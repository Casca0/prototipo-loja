import { useRef, useEffect } from 'react';

function ShoppingCart({
	openModal,
	closeModal,
	children,
}: {
	openModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (openModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [openModal]);

	return (
		<dialog
			className='bg-transparent h-screen w-screen items-center justify-center open:animate-modalf transition-all'
			ref={ref}
			onCancel={closeModal}>
			{children}
		</dialog>
	);
}

export default ShoppingCart;
