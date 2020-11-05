import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { AiOutlineMail, AiOutlineNumber } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im';

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
                        <div className="contact-card-info">
                            <ImLocation className="contact-icon"/>
                            <h3>Location</h3>
                            <p>NYC/NJ Area</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div classname="hero-right-wrapper">
                        <div className="contact-card-info">
                            <AiOutlineMail className="contact-icon"/>
                            <h3>Email</h3>
                            <p>ferrergiancarlo@gmail.com</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div classname="hero-right-wrapper">
                        <AiOutlineMail className="contact-icon"/>
                        <div className="contact-card-info">
                            <h3>Email</h3>
                            <p>ferrergiancarlo@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Accomplishments;