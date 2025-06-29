import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  SimpleGrid
} from '@chakra-ui/react'
import { SlideUp, FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CountdownDisplay from '../components/CountdownDisplay'
import Countdown from 'react-countdown';
function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height="60vh"
        backgroundImage="url('/assets/hero.png')"
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
        <VStack spacing={6} textAlign="center" position="relative" zIndex={1} color="white">
          {/* Small dots decoration */}
          <FadeIn delay={0.2}>
            <Countdown
              date={'2026-09-14T11:00:00'}
              renderer={({ days, hours, minutes, seconds }) => <CountdownDisplay days={days} hours={hours} minutes={minutes} seconds={seconds}/>}
            />
          </FadeIn>

          <SlideUp delay={0.4}>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="300"
              letterSpacing="wider"
              textTransform="uppercase"
              mb="60px"
            >
              Katarina & Graham
            </Heading>
          </SlideUp>

          <SlideUp delay={0.6}>
            <Button
              bg="white"
              color="gray.800"
              px={8}
              py={4}
              borderRadius="full"
              fontSize="sm"
              letterSpacing="wider"
              textTransform="uppercase"
              _hover={{ bg: "gray.100" }}
            >
              Save the Date • September 14, 2026
            </Button>
          </SlideUp>

          <SlideUp delay={0.8}>
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
          </SlideUp>
        </VStack>
      </Box>

      {/* Wedding Details Section */}
      <Box bg="#1B4D3E" color="white" h={{ base: "auto", lg: "620px" }} position="relative">
        {/* Pineapple decoration */}
        <Box
          position="absolute"
          bottom={{ base: 4, lg: 8 }}
          right={{ base: 4, lg: 8 }}
          w={{ base: "60px", lg: "80px" }}
          h={{ base: "60px", lg: "80px" }}
          opacity={0.3}
          zIndex={1}
        >
          <img
            src="/assets/pineapple.svg"
            alt="Pineapple decoration"
            style={{ width: "100%", height: "100%", filter: "brightness(0) invert(1)" }}
          />
        </Box>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          templateColumns={{ base: "1fr", lg: "3fr 2fr" }}
          h="full"
          spacing={0}
          position="relative"
          zIndex={2}
        >
          {/* Left Column - Wedding Details */}
          <Box p={{ base: 8, lg: 16 }} display="flex" alignItems="center">
            <VStack align="start" spacing={{ base: 6, lg: 8 }} w="full">
              <SlideInLeft>
                <Heading
                  fontSize={{ base: "3xl", lg: "4xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="white"
                  mb={{ base: 6, lg: 8 }}
                >
                  Wedding Details
                </Heading>
              </SlideInLeft>

              <StaggerContainer>
                <StaggerItem>
                  <Box>
                    <Text fontSize={{ base: "sm", lg: "md" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="white">
                      Date
                    </Text>
                    <Text fontSize={{ base: "lg", lg: "xl" }} color="white" mb={2}>September 14, 2026</Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">5:00pm - 10:30pm</Text>
                  </Box>
                </StaggerItem>

                <StaggerItem>
                  <Box>
                    <Text fontSize={{ base: "sm", lg: "md" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="white">
                      Reception Location
                    </Text>
                    <Text fontSize={{ base: "lg", lg: "xl" }} color="white" mb={2}>858 Phelan Court</Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">Fosciandora, Italy 93010</Text>
                  </Box>
                </StaggerItem>

                <StaggerItem>
                  <Box>
                    <Text fontSize={{ base: "sm", lg: "md" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="white">
                      Dress
                    </Text>
                    <Text fontSize={{ base: "lg", lg: "xl" }} color="white" mb={2}>Formal | Cocktail</Text>
                  </Box>
                </StaggerItem>
              </StaggerContainer>
            </VStack>
          </Box>

          {/* Right Column - Additional Info */}
          <Box p={{ base: 8, lg: 16 }} display="flex" alignItems="center">
            <VStack align="start" spacing={{ base: 6, lg: 8 }} w="full">
              <SlideInRight>
                <Heading
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color="white"
                  mb={{ base: 6, lg: 8 }}
                >
                  A Note from the Bride & Groom
                </Heading>
              </SlideInRight>

              <VStack align="start" spacing={{ base: 6, lg: 8 }} w="full">
                <Text color="white" fontSize={{ base: "md", lg: "lg" }} lineHeight="relaxed">
                  We can't tell you how excited we are to share this important day with
                  all of you. For us we are celebrating so much more than a wedding,
                  but a lifelong commitment we pray will be filled with laughter,
                  adventure & lots of love.
                </Text>

                <Text color="white" fontSize={{ base: "md", lg: "lg" }} lineHeight="relaxed">
                  Please join us in celebration at our reception in September 14, 2026, at
                  5:00pm, following our intimate mountain ceremony.
                </Text>

                <Text color="white" fontSize={{ base: "md", lg: "lg" }} lineHeight="relaxed">
                  Each one of you has played an important role in our story, and we are
                  excited to have you as witnesses as we step into this God journey
                  together.
                </Text>

                <Text color="white" fontSize={{ base: "md", lg: "lg" }} mt={{ base: 6, lg: 8 }} fontStyle="italic">
                  With Love,<br />
                  Katarina and Graham
                </Text>
              </VStack>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* First Section - Text 3/5, Image 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Right on desktop */}
        <Box
          backgroundImage="url('/assets/laugh.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 2 }}
        />

        {/* Text - Second on mobile, Left on desktop */}
        <Box bg="#f0f3dc" p={16} order={{ base: 2, lg: 1 }}>
          <VStack spacing={12} align="start">
            {/* Getting There */}
            <SlideUp>
              <Box>
                <Heading
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  mb={{ base: 6, lg: 8 }}
                  pt={{ base: 4, lg: 6 }}
                  color="gray.800"
                >
                  Getting There
                </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    By Car
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    1 Hour Drive from DTLA
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    5 Hour Drive from San Diego
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    By Flight
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    We recommend flying into Los Angeles International Airport or Burbank
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Where to Stay */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={{ base: 4, lg: 6 }}
                mt="15px"
                color="gray.800"
              >
                Where to Stay
              </Heading>

              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" mb={3} lineHeight="relaxed">
                Hampton Inn & Suites, Fosciandora or Thousand Oaks
              </Text>
              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                <Text as="span" textDecoration="underline">Sonesta Select Fosciandora</Text> | <Text as="span" textDecoration="underline">Air BnB</Text> | <Text as="span" textDecoration="underline">Vrbo</Text>
              </Text>
            </Box>

            {/* Great Food & Drinks */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mt="15px"
                mb={{ base: 4, lg: 6 }}
                color="gray.800"
              >
                Great Food & Drinks
              </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Coffee
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Cafe Ficelle
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Ragamuffin Coffee Roasters
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Ten Speed Coffee
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Frontside Cafe
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Good Grub
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Twenty88 Bistro
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    BLVD Burger
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Silverlake Ramen
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Luv n Eat Thai
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed" mb={2}>
                    Sushi Fujiya
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Institution Ale
                  </Text>
                </Box>
              </SimpleGrid>
              </Box>
            </SlideUp>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Second Section - Image 3/5, Text 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Left on desktop */}
        <Box
          backgroundImage="url('/assets/twirl.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 1 }}
        />

        {/* Text - Second on mobile, Right on desktop */}
        <Box bg="#f0f3dc" p={16} order={{ base: 2, lg: 2 }}>
          <VStack spacing={12} align="start">
            {/* Activities & Entertainment */}
            <SlideUp>
              <Box>
                <Heading
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  mb={{ base: 6, lg: 8 }}
                  pt={{ base: 4, lg: 6 }}
                  color="gray.800"
                >
                  Activities & Entertainment
                </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Live Music
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Acoustic performances throughout the evening with local artists
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Dancing
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Open dance floor with DJ playing your favorite hits
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Gift Registry */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mt="15px"
                mb={{ base: 4, lg: 6 }}
                color="gray.800"
              >
                Gift Registry
              </Heading>

              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" mb={3} lineHeight="relaxed">
                Your presence is the greatest gift of all
              </Text>
              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                For those who wish to give, we've registered at <Text as="span" textDecoration="underline">Williams Sonoma</Text> and <Text as="span" textDecoration="underline">Crate & Barrel</Text>
              </Text>
            </Box>

            {/* Special Requests */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mt="15px"
                mb={{ base: 4, lg: 6 }}
                color="gray.800"
              >
                Special Requests
              </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Photography
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Please share your photos with #GrahamAndKat
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Unplugged Ceremony
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Please keep phones and cameras away during the ceremony
                  </Text>
                </Box>
              </SimpleGrid>
              </Box>
            </SlideUp>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Third Section - Text 3/5, Image 2/5 */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} templateColumns={{ base: "1fr", lg: "3fr 2fr" }} minH="20vh">
        {/* Image - First on mobile, Right on desktop */}
        <Box
          backgroundImage="url('/assets/sitting.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          minH="20vh"
          order={{ base: 1, lg: 2 }}
        />

        {/* Text - Second on mobile, Left on desktop */}
        <Box bg="#f0f3dc" p={16} order={{ base: 2, lg: 1 }}>
          <VStack spacing={12} align="start">
            {/* Local Attractions */}
            <SlideUp>
              <Box>
                <Heading
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight="300"
                  fontStyle="italic"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  mb={{ base: 6, lg: 8 }}
                  pt={{ base: 4, lg: 6 }}
                  color="gray.800"
                >
                  Local Attractions
                </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Historic Sites
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Explore the charming downtown area with vintage shops and galleries
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Nature Walks
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Beautiful hiking trails with ocean views just minutes away
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Weekend Itinerary */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mt="15px"
                mb={{ base: 4, lg: 6 }}
                color="gray.800"
              >
                Weekend Itinerary
              </Heading>

              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" mb={3} lineHeight="relaxed">
                Friday: Welcome drinks at the hotel bar
              </Text>
              <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                Saturday: Ceremony at 4pm, reception to follow until midnight
              </Text>
            </Box>

            {/* Contact Information */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="300"
                fontStyle="italic"
                letterSpacing="wider"
                textTransform="uppercase"
                mt="15px"
                mb={{ base: 4, lg: 6 }}
                color="gray.800"
              >
                Contact Information
              </Heading>

              <SimpleGrid columns={2} spacing={{ base: 6, lg: 8 }}>
                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Wedding Planner
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Sarah Johnson - (555) 123-4567
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} letterSpacing="wider" textTransform="uppercase" mb={3} color="gray.800" fontWeight="500">
                    Questions
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.700" lineHeight="relaxed">
                    Email us at kgjantz@gmail.com
                  </Text>
                </Box>
              </SimpleGrid>
              </Box>
            </SlideUp>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Home
