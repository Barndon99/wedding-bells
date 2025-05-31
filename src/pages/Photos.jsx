import { Box, Heading, Text, VStack, Container, SimpleGrid, Image } from '@chakra-ui/react'

function Photos() {
  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+1', alt: 'Graham and Kat Photo 1' },
    { id: 2, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+2', alt: 'Graham and Kat Photo 2' },
    { id: 3, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+3', alt: 'Graham and Kat Photo 3' },
    { id: 4, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+4', alt: 'Graham and Kat Photo 4' },
    { id: 5, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+5', alt: 'Graham and Kat Photo 5' },
    { id: 6, src: 'https://via.placeholder.com/300x300/FED7D7/E53E3E?text=Photo+6', alt: 'Graham and Kat Photo 6' },
  ]

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="pink.500" mb={4}>
            Our Photos
          </Heading>
          <Text color="gray.600" maxW="2xl">
            A collection of our favorite memories together. From our first adventures 
            to recent moments, these photos tell the story of our love.
          </Text>
        </Box>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="full">
          {photos.map((photo) => (
            <Box 
              key={photo.id}
              borderRadius="lg" 
              overflow="hidden" 
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image 
                src={photo.src} 
                alt={photo.alt}
                w="full"
                h="250px"
                objectFit="cover"
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
  )
}

export default Photos
