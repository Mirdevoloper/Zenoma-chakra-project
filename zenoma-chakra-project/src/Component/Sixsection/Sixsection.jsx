import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import stand from './../../../public/image/stand.png'
const Sixsection = () => {

    return (

        <Container w={{base:'100%', md:'100%', lg:'100%'}}>


            <Box w='1200px'  m='0px auto'  p={{base:'20px 30px'}}>

                <Box bg='#F9EFF4' m='0px auto' borderRadius={'20px'} >

                    <Flex justifyContent={'space-around'} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} alignItems={'center'}>
                        <Box w='400px' pt='30px' >
                            <Heading fontSize={'32px'} lineHeight={1.5}>
                                35% off Fitness Classes This Summer with Zenoma
                            </Heading>
                            <Text p='50px 0px'>
                                Take advantage of our limited-time summer offer! Get 35% off on all fitness classes and start your journey to a healthier, stronger, and more energized you today.

                            </Text>
                            <Button bg='#B12468' borderRadius={'20px'}>Join Member</Button>
                        </Box>
                        <Box w='400px' p={{ base: '30px 30px 0px 0px', md: '', lg: '' }}>
                            <Image src={stand} alt='' />
                        </Box>

                    </Flex>

                </Box>

            </Box>
        </Container>

    )
}

export default Sixsection