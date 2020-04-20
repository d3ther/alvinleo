const spacing = {
  exxxtrasmall: 2,
  exxtrasmall: 4,
  extrasmall: 8,
  small: 16,
  medium: 24,
  large: 32,
  extralarge: 40,
  exxtralarge: 48,
  exxxtralarge: 56,
};

const color = {
  black: "#000",
  white: "#fff",
  subcontent: "#354148",
  inactive: "#dadada",
  blue: "#015ef3",
};

const typography = {
  title: {
    fontSize: 24,
    lineHeight: 24,
    color: color.black,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: color.black,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: color.black,
  },
  subcontent: {
    fontSize: 16,
    lineHeight: 24,
    color: color.subcontent,
  },
  link: {
    fontSize: 14,
    lineHeight: 24,
    color: color.blue,
    fontWeight: "bold",
  },
  information: {
    fontSize: 12,
    lineHeight: 16,
    color: color.blue,
    fontWeight: "bold",
  },
};

export default { spacing, color, typography };
