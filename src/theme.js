import { extendTheme } from '@chakra-ui/react'

// Custom theme with Fraunces font
const theme = extendTheme({
  fonts: {
    heading: `'Fraunces', serif`,
    body: `'Fraunces', serif`,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold', // All headings use bold weight
        fontFamily: 'heading',
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 'normal', // All body text uses normal weight
        fontFamily: 'body',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'body',
        fontWeight: 'normal',
      },
    },
  },
})

export default theme
