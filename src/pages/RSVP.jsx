import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  FormControl, 
  FormLabel, 
  Input, 
  Select, 
  Textarea, 
  Button, 
  useToast 
} from '@chakra-ui/react'
import { useState } from 'react'
import { SlideUp, FadeIn } from '../components/AnimatedSection'

function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietaryRestrictions: '',
    message: ''
  })
  const toast = useToast()

const handleSubmit = async (e) => {
  e.preventDefault()

  const payload = {
    "Timestamp": new Date(),
    "Name": formData.name,
    "Email": formData.email,
    "Attendance": formData.attendance,
    "Guests": formData.guests,
    "Dietary Restrictions": formData.dietaryRestrictions,
    "Message": formData.message
  }

  try {
    await fetch("https://api.sheetbest.com/sheets/244811a3-f818-4d64-a75c-63bf14a62bb6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    setFormData({
      name: '',
      email: '',
      attendance: '',
      guests: '1',
      dietaryRestrictions: '',
      message: ''
    })
  } catch (error) {
    console.error("Submission failed:", error)
    toast({
      title: "Submission Failed",
      description: "There was a problem submitting your RSVP. Please try again later.",
      status: "error",
      duration: 5000,
      isClosable: true,
    })
  }
}

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                RSVP
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
                We can't wait to celebrate with you! Please respond by August 2026
              </Text>
            </VStack>
          </SlideUp>

          <FadeIn delay={0.3}>
            <Box w="full" maxW="2xl">
              <Box bg="white" p={8} borderRadius="lg" shadow="lg">
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="500">Full Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      focusBorderColor="#1B4D3E"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="500">Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      focusBorderColor="#1B4D3E"
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="500">Will you be attending?</FormLabel>
                    <Select
                      name="attendance"
                      value={formData.attendance}
                      onChange={handleChange}
                      placeholder="Select your response"
                      focusBorderColor="#1B4D3E"
                      size="lg"
                    >
                      <option value="yes">Yes, I'll be there! 🎉</option>
                      <option value="no">Sorry, I can't make it 😔</option>
                    </Select>
                  </FormControl>

                  {formData.attendance === 'yes' && (
                    <>
                      <FormControl>
                        <FormLabel color="gray.700" fontWeight="500">Number of Guests</FormLabel>
                        <Select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          focusBorderColor="#1B4D3E"
                          size="lg"
                        >
                          <option value="1">Just me</option>
                          <option value="2">2 people</option>
                          <option value="3">3 people</option>
                          <option value="4">4 people</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel color="gray.700" fontWeight="500">Dietary Restrictions</FormLabel>
                        <Input
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleChange}
                          placeholder="Any dietary restrictions or allergies?"
                          focusBorderColor="#1B4D3E"
                          size="lg"
                        />
                      </FormControl>
                    </>
                  )}

                  <FormControl>
                    <FormLabel color="gray.700" fontWeight="500">Message for the Couple</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a message, memory, or well wishes!"
                      rows={4}
                      focusBorderColor="#1B4D3E"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bg="#1B4D3E"
                    color="white"
                    size="lg"
                    w="full"
                    py={6}
                    fontSize="md"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    _hover={{ bg: "#0F3A2E" }}
                    _active={{ bg: "#0F3A2E" }}
                  >
                    Submit RSVP
                  </Button>
                </VStack>
              </form>
            </Box>
            </Box>
          </FadeIn>

          <SlideUp delay={0.6}>
            <VStack spacing={4} textAlign="center" maxW="2xl">
              <Text fontSize="lg" color="gray.600" fontWeight="500">
                Questions about the wedding?
              </Text>
              <Text fontSize="md" color="gray.500">
                Contact us at <Text as="span" color="#1B4D3E" fontWeight="500">kgjantz@gmail.com</Text> or call <Text as="span" color="#1B4D3E" fontWeight="500">(555) 123-4567</Text>
              </Text>
            </VStack>
          </SlideUp>
        </VStack>
      </Container>
    </Box>
  )
}

export default RSVP
