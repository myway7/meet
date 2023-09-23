/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
      "./pages/**/*.{ts,tsx}",
    ],
    daisyui: {
        themes: ["dark", "light", "cupcake"],
      },
    plugins: [require('daisyui')],
  };