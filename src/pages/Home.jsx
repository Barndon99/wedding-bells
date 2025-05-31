import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  Button,
  SimpleGrid
} from '@chakra-ui/react'

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height="50vh"
        backgroundImage="url('src/assets/hero.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.300"
        />

        {/* Hero Content */}
        <VStack spacing={8} textAlign="center" position="relative" zIndex={1} color="white">
          {/* Small dots decoration */}
          <HStack spacing={2} mb={4}>
            <Box w={2} h={2} bg="white" borderRadius="full" />
            <Box w={2} h={2} bg="white" borderRadius="full" />
            <Box w={2} h={2} bg="white" borderRadius="full" />
          </HStack>

          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="300"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            Graham & Kat
          </Heading>

          <Button
            bg="white"
            color="gray.800"
            px={8}
            py={6}
            borderRadius="full"
            fontSize="sm"
            letterSpacing="wider"
            textTransform="uppercase"
            _hover={{ bg: "gray.100" }}
          >
            Save the Date • June 15, 2024
          </Button>

          <Button
            variant="outline"
            borderColor="white"
            color="white"
            px={6}
            py={4}
            borderRadius="full"
            fontSize="sm"
            letterSpacing="wider"
            textTransform="uppercase"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            RSVP
          </Button>
        </VStack>
      </Box>

      {/* Wedding Details Section */}
      <Box bg="#1B4D3E" color="white" py={14}>
        <Container maxW="container.xl" height="12vh">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
            {/* Left Column - Wedding Details */}
            <VStack align="start" spacing={8}>
              <Heading
                fontSize="2xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                Wedding Details
              </Heading>

              <VStack align="start" spacing={6}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2}>
                    Date
                  </Text>
                  <Text fontSize="lg">Saturday, June 15th</Text>
                  <Text color="gray.400">2024</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2}>
                    Reception & Ceremony
                  </Text>
                  <Text fontSize="lg">Lorem ipsum dolor</Text>
                  <Text color="gray.400">sit amet consectetur</Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2}>
                    Dress
                  </Text>
                  <Text fontSize="lg">Formal Attire</Text>
                  <Text color="gray.400">Black tie optional</Text>
                </Box>
              </VStack>
            </VStack>

            {/* Right Column - Additional Info */}
            <VStack align="start" spacing={6}>
              <Heading
                fontSize="lg"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
              >
                A Few Words from the Couple
              </Heading>

              <Text color="gray.300" lineHeight="tall">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>

              <Text color="gray.300" lineHeight="tall">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </Text>

              <Text color="gray.400" fontSize="sm" mt={4}>
                With Love,<br />
                Graham & Kat
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* First Section - Text 3/5, Image 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Right on desktop */}
        <Box
          backgroundImage="url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 2 }}
        />

        {/* Text - Second on mobile, Left on desktop */}
        <Box bg="gray.50" p={16} order={{ base: 2, lg: 1 }}>
          <VStack spacing={12} align="start">
            {/* Getting There */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Getting There
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    By Car
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    By Flight
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Where to Stay */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Where to Stay
              </Heading>

              <Text fontSize="sm" color="gray.700" mb={2}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <Text fontSize="sm" color="gray.700">
                adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            {/* Great Food & Drinks */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Great Food & Drinks
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Cocktails
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Local Cuisine
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Second Section - Image 3/5, Text 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Left on desktop */}
        <Box
          backgroundImage="url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 1 }}
        />

        {/* Text - Second on mobile, Right on desktop */}
        <Box bg="white" p={16} order={{ base: 2, lg: 2 }}>
          <VStack spacing={12} align="start">
            {/* Activities & Entertainment */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Activities & Entertainment
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Live Music
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Dancing
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Gift Registry */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Gift Registry
              </Heading>

              <Text fontSize="sm" color="gray.700" mb={2}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <Text fontSize="sm" color="gray.700">
                adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            {/* Special Requests */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Special Requests
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Photography
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Unplugged Ceremony
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Third Section - Text 3/5, Image 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Right on desktop */}
        <Box
          backgroundImage="url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 2 }}
        />

        {/* Text - Second on mobile, Left on desktop */}
        <Box bg="gray.50" p={16} order={{ base: 2, lg: 1 }}>
          <VStack spacing={12} align="start">
            {/* Local Attractions */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Local Attractions
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Historic Sites
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Nature Walks
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Weekend Itinerary */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Weekend Itinerary
              </Heading>

              <Text fontSize="sm" color="gray.700" mb={2}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <Text fontSize="sm" color="gray.700">
                adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            {/* Contact Information */}
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={6}
                color="gray.800"
              >
                Contact Information
              </Heading>

              <SimpleGrid columns={2} spacing={8}>
                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Wedding Planner
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase" mb={2} color="gray.600">
                    Questions
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Home
