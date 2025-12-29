import React from 'react'
import { Box, Button, Flex, Heading,  Menu, Text, Portal, IconButton, Image, Container } from '@chakra-ui/react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import logolip from './../../../public/image/logolif.png'
import { Link } from 'react-router'

const Navbar = () => {

    const listItems = [

        { route: '/home', title: 'Home', value: 'home' },     
        { route: '/service', title: 'Service', Contact: 'service' },
        { route: '/pricing', title: 'Pricing', value: 'pricing' },
    ]

    return (

<Container w='100%'>

        <Box w='1200px' m='0px auto' background="#F9EFF4"    >
            <Flex          
                background="#F9EFF4"                
                p="16px"             
                justifyContent='space-evenly'
                alignItems="center"
                display={{ base: "none", md: "none", lg: "flex" }}
            >
                <Box >
                    <Image src={logolip} alt='' />
                </Box>

                <Flex >                   
                    <Flex >
                        {
                            listItems.map(item => {

                                return (
                                  
                                   <Link to={item?.route} m='40px' fontSize={'0px'} >
                                    
                                    
                                    
                                       <Text  padding={'5px'} fontWeight={'bold'} color={'#253822'} _hover={{ bg: "#DE7D47" }}>{item.title}</Text>
                                    </Link>

                                    
                                    
                                )
                            })
                        }
                    </Flex>
                               
                </Flex>

                <Button ml='90px' color={'#2D1420'} bg='#fff'>Contact <Box bg='#B12468' borderRadius={'20px'}><IoIosArrowRoundForward  /></Box> </Button>

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

                 <Image src={logolip} alt=''  ml='20px'/>

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
