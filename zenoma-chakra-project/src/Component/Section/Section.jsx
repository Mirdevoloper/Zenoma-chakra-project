import { Box, Button, Container, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { WiDirectionRight } from "react-icons/wi";
import curtun from './../../../public/image/Vector.png'
import jukar from './../../../public/image/Vectorman.png'
import ludosix from './../../../public/image/sixludo.png'

const Section = () => {

    return (

        <Container>
            <Box w='1000px'   >
                <Box m={{base: '0px auto', md: '0px', lg: '0px' }} w='350px' h='320px' p='30px' >
                    <Box >
                        <Button bg='#FFE6F2' color='#B12468' borderRadius={'20px'} m='30px 0px 20px 0px' >Our Service</Button>
                        <Heading lineHeight={'35px'}
                            fontSize={'30px'} >Flow, Focus, and Flourish</Heading>
                        <Text p='20px 0px'>Discover your true potential by embracing mindfulness, strength, and balance every day.</Text>
                    </Box>

                    <Flex gap='6' >
                        <Button bg='#B12468' color={'#FFFFFF'} borderRadius={'20px'}>Join Member <WiDirectionRight /></Button>
                        <Button bg='#F9EFF4' color={'#2D1420'} borderRadius={'20px'}>All Classes</Button>
                    </Flex>
                </Box>

                <Flex gap='6' alignItems='center' flexDirection={{ base: 'column', md: 'row', lg: 'row' }} alignContent={{ base: 'center' }} >
                    <Box w={'100%'} bg='#F9EFF4' mt="60px">
                        <Box p='30px 0px 0px 20px'>
                            <Image src={curtun} alt='' />
                        </Box>

                        <Box m='30px 0px 0px 0px'>
                            <Heading p='20px'>Calm Core</Heading>
                            <Text p='10px 20px' fontSize={'18px'}>Strengthen your core with mindful exercises that enhance stability, improve posture, and promote inner calm for a balanced body and peaceful mind.</Text>

                            <Flex p='20px'>
                                <Text color={'#B12468'} fontSize={'18px'} >Join Classes </Text>
                                <Icon size="lg" color="pink.700" >
                                    <WiDirectionRight />
                                </Icon>
                            </Flex>
                        </Box>
                    </Box>

                    <Box w={'100%'} bg='#F9EFF4' mt="30px">
                        <Box p='30px 0px 0px 20px' >
                            <Image src={curtun} alt='' />
                        </Box>

                        <Box m='60px 0px 0px 0px'>
                            <Heading p='20px'>Calm Core</Heading>
                            <Text p='10px 20px' fontSize={'18px'}>Strengthen your core with mindful exercises that enhance stability, improve posture, and promote inner calm for a balanced body and peaceful mind.</Text>

                            <Flex p='20px'>
                                <Text color={'#B12468'} fontSize={'18px'} >Join Classes </Text>
                                <Icon size="lg" color="pink.700" >
                                    <WiDirectionRight />
                                </Icon>
                            </Flex>
                        </Box>
                    </Box>

                    <Box w={'100%'} bg='#F9EFF4' >
                        <Box p='30px 0px 0px 20px'>
                            <Image src={jukar} alt='' />
                        </Box>
                        <Box m='100px 0px 0px 0px'>
                            <Heading p='20px '>Calm Core</Heading>
                            <Text p='10px 20px' fontSize={'18px'}>Strengthen your core with mindful exercises that enhance stability, improve posture, and promote inner calm for a balanced body and peaceful mind.</Text>

                            <Flex p='20px'>
                                <Text color={'#B12468'} fontSize={'18px'} >Join Classes  <WiDirectionRight /></Text>
                                <Icon size="lg" color="pink.700" >
                                    <WiDirectionRight />
                                </Icon>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>


                <Flex justifyContent={'center'}>
                    <Flex bg='#B12468' alignItems={'center'} borderRadius={'10px'} w='100%' justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} mt='40px'>

                        <Flex color='#fff' flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
                            <Flex alignItems={'center'} p='20px' justifyContent={{base:'center', md:'', lg:''}}>
                                <Image src={ludosix} alt='' />
                            </Flex>
                            <Box p='20px'>
                                <Heading m='12px 0px'>Personalized Plan for You</Heading>
                                <Text>Get a personalized fitness and wellness plan tailored to your goals, lifestyle, and pace for lasting results.</Text>
                            </Box>
                        </Flex>

                        <Flex alignItems={'center'} m={{ base: '12px', md: '0px', lg: '0px' }} color='#fff' >
                            <Button bg='#B12468'>Get in Touch <WiDirectionRight /></Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}

export default Section