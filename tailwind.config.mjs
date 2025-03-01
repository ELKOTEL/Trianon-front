/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeBackground: {
          '0%': {
            backgroundImage: 'url(/images/hero-image-1.jpg)',
            opacity: 1,
          },
          '33%': {
            backgroundImage: 'url("https://www.google.com/imgres?q=HOTEL&imgurl=https%3A%2F%2Fwww.cvent.com%2Fsites%2Fdefault%2Ffiles%2Fimage%2F2021-08%2Fexterior%2520view%2520of%2520the%2520sign%2520at%2520the%2520front%2520of%2520a%2520hotel.jpg&imgrefurl=https%3A%2F%2Fwww.cvent.com%2Fen%2Fblog%2Fhospitality%2Fwhat-is-a-boutique-hotel&docid=Y3_niURy0twTWM&tbnid=jLwZoAi0xfNZWM&vet=12ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECBsQAA..i&w=1254&h=836&hcb=2&ved=2ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECBsQAA")',
            opacity: 1,
          },
          '66%': {
            backgroundImage: 'url("https://www.google.com/imgres?q=HOTEL&imgurl=https%3A%2F%2Fwww.shhotelsandresorts.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fscale_crop_1280x600%2Fpublic%2Fbrandfolder%2Fsbx829qxqctgttnvnpb44gf%2F231218_1_Hotel_MR_Kingw1921.png%3Fh%3Df0fb51a5%26itok%3Dg8hn-K2z&imgrefurl=https%3A%2F%2Fwww.shhotelsandresorts.com%2F&docid=ZpKEAKByalwpvM&tbnid=BqcXep43UJrecM&vet=12ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECHoQAA..i&w=1280&h=600&hcb=2&itg=1&ved=2ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECHoQAA")',
            opacity: 1,
          },
          '100%': {
            backgroundImage: 'url("https://www.google.com/imgres?q=HOTEL&imgurl=https%3A%2F%2Fx.cdrst.com%2Ffoto%2Fhotel-sf%2Fd11b9c2%2Fgranderesp%2Ffoto-hotel-d11af18.jpg&imgrefurl=https%3A%2F%2Freserving.com%2Fhotels%2Fasia%2Firan%2Ftehran%2Ftehran%2Fespinas-hotel&docid=YQ-j4sFUGAAauM&tbnid=07-jtoHIqMRYBM&vet=12ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECGsQAA..i&w=1000&h=666&hcb=2&ved=2ahUKEwj9lMvOi-GLAxU2RUEAHWZ3L8QQM3oECGsQAA")',
            opacity: 1,
          },
        },
      },
      animation: {
        fadeBackground: 'fadeBackground 9s infinite',
      },

    },
  },
  plugins: [],
};
