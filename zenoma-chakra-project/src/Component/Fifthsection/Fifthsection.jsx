import { Box, Container, Flex, Heading, Image, Text, Field, Input } from '@chakra-ui/react'
import React from 'react'
import sitimg from './../../../public/image/Frame 64.png'
import logolip from './../../../public/image/logolif.png'

const Fifthsection = () => {


    return (

        <Container>
            <Box>
                <Box p='40px 0px' w='100%'>
                    <Image src={sitimg} alt='' />
                </Box>


                <Box p='0px 0px 0px 80px'>
                    <Image src={logolip} alt='' />
                </Box>

                <Flex justifyContent={'space-around'} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} alignItems={'center'} gap='6'>
                    <Box w='400px'>
                        <Text p='16px 0px'>Adressess</Text>

                        <Heading w='200px' p='16px 0px'>
                            224 Agnibina Avenue,
                            Jhenaidah, Dst
                        </Heading>

                        <Field.Root required w='400px'>
                            <Field.Label>
                                Enter Your Email<Field.RequiredIndicator />
                            </Field.Label>
                            <Input placeholder="Eexample@mail.com" />

                        </Field.Root>
                        <Text>
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                        </Text>
                    </Box>


                    <Box>
                        <Text>Navigation</Text>
                        <Heading>About</Heading>
                        <Heading>Classes</Heading>
                        <Heading>Pricing</Heading>
                        <Heading>Contact</Heading>
                    </Box>
                    <Box>
                        <Text>Social Media</Text>
                        <Heading>Facebook</Heading>
                        <Heading>Instagram</Heading>
                        <Heading>Twitter</Heading>
                        <Heading>Linkedin</Heading>
                    </Box>

                </Flex>


            </Box>
        </Container>
    )
}

export default Fifthsection