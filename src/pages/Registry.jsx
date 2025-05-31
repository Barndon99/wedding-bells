import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Button,
  Link
} from '@chakra-ui/react'

function Registry() {
  const registries = [
    {
      name: 'Amazon',
      description: 'Home essentials and everyday items',
      url: '#', // Replace with actual registry URL
      color: 'orange'
    },
    {
      name: 'Target',
      description: 'Home decor and kitchen items',
      url: '#', // Replace with actual registry URL
      color: 'red'
    },
    {
      name: 'Williams Sonoma',
      description: 'Kitchen and cooking essentials',
      url: '#', // Replace with actual registry URL
      color: 'blue'
    }
  ]

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="pink.500" mb={4}>
            Wedding Registry
          </Heading>
          <Text color="gray.600" maxW="2xl">
            Your presence at our wedding is the greatest gift of all! However, if you'd 
            like to help us start our new life together, we've registered for a few 
            items that would be meaningful to us.
          </Text>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
          {registries.map((registry, index) => (
            <Box 
              key={index}
              p={6} 
              borderWidth={1} 
              borderRadius="lg" 
              borderColor="pink.200"
              textAlign="center"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{ 
                transform: 'translateY(-2px)', 
                boxShadow: 'lg' 
              }}
            >
              <Heading as="h3" size="md" mb={3} color="pink.400">
                {registry.name}
              </Heading>
              <Text color="gray.600" mb={4}>
                {registry.description}
              </Text>
              <Button
                as={Link}
                href={registry.url}
                isExternal
                colorScheme={registry.color}
                _hover={{ textDecoration: 'none' }}
              >
                View Registry ↗
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        
        <Box textAlign="center" mt={8} p={6} bg="pink.50" borderRadius="lg">
          <Heading as="h3" size="md" mb={3} color="pink.500">
            Honeymoon Fund
          </Heading>
          <Text color="gray.700" mb={4}>
            We're also saving for our dream honeymoon! If you'd prefer to contribute 
            to our adventure fund, we'd be incredibly grateful.
          </Text>
          <Button colorScheme="pink" size="lg">
            Contribute to Honeymoon Fund
          </Button>
        </Box>
        
        <Text textAlign="center" color="gray.600" fontStyle="italic" maxW="xl">
          Thank you so much for thinking of us! Your love and support mean the world to us, 
          and we can't wait to celebrate with you.
        </Text>
      </VStack>
    </Container>
  )
}

export default Registry
