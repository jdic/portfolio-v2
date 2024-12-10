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
	theme:
	{
		extend:
		{
			
		},
	},
	plugins: [addBasePlugin],
}
