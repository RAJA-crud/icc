import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './ForumPostTable.css'

const ForumPostTable = () => {
    return (
        <Container fluid className="ForumPostTable_Container">
            <Row>
                <Col md={12}>
                    <Card className="table_card">
                        <div className="content_wrapper">
                            <Col md={12}>
                                <div className="sub_title">Category title</div>
                                <div className="main_title">
                                    Recent forum posts
                                </div>
                            </Col>
                            <Col md={12}>
                                <Card className="table_wrapper"></Card>
                            </Col>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ForumPostTable
