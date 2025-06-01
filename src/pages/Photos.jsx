import { Box, Heading, Text, VStack, Container, SimpleGrid, Image } from '@chakra-ui/react'

function Photos() {
  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+1', alt: 'Graham and Katarina Photo 1' },
    { id: 2, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+2', alt: 'Graham and Katarina Photo 2' },
    { id: 3, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+3', alt: 'Graham and Katarina Photo 3' },
    { id: 4, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+4', alt: 'Graham and Katarina Photo 4' },
    { id: 5, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+5', alt: 'Graham and Katarina Photo 5' },
    { id: 6, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+6', alt: 'Graham and Katarina Photo 6' },
  ]

  return (
    <Box minH="100vh" bg="#f0f3dc">
      <Container maxW="container.lg" py={16}>
        <VStack spacing={12} align="center" textAlign="center">
          <VStack spacing={6}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
              color="#1B4D3E"
            >
              Our Photos
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
              A collection of our favorite memories together. From our first adventures
              to recent moments, these photos tell the story of our love.
            </Text>
          </VStack>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="full">
          {photos.map((photo) => (
            <Box
              key={photo.id}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
              position="relative"
              aspectRatio="1"
              bg="white"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          ))}
        </SimpleGrid>

          <Box textAlign="center" mt={8}>
            <Text color="gray.600" fontStyle="italic">
              More photos coming soon! We'll be adding engagement photos and other
              special moments as we get closer to the big day.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Photos
