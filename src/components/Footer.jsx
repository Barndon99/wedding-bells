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
    <Box bg="#1B4D3E" color="white" py={16} position="relative" overflow="hidden">
      {/* Pineapple decorations */}
      <Box
        position="absolute"
        top={{ base: 4, lg: 8 }}
        left={{ base: 4, lg: 8 }}
        w={{ base: "30px", lg: "40px" }}
        h={{ base: "30px", lg: "40px" }}
        opacity={0.15}
        zIndex={1}
      >
        <img
          src="/assets/pineapple.svg"
          alt="Pineapple decoration"
          style={{ width: "100%", height: "100%", filter: "brightness(0) invert(1)" }}
        />
      </Box>

      <Box
        position="absolute"
        bottom={{ base: 4, lg: 8 }}
        right={{ base: 4, lg: 8 }}
        w={{ base: "35px", lg: "50px" }}
        h={{ base: "35px", lg: "50px" }}
        opacity={0.2}
        zIndex={1}
        transform="rotate(15deg)"
      >
        <img
          src="/assets/pineapple.svg"
          alt="Pineapple decoration"
          style={{ width: "100%", height: "100%", filter: "brightness(0) invert(1)" }}
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={2}>
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
              September 2026
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
                to="/"
                fontSize="sm"
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Home
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
                to="/photos"
                fontSize="sm"
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Photos
              </Link>
              <Link
                as={RouterLink}
                to="/song-requests"
                fontSize="sm"
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Song Requests
              </Link>
              <Link
                as={RouterLink}
                to="/location"
                fontSize="sm"
                color="gray.300"
                _hover={{ color: "white" }}
              >
                Location
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
                kgjantz@gmail.com
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
            © 2026 Graham & Kat. Made with ❤️ for our special day.
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
