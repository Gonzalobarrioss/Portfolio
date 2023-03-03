import React from "react";

import { Container, Box, Content, H2, P, Link } from "./CardOneElements";

const CardOne = () => {
  return (
    <Container>
      <Box>
        <span></span>
        <Content className="content">
          <H2>Card One</H2>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </P>
          <Link href="#">Read More</Link>
        </Content>
      </Box>
    </Container>
  );
};

export default CardOne;
