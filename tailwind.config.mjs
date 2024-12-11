const addBasePlugin = ({ addBase }) =>
{
	const baseStyles =
	{
		'*':
		{
			margin: 0,
			padding: 0,
			boxSizing: 'border-box',
		},
		'html':
		{
			scrollBehavior: 'smooth',
		},
	}

	return addBase(baseStyles)
}

/** @type {import('tailwindcss').Config} */
export default
{
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme:
	{
		extend:
		{
			colors:
			{
				light:
				{
					text: '#ffffff',
					background: '#000000',
					primary: '#2f27ce',
					secondary: '#ffd60a',
					accent: '#4c6cfa',
				},
				dark:
				{
					text: '#000000',
					background: '#ffffff',
					primary: '#3a31d8',
					secondary: '#f5cc00',
					accent: '#0525b3',
				}
			},
		},
	},
	plugins: [addBasePlugin],
}
