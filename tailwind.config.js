module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html"]
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bfa7d6c-3711-4d59-aab6-07f07558689c/dcnsh75-03a01789-8ced-4d80-a904-72d36493ca78.jpg/v1/fill/w_1280,h_723,q_75,strp/calm_evening_by_w_e_z_dcnsh75-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjMiLCJwYXRoIjoiXC9mXC81YmZhN2Q2Yy0zNzExLTRkNTktYWFiNi0wN2YwNzU1ODY4OWNcL2RjbnNoNzUtMDNhMDE3ODktOGNlZC00ZDgwLWE5MDQtNzJkMzY0OTNjYTc4LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ASHRoyXaEbaTGMI5y2uPRjzz8TWHf215tQQivUWdgUc')"
      })
    }
  },
  variants: {},
  plugins: []
};
