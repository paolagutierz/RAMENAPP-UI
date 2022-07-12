import React from "react";
import {
  Heading,
  Box,
  Button,
  Paragraph,
  Image,
  Text,
  TextInput,
} from "grommet";
import { useHistory } from "react-router";

const Product = ({ image, name, price, description, quantity, id }) => {
  const history = useHistory();
  const handleRedirect = (e, path) => {
    e.preventDefault();
    history.push(path);
  };
  return (
    <Box
      pad="medium"
      margin="medium"
      align="center"
      background="dark-3"
      round
      gap="small">
      <Image fit="cover" src={image} />
      <Heading level={4} size="small">
        {name}
      </Heading>
      <Text size="small">{price}</Text>
      <TextInput value={quantity} onChange={}/>
      <Paragraph size="small">{description}</Paragraph>
      <Button label="AÑADIR" onClick={(e) => {}} />
    </Box>
  );
};

export default Product;
