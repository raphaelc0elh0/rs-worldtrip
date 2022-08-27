import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    "river-bed": {
      "50": "#f4f7f7",
      "100": "#e3e9ea",
      "200": "#cad7d7",
      "300": "#a5b9bb",
      "400": "#799597",
      "500": "#5e7a7c",
      "600": "#50676a",
      "700": "#47585b",
      "800": "#3e4a4c",
      "900": "#374042"
    },
    gray: {
      "50": "#f8f8f8",
      "100": "#f0f0f0",
      "200": "#e4e4e4",
      "300": "#d1d1d1",
      "400": "#b4b4b4",
      "500": "#999999",
      "600": "#818181",
      "700": "#6a6a6a",
      "800": "#5a5a5a",
      "900": "#4e4e4e"
    },
    yellow: {
      "50": "#fffeea",
      "100": "#fff9c5",
      "200": "#fff485",
      "300": "#ffe846",
      "400": "#ffd81b",
      "500": "#ffba08",
      "600": "#e28d00",
      "700": "#bb6302",
      "800": "#984c08",
      "900": "#7c3e0b"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "river-bed.700"
      }
    }
  }
})
