import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Forthsection = () => {

    return (


        <Container>

            <Box w='1000px'>

                <Box w='500px' m='0px auto' pt='50px' textAlign={'center'} p='30px' >
                   
                        <Heading pb='20px'>Flexible Plans</Heading>
                        <Text>Choose from a variety of adaptable plans designed to fit your unique lifestyle, goals, and schedule—making wellness easy and achievable.</Text>
                 
                </Box>

                <Flex  gap='12'  p='' flexDirection={{ base: 'column', md: 'row', row: 'row' }}  >
                                                              
                        <Box  bg='#F9EFF4' borderRadius={'10px'} textAlign={'center'} p='20px'>
                            <Text fontSize={'28px'} >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#B12468' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px'>Per User, Per Month</Text>
                            <Button p='0px 120px' bg='#B12468' m='20px 0px' borderRadius={'20px'}>Contact</Button>
                            <Text p='4px'>4 yoga classes per month</Text>
                            <Text p='4px'>2 fitness training sessions per month</Text>
                            <Text p='4px'>Access to online resources</Text>
                            <Text p='4px'>Full-Body Engagement</Text>
                            <Text p={'4px'}>Weekly wellness newsletter</Text>
                        </Box>
                               

                        <Box  bg='#B12468' borderRadius={'10px'} textAlign={'center'} p='20px '>
                            <Text fontSize={'28px'} color='#F9EFF4' >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#F9EFF4' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px' color='#F9EFF4'>Per User, Per Month</Text>
                            <Button p='0px 120px' color='#000' m='20px 0px' bg='#F9EFF4' borderRadius={'20px'}>Contact</Button>
                            <Text p='4px' color='#F9EFF4'>4 yoga classes per month</Text>
                            <Text p='4px' color='#F9EFF4'>2 fitness training sessions per month</Text>
                            <Text p='4px' color='#F9EFF4'>Access to online resources</Text>
                            <Text p='4px' color='#F9EFF4'>Full-Body Engagement</Text>
                            <Text p={'4px'}color='#F9EFF4'>Weekly wellness newsletter</Text>
                        </Box>
                   
                  
                        <Box  bg='#F9EFF4' borderRadius={'10px'} textAlign={'center'} p='20px'>
                            <Text fontSize={'28px'} >Starter Plan</Text>
                            <Heading fontSize={'40px'} color='#B12468' p='20px 0px'>$14</Heading>
                            <Text p='12px 0px'>Per User, Per Month</Text>
                            <Button p='0px 120px' m='20px 0px' bg='#B12468' borderRadius={'20px'}>Contact</Button>
                            <Text p='4px'>4 yoga classes per month</Text>
                            <Text p='4px'>2 fitness training sessions per month</Text>
                            <Text p='4px'>Access to online resources</Text>
                            <Text p='4px'>Full-Body Engagement</Text>
                            <Text p={'4px'}>Weekly wellness newsletter</Text>
                        </Box>
                  
                </Flex>

            </Box>
        </Container>
    )
}


