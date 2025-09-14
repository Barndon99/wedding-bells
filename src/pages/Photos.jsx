import { Box, Heading, Text, VStack, Container, Image } from '@chakra-ui/react'
import { SlideUp } from '../components/AnimatedSection'

const images = import.meta.glob('/public/assets/photo-vault/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});

const PhotoGallery = () => {
  return (
    <Box
      px={4}
      py={6}
      sx={{
        columnCount: { base: 1, md: 3 },
        columnGap: '1rem',
      }}
      borderRadius="8px"
    >
      {Object.values(images).map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Vault ${index}`}
          mb="1rem"
          width="100%"
          display="block"
          borderRadius="8px"
        />
      ))}
    </Box>
  );
};

function Photos() {
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
                Our Photos
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl">
                A collection of our favorite memories together. From our first adventures
                to recent moments, these photos tell the story of our love.
              </Text>
            </VStack>
          </SlideUp>
        <PhotoGallery />
        <SlideUp delay={0.6}>
          <Box textAlign="center" mt={8}>
            <Text color="gray.600" fontStyle="italic">
              More photos coming soon! We'll be adding engagement photos and other
              special moments as we get closer to the big day.
            </Text>
          </Box>
        </SlideUp>
        </VStack>
      </Container>
    </Box>
  )
}

export default Photos
