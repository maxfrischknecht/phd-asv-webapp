/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// customize 12 col grid: https://tailwindcss.com/docs/grid-template-columns
			colors: {
				primary: 'rgb(178, 11, 255)',
				surface: '#F0F0F0',
				darksurface: '#282828',
				darklink: 'rgba(65, 65, 65, 0.5)',
				grey: '#5A5A5A'
				// blue: '#606FF3'
			}
		},
		fontFamily: {
			// creates font-sans class
			sans: ['sans-serif'],
			// medium: ['monospace'],
			monospace: ['monospace']
			// serif: ['ABCLaicaA-RegularItalic-Trial', 'Times', 'serif']
		},
		fontSize: {
			// https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
			md: ['1.125rem', '1.375rem'],
			'sm-mono': ['0.71875rem', '1rem'],
			'sm-sans': ['0.75rem', '1rem']
		}
	},
	plugins: []
};
