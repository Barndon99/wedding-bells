import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Heading,
  Link,
  Divider
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  return (
    <Box bg="#1B4D3E" color="white" py={16}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Couple Names */}
          <VStack align="start" spacing={4}>
            <Heading 
              size="md" 
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Graham & Kat
            </Heading>
            <Text fontSize="sm" color="gray.400">
              June 15, 2024
            </Text>
            <Text fontSize="sm" color="gray.400">
              Celebrating love, family, and new beginnings
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={4}>
            <Heading 
              size="sm" 
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={2}
            >
              Quick Links
            </Heading>
            <VStack align="start" spacing={2}>
              <Link 
                as={RouterLink} 
                to="/story" 
                fontSize="sm" 
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Our Story
              </Link>
              <Link 
                as={RouterLink} 
                to="/details" 
                fontSize="sm" 
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Wedding Details
              </Link>
              <Link 
                as={RouterLink} 
                to="/rsvp" 
                fontSize="sm" 
                color="gray.300"
                _hover={{ color: "white" }}
              >
                RSVP
              </Link>
              <Link 
                as={RouterLink} 
                to="/registry" 
                fontSize="sm" 
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Registry
              </Link>
            </VStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={4}>
            <Heading 
              size="sm" 
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={2}
            >
              Contact
            </Heading>
            <VStack align="start" spacing={2}>
              <Text fontSize="sm" color="gray.300">
                Wedding Planner
              </Text>
              <Text fontSize="sm" color="gray.400">
                contact@weddingplanner.com
              </Text>
              <Text fontSize="sm" color="gray.400">
                (555) 123-4567
              </Text>
            </VStack>
          </VStack>

          {/* Special Message */}
          <VStack align="start" spacing={4}>
            <Heading 
              size="sm" 
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={2}
            >
              Thank You
            </Heading>
            <Text fontSize="sm" color="gray.300" lineHeight="tall">
              We are so grateful for your love and support as we begin this new chapter together.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.600" />

        {/* Bottom Section */}
        <HStack justify="space-between" align="center" flexWrap="wrap">
          <Text fontSize="sm" color="gray.400">
            © 2024 Graham & Kat. Made with ❤️ for our special day.
          </Text>
          <HStack spacing={4}>
            <Text fontSize="sm" color="gray.400">
              Privacy
            </Text>
            <Text fontSize="sm" color="gray.400">
              •
            </Text>
            <Text fontSize="sm" color="gray.400">
              Contact
            </Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer
