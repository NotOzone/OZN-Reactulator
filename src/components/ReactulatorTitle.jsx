import React from "react";
import { Container, Row, Text, Col, Spacer } from "@nextui-org/react";

const ReactulatorTitle = () => {
  return (
    <>
      <Container gap={0} style={{ width: "100%" }}>
        <Spacer y={1} />
        <Row gap={1}>
          <Col></Col>
          <Col>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                textAlign: "center",
              }}
              weight="bold"
            >
              Reactulator
            </Text>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default ReactulatorTitle;
