import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import stand from './../../../public/image/stand.png'
const Sixsection = () => {

    return (

        <Container p='40px 0px'>
            <Box w={{base:'600px', md:'900px',lg:'1000px'}} bg='#F9EFF4' m='0px auto' borderRadius={'20px'}>

                <Flex justifyContent={'space-around'} flexDirection={{base:'column', md:'row', lg:'row'}} alignItems={'center'}>
                    <Box w='400px' pt='50px' >
                        <Heading fontSize={'32px'} lineHeight={1.5}>
                            35% off Fitness Classes This Summer with Zenoma
                        </Heading>
                        <Text p='50px 0px'>
                            Take advantage of our limited-time summer offer! Get 35% off on all fitness classes and start your journey to a healthier, stronger, and more energized you today.

                        </Text>
                        <Button bg='#B12468' borderRadius={'20px'}>Join Member</Button>
                    </Box>
                    <Box w='400px' p={{base:'50px 50px 0px 0px', md:'', lg:''}}>
                        <Image src={stand} alt='' />
                    </Box>

                </Flex>

            </Box>
        </Container>

    )
}

export default Sixsection