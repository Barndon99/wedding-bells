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

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement RSVP submission logic
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="pink.500" mb={4}>
            RSVP
          </Heading>
          <Text color="gray.600">
            Please respond by [RSVP Date]
          </Text>
        </Box>
        
        <Box as="form" onSubmit={handleSubmit} w="full" maxW="md">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Will you be attending?</FormLabel>
              <Select 
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                placeholder="Select your response"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, I can't make it</option>
              </Select>
            </FormControl>
            
            {formData.attendance === 'yes' && (
              <>
                <FormControl>
                  <FormLabel>Number of Guests</FormLabel>
                  <Select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">Just me</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </Select>
                </FormControl>
                
                <FormControl>
                  <FormLabel>Dietary Restrictions</FormLabel>
                  <Input 
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Any dietary restrictions or allergies?"
                  />
                </FormControl>
              </>
            )}
            
            <FormControl>
              <FormLabel>Message for the Couple</FormLabel>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share a message, memory, or well wishes!"
                rows={4}
              />
            </FormControl>
            
            <Button 
              type="submit" 
              colorScheme="pink" 
              size="lg" 
              w="full"
            >
              Submit RSVP
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default RSVP
