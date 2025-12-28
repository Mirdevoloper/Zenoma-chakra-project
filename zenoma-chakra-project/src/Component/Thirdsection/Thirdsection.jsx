import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import jim from './../../../public/image/jim.png'
const Thirdsection = () => {
   
    return (


        <Container w={{base:'100%', md:'100%', lg:'100%'}}>
            <Box w='1200px' m='0px auto'  p={{base:'20px 30px'}}>

                <Box w='400px' m='0px auto'>
                    <Box textAlign={'center'} m='30px 0px'>
                        <Button borderRadius={'20px'} bg='#FFE6F2' color='#B12468'>Testimonial</Button>
                    </Box>
                    <Box textAlign={'center'}>
                        <Heading>Reviews From Clients</Heading>
                       
                        <Text>Hear directly from our clients about their transformative journeys and how our yoga and fitness programs have impacted their lives.</Text>
                    </Box>
                </Box>


                <Flex pt='40px' justifyContent={'space-between'} alignItems={'center'} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} >

                    <Box  >
                        <Image src={jim} alt='' />
                    </Box>

                    < Box bg='#fff' p={{base:'30px 0px'}}  w='300px'>
                        <Text fontSize={'16px'}>
                            “Joining the program transformed my life—stronger body, clearer mind, and a calm spirit. Highly recommend to anyone seeking balance.”
                        </Text>

                        <Box p='20px 0px'>
                            <Text >Niko Willum</Text>
                            <Text fontSize={'12px'}>Participants</Text>

                        </Box>
                    </Box>

                </Flex>


            </Box>
        </Container>
    )
}

export default Thirdsection