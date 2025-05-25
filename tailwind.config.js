module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-right': 'fadeInRight 0.5s ease-out',
        'fade-out': 'fadeOut 0.5s ease-in',
        "fade-in-up": "fadeInUp 0.8s ease-out",
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
