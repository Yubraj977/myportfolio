/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		  card: "var(--card)",
		  border: "var(--border)",
		  primary: {
			DEFAULT: "var(--primary)",
			light: "var(--primary-light)",
			dark: "var(--primary-dark)",
		  },
		  accent: {
			DEFAULT: "var(--accent)",
			light: "var(--accent-light)",
			dark: "var(--accent-dark)",
		  },
		},
		fontFamily: {
		  orbitron: ["var(--font-orbitron)", "sans-serif"],
		  geist: ["var(--font-geist-sans)", "sans-serif"],
		  mono: ["var(--font-geist-mono)", "monospace"],
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  function ({ addUtilities }) {
		addUtilities({
		  ".perspective-1000": {
			perspective: "1000px",
		  },
		});
	  },
	],
  };