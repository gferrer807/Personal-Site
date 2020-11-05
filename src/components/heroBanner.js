import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { AiOutlineMail, AiOutlineNumber } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im';

let HeroBanner = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="hero-left-wrapper">
                        <div className="hero-blurb">
                            <h6>My Name is What?</h6>
                        </div>
                        <div className="hero-header-and-name">
                            <h3 className="my-name">
                                Giancarlo Ferrer
                            </h3>
                            <h5 className="my-profession">
                                Software Engineer & Entreupenuer
                            </h5>
                        </div>
                        <div className="hero-contact-info">
                            <p><AiOutlineMail/>ferrergiancarlo@gmail.com</p>
                            <p><AiOutlineNumber/>2013905648</p>
                            <p><ImLocation/>Based in the NYC Area</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="hero-right-wrapper">
                        <img 
                        className="hero-image"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQH4f_jJgrmrlA/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=1x7vn3UOzRlbLGIVeDBe4kEUeiba-UXftAg5VcXFFZk"/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroBanner;