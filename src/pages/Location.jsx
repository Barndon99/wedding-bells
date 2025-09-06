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
                color="#5e4e33"
              >
                Location & Directions
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
                Join us at our beautiful venue in Fosciandora, Italy
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
                    color="#5e4e33"
                  >
                    Ceremony
                  </Heading>
                  
                  <VStack spacing={3} align="start">
                    <Text fontSize="lg" fontWeight="500" color="gray.800">
                      Fosciandora
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      Comune di Fosciandora
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      <strong>Time:</strong> 3:30 PM
                    </Text>
                  </VStack>

                  <Button
                    as={Link}
                    href="https://maps.google.com/?q=201+Fosciandora+Ranch+Rd,+Fosciandora,+Italy+93012"
                    isExternal
                    bg="#5e4e33"
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
                    color="#5e4e33"
                  >
                    Reception
                  </Heading>
                  
                  <VStack spacing={3} align="start">
                    <Text fontSize="lg" fontWeight="500" color="gray.800">
                      Fosciandora Villa
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      Province of Lucca, Tuscany, Italy
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      <strong>Time:</strong> To follow
                    </Text>
                  </VStack>

                  <Button
                    as={Link}
                    href="https://maps.google.com/?q=201+Fosciandora+Ranch+Rd,+Fosciandora,+Italy+93012"
                    isExternal
                    bg="#5e4e33"
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
                  color="#5e4e33"
                >
                  Travel Information
                </Heading>

                <StaggerContainer>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                    {/* Parking */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#5e4e33" fontWeight="500">
                            Parking
                          </Heading>
                          <Text fontSize="md" color="gray.600">
                            Free parking is available on-site.
                          </Text>
                        </VStack>
                      </Box>
                    </StaggerItem>
                    {/* Nearby Hotels */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#5e4e33" fontWeight="500">
                            Nearby Hotels
                          </Heading>
                          <VStack spacing={2} align="start">
                            <Text fontSize="sm" color="gray.600">
                              <strong>Campo Collina</strong><br />
                              Località Campo, 3, 55020 Fosciandora LU, Italy
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                              <strong>La Rupina</strong><br />
                              Località Rupina, 17, 55020 Fosciandora LU, Italy
                            </Text>
                          </VStack>
                        </VStack>
                      </Box>
                    </StaggerItem>
                    {/* Airport Information */}
                    <StaggerItem>
                      <Box bg="white" p={6} borderRadius="lg" shadow="md">
                        <VStack spacing={4} align="start">
                          <Heading fontSize="lg" color="#5e4e33" fontWeight="500">
                            Airports
                          </Heading>
                          <VStack spacing={2} align="start">
                            <Text fontSize="sm" color="gray.600">
                              <strong>Pisa (PSA-Galileo Galilei) Airport:</strong> 1 hour drive<br />
                              <strong>Florence (Amerigo Vespucci) Airport:</strong> 1 1/2 hour drive
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
        </VStack>
      </Container>
    </Box>
  )
}

export default Location
