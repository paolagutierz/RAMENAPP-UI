import React, { useContext } from "react";
import { Box, Card, Grid, ResponsiveContext, Text } from "grommet";

const cards = Array(3)
  .fill()
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const ProductCard = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box pad="large" direction="row">
      <Grid columns={size !== "small" ? "small" : "100%"} gap="small">
        {cards.map((card, index) => (
          <Card pad="large" key={index}>
            {card}
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
