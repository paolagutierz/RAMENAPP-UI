import Page from "../components/Page";
import React, { useContext } from "react";
import { Box, Card, Grid, ResponsiveContext, Text } from "grommet";

const cards = Array(20)
  .fill()
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const Menu = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Page>
      <Box pad="large" fle>
        <Grid columns={size !== "small" ? "small" : "100%"} gap="small">
          {cards.map((card, index) => (
            <Card pad="large" key={index}>
              {card}
            </Card>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

Menu.storyName = "Responsive cards";

export default Menu;
