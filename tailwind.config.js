/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
      "./pages/**/*.{ts,tsx}",
    ],
    plugins: [require('daisyui')],
  };