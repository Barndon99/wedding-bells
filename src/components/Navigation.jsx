import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'RSVP', path: '/rsvp' },
  { name: 'Photos', path: '/photos' },
  { name: 'Song Requests', path: '/song-requests' },
  { name: 'Location', path: '/location' }
]

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  const NavLink = ({ children, to, ...props }) => {
    const isActive = location.pathname === to

    return (
      <Link
        as={RouterLink}
        to={to}
        px={2}
        py={1}
        rounded="md"
        color={isActive ? '#1B4D3E' : 'gray.600'}
        fontWeight={isActive ? 'bold' : 'normal'}
        _hover={{
          textDecoration: 'none',
          color: '#1B4D3E',
        }}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <Box bg="white" px={4} shadow="sm" position="sticky" top={0} zIndex={1000}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as={RouterLink} to="/" size="md" color="#1B4D3E" _hover={{ textDecoration: 'none' }}>
          Katarina & Graham
        </Heading>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <IconButton
          size="md"
          icon={<span>☰</span>}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
          variant="ghost"
        />
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Heading size="md" color="#1B4D3E">
              Katarina & Graham
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" mt={4}>
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={onClose}>
                  {item.name}
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navigation
