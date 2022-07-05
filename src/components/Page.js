import { Box } from 'grommet'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Page = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Box>{props.children}</Box>
            <Footer></Footer>
        </>
    )
}

export default Page