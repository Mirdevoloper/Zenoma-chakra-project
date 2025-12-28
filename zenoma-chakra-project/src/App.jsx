import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from './Component/Header/Header'
import Section from './Component/Section/Section'
import Secondsection from './Component/Secondsection/Secondsection'
import Thirdsection from './Component/Thirdsection/Thirdsection'
import { Forthsection } from './Component/forthsection/Forthsection'
import Fifthsection from './Component/Fifthsection/Fifthsection'
import Sixsection from './Component/Sixsection/Sixsection'
import Navbar from './Component/Navbar/Navbar'





const App = () => {

  return (

    <div>

      <Navbar />
      <Header />

      <Section />
      <Secondsection />
      <Thirdsection />
      <Forthsection />
      <Fifthsection />
      <Sixsection />



    </div>
  )
}

export default App