import { Box, Button, Container, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'

import React from 'react'
import jimimg from './../../../public/image/jimimg.png'

const Header = () => {


  return (
    <Container >
      <Box w='1000px'>

        <Flex alignItems={'center'} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} >

          <Box w='400px' h='120px' p='20px' >
            <Heading fontSize={'40px'} lineHeight={'50px'}>
              Empower Your
              Spirit & Strength
            </Heading>
          </Box>

          <Flex w='400px' h='150px' flexDirection={'column'}>

            <Text p='20px 25px'>
              Discover balance and strength through our complete yoga and wellness programs.
            </Text>

            <Flex gap={'4'} ml='20px'>
              <Button bg='#B12468' color={'#FFFFFF'} borderRadius={'20px'}>Join Member</Button>
              <Button bg='#F9EFF4' color={'#2D1420'} borderRadius={'20px'}>Start for Free</Button>
            </Flex>

          </Flex>

        </Flex>


        <Box >
          <Image src={jimimg} alt='' />
        </Box>

        <Flex alignItems={'center'} justifyContent={'space-between'} gap={'6'} mt='30px' flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
          <Flex w={'100%'} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'} borderRadius={'10px'} alignItems={'center'} >
            <Flex m='0px auto'>
              <Text fontSize={'22px'}  >250+</Text>
              <Text fontSize={'16px'} p='8px 4px' >Built on Client Trust</Text>
            </Flex>
          </Flex>
          <Flex w={'100%'} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'} borderRadius={'10px'} alignItems={'center'}>
            <Flex m='0px auto'>
              <Text fontSize={'22px'}  >250+</Text>
              <Text fontSize={'16px'} p='8px 4px' >Built on Client Trust</Text>
            </Flex>
          </Flex>
          <Flex w={'100%'} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'} borderRadius={'10px'}alignItems={'center'}>
            <Flex m='0px auto'>
              <Text fontSize={'22px'}  >250+</Text>
              <Text fontSize={'16px'} p='8px 4px' >Built on Client Trust</Text>
            </Flex>
          </Flex>
        </Flex>

      </Box>


    </Container>
  )
}

export default Header