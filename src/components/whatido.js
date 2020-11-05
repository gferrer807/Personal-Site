import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { FaCode, FaServer } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

let WhatIDo = () => {
    return (
        <Container>
            <Row>
                <div className="what-i-do-title-wrapper">
                    <h3>
                        My Specializations
                    </h3>
                </div>
            </Row>
            <Row>
                <Col>
                    <div classname="what-i-do-card">
                        <FaCode className="what-i-do-icon"/>
                        <h3>
                            Web Development
                        </h3>
                        <p>
                            I make applications, not just pages.
                            My goal is to make sure that functionality,
                            is interwoven to the design, while never
                            ignoring conversion rates, or speed.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div classname="what-i-do-card">
                        <FaServer className="what-i-do-icon"/>
                        <h3>
                            Backend Development
                        </h3>
                        <p>
                            Backend is my bread and butter. I love 
                            building servers and APIs that just work.
                            If I can make a front-end dev's life easier,
                            that brings me joy.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div classname="what-i-do-card">
                        <SiShopify className="what-i-do-icon"/>
                        <h3>
                            Shopify Development
                        </h3>
                        <p>
                            E-commerce is not the next big thing, it is
                            the big thing. It's here and my goal is to
                            build stores that sell and make money for clients.
                            If you're interested in that check out Casa Kota.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhatIDo;