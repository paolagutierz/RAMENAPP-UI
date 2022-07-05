import React from 'react'
import { Box, Grommet } from 'grommet';
import Page from '../components/Page';

const Home = (props) => {
    return (
        <Page>
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='brand'
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation='medium'
                style={{ zIndex: '1' }}
                {...props}
            />
        </Page>
    )
}

export default Home