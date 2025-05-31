import { Box, Heading, Text, VStack, Container, SimpleGrid } from '@chakra-ui/react'

function Story() {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" color="pink.500" textAlign="center">
          Our Story
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading as="h3" size="md" mb={4} color="pink.400">
              How We Met
            </Heading>
            <Text color="gray.700">
              [Add your story about how you met here. This is where Graham and Kat can share 
              the beautiful beginning of their love story.]
            </Text>
          </Box>
          
          <Box>
            <Heading as="h3" size="md" mb={4} color="pink.400">
              The Proposal
            </Heading>
            <Text color="gray.700">
              [Share the magical moment of the proposal. This section can include details 
              about when, where, and how the proposal happened.]
            </Text>
          </Box>
        </SimpleGrid>
        
        <Box textAlign="center">
          <Heading as="h3" size="md" mb={4} color="pink.400">
            Our Journey Together
          </Heading>
          <Text color="gray.700" maxW="2xl">
            [This section can include milestones in your relationship, adventures you've 
            shared, and what makes your love special.]
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}

export default Story
