import { Box, Text, HStack, VStack } from '@chakra-ui/react'

function CountdownDisplay({ days, hours, minutes, seconds }) {
  console.log(days, hours, minutes)
  const months = Math.floor(days / 30)
  const remainingDays = days % 30

  const timeSegments = [
    { label: 'months', value: Number(months) },
    { label: 'days', value: Number(remainingDays) },
    { label: 'hours', value: hours },
    { label: 'minutes', value: minutes },
    { label: 'seconds', value: seconds}
  ]

  return (
    <HStack spacing={3} justify="center" align="center">
      {timeSegments.map((segment) => (
        <HStack key={segment.label} spacing={1} align="center">
          <VStack spacing={1}>
            <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="white">
              {String(segment.value).padStart(2, '0')}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="white" textTransform="uppercase">
              {segment.label}
            </Text>
          </VStack>
        </HStack>
      ))}
    </HStack>
  )
}

export default CountdownDisplay