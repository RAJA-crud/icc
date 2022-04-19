import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Panel_8.css";

const Panel_8 = () => {
  return (
    <div>
      <Container fluid>
        <div className="panel_8_container">
          <div className="panel_8_wrapper">
            <div className="panel_8_inner">
              <h2>Lorem ipsum quo...</h2>
              <div className="panel_8_main_title">
                Title Chess world championship
              </div>
              <div className="panel_8_sub_title">
                lorem ipsum dolor,lorem ipsum,lorem ipsum
              </div>
              <p>
                Esse voluptate mollit exercitation aliqua pariatur enim. Eu
                Lorem aliqua eu dolore eiusmod et Lorem aute cillum occaecat
                nisi. Excepteur qui ea eu occaecat enim nisi incididunt. Aliqua
                est id dolor veniam occaecat ullamco cillum.Esse voluptate
                mollit exercitation aliqua pariatur enim. Eu Lorem aliqua eu
                dolore eiusmod et Lorem aute cillum occaecat nisi. Excepteur qui
                ea eu occaecat enim nisi incididunt. Aliqua est id dolor veniam
                occaecat ullamco cillum.
              </p>
              <div className="panel_8_btnContainer">
                <button className="btn_white">Button call to action</button>
                <button className="btn_blue">Button call to action</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Panel_8;
