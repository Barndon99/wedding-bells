import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Button,
  Link,
  HStack,
  Divider
} from '@chakra-ui/react'
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

function Location() {
  return (
    <Box minH="100vh" bg="#f0f3dc">
      <Container maxW="container.lg" py={16}>
        <VStack spacing={12} align="center" textAlign="center">
          <SlideUp>
            <VStack spacing={6}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                color="#1B4D3E"
              >
                Location & Directions
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
                Join us at our beautiful venue in Camarillo, California
              </Text>
            </VStack>
          </SlideUp>

          {/* Venue Information */}
          <StaggerContainer>
            <Box w="full" maxW="4xl">
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                {/* Ceremony */}
                <StaggerItem>
                  <Box bg="white" p={8} borderRadius="lg" shadow="lg">
                <VStack spacing={6} align="start">
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="300"
                    fontStyle="italic"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    color="#1B4D3E"
                  >
                    Ceremony
                  </Heading>
                  
                  <VStack spacing={3} align="start">
                    <Text fontSize="lg" fontWeight="500" color="gray.800">
                      Camarillo Ranch House
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      201 Camarillo Ranch Rd<br />
                      Camarillo, CA 93012
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      <strong>Time:</strong> 4:00 PM
                    </Text>
                  </VStack>

                  <Button
                    as={Link}
                    href="https://maps.google.com/?q=201+Camarillo+Ranch+Rd,+Camarillo,+CA+93012"
                    isExternal
                    bg="#1B4D3E"
                    color="white"
                    size="md"
                    _hover={{ bg: "#0F3A2E", textDecoration: 'none' }}
                  >
                    Get Directions
                  </Button>
                  </VStack>
                  </Box>
                </StaggerItem>

                {/* Reception */}
                <StaggerItem>
                  <Box bg="white" p={8} borderRadius="lg" shadow="lg">
                <VStack spacing={6} align="start">
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="300"
                    fontStyle="italic"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    color="#1B4D3E"
                  >
                    Reception
                  </Heading>
                  
                  <VStack spacing={3} align="start">
                    <Text fontSize="lg" fontWeight="500" color="gray.800">
                      Camarillo Ranch House
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      201 Camarillo Ranch Rd<br />
                      Camarillo, CA 93012
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      <strong>Time:</strong> 5:30 PM - 11:00 PM
                    </Text>
                  </VStack>

                  <Button
                    as={Link}
                    href="https://maps.google.com/?q=201+Camarillo+Ranch+Rd,+Camarillo,+CA+93012"
                    isExternal
                    bg="#1B4D3E"
                    color="white"
                    size="md"
                    _hover={{ bg: "#0F3A2E", textDecoration: 'none' }}
                  >
                    Get Directions
                  </Button>
                  </VStack>
                  </Box>
                </StaggerItem>
              </SimpleGrid>
            </Box>
          </StaggerContainer>

          <Divider borderColor="gray.300" />

          {/* Travel Information */}
          <SlideUp delay={0.3}>
            <Box w="full" maxW="4xl">
              <VStack spacing={8}>
                <Heading
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="#1B4D3E"
                >
                  Travel Information
                </Heading>

                <StaggerContainer>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                    {/* Parking */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#1B4D3E" fontWeight="500">
                            Parking
                          </Heading>
                          <Text fontSize="md" color="gray.600">
                            Free parking is available on-site. Additional street parking is available on Camarillo Ranch Road.
                          </Text>
                        </VStack>
                      </Box>
                    </StaggerItem>

                    {/* Transportation */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#1B4D3E" fontWeight="500">
                            Transportation
                          </Heading>
                          <Text fontSize="md" color="gray.600">
                            Uber and Lyft are readily available. We recommend arranging transportation if you plan to enjoy the open bar!
                          </Text>
                        </VStack>
                      </Box>
                    </StaggerItem>

                    {/* Nearby Hotels */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#1B4D3E" fontWeight="500">
                            Nearby Hotels
                          </Heading>
                          <VStack spacing={2} align="start">
                            <Text fontSize="sm" color="gray.600">
                              <strong>Hampton Inn & Suites</strong><br />
                              2.5 miles away
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                              <strong>Sonesta Select Camarillo</strong><br />
                              3.1 miles away
                            </Text>
                          </VStack>
                        </VStack>
                      </Box>
                    </StaggerItem>

                    {/* Airport Information */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#1B4D3E" fontWeight="500">
                            Airports
                          </Heading>
                          <VStack spacing={2} align="start">
                            <Text fontSize="sm" color="gray.600">
                              <strong>LAX:</strong> 1 hour drive<br />
                              <strong>Burbank:</strong> 45 minutes drive
                            </Text>
                          </VStack>
                        </VStack>
                      </Box>
                    </StaggerItem>
                  </SimpleGrid>
                </StaggerContainer>
              </VStack>
            </Box>
          </SlideUp>

          {/* Map Placeholder */}
          <FadeIn delay={0.6}>
            <Box w="full" maxW="4xl">
              <Box
                bg="gray.200"
                h="300px"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px dashed"
                borderColor="gray.400"
              >
                <VStack spacing={2}>
                  <Text fontSize="lg" color="gray.500" fontWeight="500">
                    Interactive Map
                  </Text>
                  <Text fontSize="sm" color="gray.400">
                    Map integration coming soon
                  </Text>
                </VStack>
              </Box>
            </Box>
          </FadeIn>
        </VStack>
      </Container>
    </Box>
  )
}

export default Location
