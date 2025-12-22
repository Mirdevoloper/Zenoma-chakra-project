import { Box, Button, Container, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'

import React from 'react'
import jimimg from './../../../public/image/jimimg.png'

const Header = () => {


  return (
    <Container>
      <Box maxW={{base:'500px', md:'800px',lg:'100%'}} m='0px auto'>
        <Flex justifyContent={'space-between'} flexDirection={{base:'column', md:'row', lg:'row'}} >
          <Box w='300px' h='120px' p='20px'>
            <Heading fontSize={'30px'} lineHeight={'50px'} >Empower Your
              Spirit & Strength</Heading>
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
        <Box w={{base:'280px', md:'900px', lg:'1200px'}}>
          <Image src={jimimg} alt='' />
        </Box>

        <Flex justifyContent={'space-between'} gap={'6'} mt='30px' flexDirection={{base:'column', md:'row', lg:'row'}}>
          <Flex w={{base:'300px', md:'300px', lg:'300px'}} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'} borderRadius={'10px'}>
            <Text fon tSize={'22px'} >250+</Text>
            <Text fontSize={'12px'} p='8px 4px'>Built on Client Trust</Text>
          </Flex>
          <Flex w={{base:'300px', md:'300px', lg:'300px'}} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'}  borderRadius={'10px'}>
            <Text fontSize={'22px'} >250+</Text>
            <Text fontSize={'12px'} p='8px 4px'>Built on Client Trust</Text>
          </Flex>
          <Flex w={{base:'300px', md:'300px', lg:'300px'}} h='80px' bg='#F9EFF4' p={'50px 40px'} color={'#B12468'}  borderRadius={'10px'}>
            <Text fontSize={'22px'} >4.9*</Text>
            <Text fontSize={'12px'} p='8px 4px'>Built on Client Trust</Text>
          </Flex>
        </Flex>

      </Box>


    </Container>
  )
}

export default Header