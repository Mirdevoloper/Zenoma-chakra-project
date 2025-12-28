import { Box, Button, Flex, Heading, Link, Menu, Text, Portal, IconButton, Image, Container } from '@chakra-ui/react'
import React from 'react'
import { Links } from 'react-router'
import { IoReorderThree } from "react-icons/io5";
import logolip from './../../../public/image/logolif.png'

const Navbar = () => {

    const listItems = [

        { title: 'Home', value: 'home' },     
        { title: 'Service', Contact: 'service' },
        { title: 'Pricing', value: 'pricing' },
    ]

    return (

<Container w='100%'>

        <Box w='1200px' m='0px auto'>

            <Flex          
                background="#F9EFF4"                
                p="16px"             
                justifyContent="space-between"
                alignItems="center"
                display={{ base: "none", md: "none", lg: "flex" }}
            >
                <Box pl='50px'>
                    <Image src={logolip} alt=''/>
                </Box>
                <Flex >
                    <Flex >
                        {
                            listItems.map(item => {
                                return (

                                    <Link >
                                        <Text  padding={'5px'} fontWeight={'bold'} color={'#253822'} _hover={{ bg: "#DE7D47" }}>{item.title}</Text>
                                    </Link>

                                )
                            })
                        }
                    </Flex>
                   

                </Flex>

            </Flex>

            <Box
                background="#F9EFF4"
                width="100%"
                
                py="16px"
                px={1}
                justifyContent="space-between"
                alignItems="center"
                display={{ base: "flex", md: "flex", lg: "none" }}
            >
                 <Image src={logolip} alt=''/>
                <Box>
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <IconButton variant="plain" size="md" margin={0} background="#F9EFF4" >
                                <IoReorderThree />
                            </IconButton>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    {
                                        listItems.map(item => {
                                            return (
                                                <Menu.Item value={item.value}>{item.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </Box>
            </Box>

        </Box>


</Container>
        
    )
}

export default Navbar
