/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				pink: '#E1AFD1',
				'light-purple': '#86469C',
				navy: '#392467',
				cream: '#F5EEE6',
			},
			textColor: {
				cream: '#F5EEE6',
				navy: '#392467',
			},
			animation: {
				modalf: 'modalf 0.25s ease-in-out',
			},
			keyframes: {
				modalf: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
};

