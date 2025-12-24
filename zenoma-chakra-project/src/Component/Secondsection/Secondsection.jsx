import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import hudipic from './../../../public/image/manhudi.png'
const Secondsection = () => {


    return (

        <Container >
            <Box>
                <Box w='450px' m='0px auto'>
                    <Box textAlign={'center'} mt='40px'>
                        <Button borderRadius={'20px'} bg='#FFE6F2' color='#B12468'>Testimonial</Button>
                    </Box>
                    <Box textAlign={'center'}>
                        <Heading>Our Expert Team</Heading>
                        <Text>Meet our dedicated team of certified trainers, coaches, and wellness experts committed to guiding you toward a healthier, balanced life.</Text>
                    </Box>
                </Box>

                <Flex    >

                    <Flex m='0px auto' flexDirection={{ base: 'column', md: 'row', lg: 'row' }} gap={{base:'4px', md:'4'}}>

                        <Image src={hudipic} alt='' w={{ base: '400px', md: '300px', lg: '270px' }} mt='20px'/>
                        <Image src={hudipic} alt='' w={{ base: '400px', md: '300px', lg: '270px' }} mt='20px'/>
                        <Image src={hudipic} alt='' w={{ base: '400px', md: '300px', lg: '270px' }} mt='20px'/>
                        <Image src={hudipic} alt='' w={{ base: '400px', md: '300px', lg: '270px' }} mt='20px'/>
                    </Flex>






                </Flex>
            </Box>
        </Container>
    )
}

export default Secondsection