import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

let Accomplishments = () => {
    return (
        <Container>
            <Row>
                <div className="what-i-do-title-wrapper">
                    <h3>
                        Contact Me
                    </h3>
                </div>
            </Row>
            <Row>
                <Col>
                    <div classname="hero-right-wrapper">
                        <img src="https://i.imgur.com/mnSwZ7N.jpg"/>
                    </div>
                </Col>
                <Col>
                    <div classname="hero-right-wrapper">
                        <img src="https://i.imgur.com/mnSwZ7N.jpg"/>
                    </div>
                </Col>
                <Col>
                    <div classname="hero-right-wrapper">
                        <img src="https://i.imgur.com/mnSwZ7N.jpg"/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Accomplishments;