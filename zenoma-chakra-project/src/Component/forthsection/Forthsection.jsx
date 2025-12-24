import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Forthsection = () => {

    return (


        <Container>
            <Box>

                <Box w='550px' m='0px auto' pt='50px'>

                    <Box textAlign={'center'}>
                        <Heading pb='20px'>Flexible Plans</Heading>
                        <Text>Choose from a variety of adaptable plans designed to fit your unique lifestyle, goals, and schedule—making wellness easy and achievable.</Text>
                    </Box>
                </Box>

                <Flex gap={{ base: '4', md: '6', lg: '6' }} w='100%' p='0px 100px 0px 50px' flexDirection={{ base: 'column', md: 'row', row: 'row' }}>
                    <Box pt='50px' >
                        <Box w='100%' bg='#F9EFF4' borderRadius={'10px'} textAlign={'center'} p='30px'>
                            <Text fontSize={'28px'} >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#B12468' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px'>Per User, Per Month</Text>
                            <Button p='0px 120px' m='20px 0px' bg='#B12468' borderRadius={'20px'}>Contact</Button>
                            <Text p='4px'>4 yoga classes per month</Text>
                            <Text p='4px'>2 fitness training sessions per month</Text>
                            <Text p='4px'>Access to online resources</Text>
                            <Text p='4px'>Full-Body Engagement</Text>
                            <Text p={'px'}>Weekly wellness newsletter</Text>
                        </Box>
                    </Box>
                    <Box pt='50px' >
                        <Box w='100%' bg='#B12468' borderRadius={'10px'} textAlign={'center'} p='30px '>
                            <Text fontSize={'28px'} color='#F9EFF4' >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#F9EFF4' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px' color='#F9EFF4'>Per User, Per Month</Text>
                            <Button p='0px 120px' color='#000' m='20px 0px' bg='#F9EFF4' borderRadius={'20px'}>Contact</Button>

                            <Text p='4px' color='#F9EFF4'>4 yoga classes per month</Text>
                            <Text p='4px' color='#F9EFF4'>2 fitness training sessions per month</Text>
                            <Text p='4px' color='#F9EFF4'>Access to online resources</Text>
                            <Text p='4px' color='#F9EFF4'>Full-Body Engagement</Text>
                            <Text p={'px'}color='#F9EFF4'>Weekly wellness newsletter</Text>

                        </Box>
                    </Box>
                    <Box pt='50px' >
                        <Box w='100%' bg='#F9EFF4' borderRadius={'10px'} textAlign={'center'} p='30px'>
                            <Text fontSize={'28px'} >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#B12468' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px'>Per User, Per Month</Text>
                            <Button p='0px 120px' m='20px 0px' bg='#B12468' borderRadius={'20px'}>Contact</Button>
                            <Text p='4px'>4 yoga classes per month</Text>
                            <Text p='4px'>2 fitness training sessions per month</Text>
                            <Text p='4px'>Access to online resources</Text>
                            <Text p='4px'>Full-Body Engagement</Text>
                            <Text p={'px'}>Weekly wellness newsletter</Text>
                        </Box>
                    </Box>
                </Flex>

            </Box>
        </Container>
    )
}


