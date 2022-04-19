import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Panel_9_Card = ({ btn }) => {
    return (
        <Col md={6} sm={12}>
            <Card
                className={btn ? 'Panel_9_Card second' : 'Panel_9_Card first'}
            >
                <div>Category title</div>
                <div>
                    <div className="info_text">
                        <span>Best 10 players</span>
                        <span>world championship</span>
                        <span>Dubai / 2021</span>
                    </div>
                    <div className="desc">
                        Culpa quis sunt ut sint. Ipsum et pariatur sunt nisi
                        sint cupidatat. Mollit dolor in proident ullamco cillum
                        sit nisi ad minim eu. Eu duis elit amet dolor quis qui
                        ut in.
                    </div>
                </div>
                {btn ? <button>Read more</button> : <span></span>}
            </Card>
        </Col>
    )
}

export default Panel_9_Card
