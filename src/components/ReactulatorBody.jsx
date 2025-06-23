import React from "react";
import { Container, Row, Col, Spacer, Button, Input } from "@nextui-org/react";

/*eslint-disable no-eval */
const FS26 = {
  fontSize: "26pt",
  minWidth: "66px",
};

const autoWidth = {
  width: "auto",
};

const theFlexibus = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const Ops = {
  DIVISIONE: "÷",
  MOLTIPLICAZIONE: "x",
  SOTTRAZIONE: "-",
  ADDIZIONE: "+",
  UGUALE: "=",
};

const ReactulatorBody = () => {
  const [calc, setCalc] = React.useState("");
  const [result, setResult] = React.useState("");

  const ops = ["/", "*", "-", "+", "."];

  const reset = () => {
    setResult("");
    setCalc("");
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const squareRoot = () => {
    setCalc(Math.sqrt(eval(calc)).toString());
    setResult(Math.sqrt(eval(calc)).toString());
  };

  const deleteLast = () => {
    if (calc === "" || calc === "NaN" || calc === "Infinity") {
      reset();
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <>
      <Spacer y={3} />
      <Container
        gap={0}
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            // border: "1px solid white",
            boxShadow: "3px 3px 0px white",
            display: "inline-block",
            padding: "20px",
            borderRadius: "25px",
          }}
        >
          <Row gap={1} style={theFlexibus}>
            <Col>
              <Input
                size="xl"
                placeholder="0"
                style={{ width: "304px" }}
                value={calc === "NaN" ? "Error" : calc || "0"}
                readOnly
              />
            </Col>
          </Row>
          <Row
            gap={1}
            style={{
              ...theFlexibus,
              textAlign: "right",
              paddingRight: "20px",
              marginTop: "5px",
            }}
          >
            <Col>
              <span style={{ color: "white" }}>
                {result === "NaN" ? "Error" : result || "0"}
              </span>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} style={theFlexibus}>
            <Col style={autoWidth}>
              <Button
                rounded
                color="error"
                size="xl"
                style={{ ...FS26, fontSize: "20pt", width: "154px" }}
                onClick={deleteLast}
              >
                {result === "" ? "AC" : "C"}
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={{ ...FS26, fontSize: "18pt" }}
                onClick={squareRoot}
              >
                √x
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("/")}
              >
                {Ops.DIVISIONE}
              </Button>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} style={theFlexibus}>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("7")}
              >
                7
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("8")}
              >
                8
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("9")}
              >
                9
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("*")}
              >
                {Ops.MOLTIPLICAZIONE}
              </Button>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} style={theFlexibus}>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("4")}
              >
                4
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("5")}
              >
                5
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("6")}
              >
                6
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("-")}
              >
                {Ops.SOTTRAZIONE}
              </Button>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} style={theFlexibus}>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("1")}
              >
                1
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("2")}
              >
                2
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("3")}
              >
                3
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={FS26}
                onClick={() => updateCalc("+")}
              >
                {Ops.ADDIZIONE}
              </Button>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1} style={theFlexibus}>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={{ ...FS26, width: "154px" }}
                onClick={() => updateCalc("0")}
              >
                0
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="primary"
                size="xl"
                style={FS26}
                onClick={() => updateCalc(".")}
              >
                ,
              </Button>
            </Col>
            <Col style={autoWidth}>
              <Button
                rounded
                color="warning"
                size="xl"
                style={FS26}
                onClick={calculate}
              >
                {Ops.UGUALE}
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ReactulatorBody;
