import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import hudipic from './../../../public/image/manhudi.png'
const Secondsection = () => {


    return (

        <Container >
            <Box w='1000px'  m='0px auto'>
                <Box w='500px' m='0px auto'>
                    <Box textAlign={'center'} m='30px'>
                        <Button borderRadius={'20px'} bg='#FFE6F2' color='#B12468'>Testimonial</Button>
                    </Box>
                    <Box textAlign={'center'}>
                        <Heading p='12px 0px'>Our Expert Team</Heading>
                        <Text >Meet our dedicated team of certified trainers, coaches, and wellness experts committed to guiding you toward a healthier, balanced life.</Text>
                    </Box>
                </Box>

              

                    <Flex  flexDirection={{ base: 'column', md: 'row', lg: 'row' }} gap='4'>

                        <Image src={hudipic} alt=''mt='20px' />
                        <Image src={hudipic} alt='' mt='20px' />
                        <Image src={hudipic} alt=' 'mt='20px' />
                        <Image src={hudipic} alt=' 'mt='20px' />
                    </Flex>






                
            </Box>
        </Container>
    )
}

export default Secondsection