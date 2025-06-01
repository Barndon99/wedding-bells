import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { SlideUp, FadeIn } from '../components/AnimatedSection'

function SongRequests() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    songTitle: '',
    artist: '',
    specialNote: ''
  })
  const toast = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Song request submitted:', formData)
    
    toast({
      title: "Song request submitted!",
      description: "Thank you for your song suggestion. We'll add it to our playlist!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      songTitle: '',
      artist: '',
      specialNote: ''
    })
  }

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
                Song Requests
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
                Help us create the perfect playlist for our special day!
                Share your favorite songs that will get everyone on the dance floor.
              </Text>
            </VStack>
          </SlideUp>

          <FadeIn delay={0.3}>
            <Box w="full" maxW="2xl">
              <Box bg="white" p={8} borderRadius="lg" shadow="lg">
                <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="500">Your Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        focusBorderColor="#1B4D3E"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="500">Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        focusBorderColor="#1B4D3E"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="500">Song Title</FormLabel>
                      <Input
                        name="songTitle"
                        value={formData.songTitle}
                        onChange={handleInputChange}
                        placeholder="Enter song title"
                        focusBorderColor="#1B4D3E"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="500">Artist</FormLabel>
                      <Input
                        name="artist"
                        value={formData.artist}
                        onChange={handleInputChange}
                        placeholder="Enter artist name"
                        focusBorderColor="#1B4D3E"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="500">Special Note (Optional)</FormLabel>
                    <Textarea
                      name="specialNote"
                      value={formData.specialNote}
                      onChange={handleInputChange}
                      placeholder="Tell us why this song is special to you or when you'd like it played..."
                      rows={4}
                      focusBorderColor="#1B4D3E"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="#1B4D3E"
                    color="white"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="md"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    _hover={{ bg: "#0F3A2E" }}
                    _active={{ bg: "#0F3A2E" }}
                  >
                    Submit Song Request
                  </Button>
                </VStack>
                </form>
              </Box>
            </Box>
          </FadeIn>

          <SlideUp delay={0.6}>
            <VStack spacing={4} textAlign="center" maxW="2xl">
              <Text fontSize="lg" color="gray.600" fontWeight="500">
                Popular Requests So Far:
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                <Text fontSize="md" color="gray.500">
                  "Can't Help Myself" - Four Tops
                </Text>
                <Text fontSize="md" color="gray.500">
                  "September" - Earth, Wind & Fire
                </Text>
                <Text fontSize="md" color="gray.500">
                  "I Wanna Dance with Somebody" - Whitney Houston
                </Text>
                <Text fontSize="md" color="gray.500">
                  "Mr. Brightside" - The Killers
                </Text>
              </SimpleGrid>
            </VStack>
          </SlideUp>
        </VStack>
      </Container>
    </Box>
  )
}

export default SongRequests
