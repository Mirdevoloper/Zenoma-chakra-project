import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import jim from './../../../public/image/jim.png'
const Thirdsection = () => {

    return (


        <Container>
            <Box>

                <Box w='450px' m='0px auto'>
                    <Box textAlign={'center'} mt='40px'>
                        <Button borderRadius={'20px'} bg='#FFE6F2' color='#B12468'>Testimonial</Button>
                    </Box>
                    <Box textAlign={'center'}>
                        <Heading>Reviews From Clients</Heading>
                        <Text>Hear directly from our clients about their transformative journeys and how our yoga and fitness programs have impacted their lives.</Text>
                    </Box>
                </Box>

                <Box  >
                    <Flex  p={{base:'0px 0px 0px 50px', md:'30px 0px 0px 0px', lg:'30px 0px 0px 0px'}} w='900px' pt='40px' m='0px auto' justifyContent={'space-around'}  flexDirection={{ base: 'column', md: 'row', lg: 'row' }} >

                        <Box w='420px' >
                            <Image src={jim} alt='' />
                        </Box>

                        <Box w='380px' bg='#fff'>
                            <Text fontSize={'24px'} mt='50px'>
                                “Joining the program transformed my life—stronger body, clearer mind, and a calm spirit. Highly recommend to anyone seeking balance.”
                            </Text>
                            <Box mt='30px'>
                                <Text>Niko Willum</Text>
                               <Text fontSize={'12px'}>Participants</Text>
                            </Box>
                        </Box>

                    </Flex>
                </Box>

            </Box>
        </Container>
    )
}

export default Thirdsection