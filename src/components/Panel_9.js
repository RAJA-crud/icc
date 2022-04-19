import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Panel_9_Card from './Panel_9_Card'
import './Panel_9_Card.css'

const Panel_9 = () => {
    return (
        <Container>
            <Row className="Panel_9_Card_Container">
                <Panel_9_Card btn={false} />
                <Panel_9_Card btn={true} />
            </Row>
        </Container>
    )
}

export default Panel_9
