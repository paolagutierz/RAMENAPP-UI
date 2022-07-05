import React from 'react'
import { Box, Tab, Tabs } from 'grommet';
import { Currency, HomeRounded, Notification, User } from 'grommet-icons';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const goTo = (url) => {
        navigate(url)
    }

    return (
        <Box align="center" pad="medium">
            <Tabs>
                <Tab title="General" icon={<HomeRounded />} onClick={() => goTo("/")}>
                </Tab>
                <Tab title="Account" icon={<User />} onClick={() => goTo("/about")}>
                </Tab>
                <Tab title="Billing" icon={<Currency />}>
                </Tab>
                <Tab title="Notifications" icon={<Notification />}>
                </Tab>
            </Tabs>
        </Box>
    )
}

export default Navbar