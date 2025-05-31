import { Box, Heading, Text, VStack, Container, SimpleGrid, Divider } from '@chakra-ui/react'

function Details() {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" color="pink.500" textAlign="center">
          Wedding Details
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          <Box textAlign="center" p={6} borderWidth={1} borderRadius="lg" borderColor="pink.200">
            <Heading as="h3" size="md" mb={4} color="pink.400">
              Ceremony
            </Heading>
            <Text fontWeight="bold" mb={2}>[Date]</Text>
            <Text mb={2}>[Time]</Text>
            <Text color="gray.600">
              [Ceremony Venue Name]<br />
              [Address]<br />
              [City, State ZIP]
            </Text>
          </Box>
          
          <Box textAlign="center" p={6} borderWidth={1} borderRadius="lg" borderColor="pink.200">
            <Heading as="h3" size="md" mb={4} color="pink.400">
              Reception
            </Heading>
            <Text fontWeight="bold" mb={2}>[Date]</Text>
            <Text mb={2}>[Time]</Text>
            <Text color="gray.600">
              [Reception Venue Name]<br />
              [Address]<br />
              [City, State ZIP]
            </Text>
          </Box>
        </SimpleGrid>
        
        <Divider />
        
        <Box textAlign="center">
          <Heading as="h3" size="md" mb={4} color="pink.400">
            Additional Information
          </Heading>
          <VStack spacing={4}>
            <Box>
              <Text fontWeight="bold" mb={2}>Dress Code</Text>
              <Text color="gray.600">[Dress code information]</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>Accommodations</Text>
              <Text color="gray.600">[Hotel recommendations and booking information]</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>Transportation</Text>
              <Text color="gray.600">[Transportation details if applicable]</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Details
