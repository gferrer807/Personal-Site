import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import image from '../assets/undraw_programming_2svr.svg'

let AboutMe = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div classname="aboutme-left-wrapper">
                        <img src={image} className="aboutMe-image"/>
                    </div>
                </Col>
                <Col>
                    <div className="aboutme-right-wrapper">
                        <h3>
                            Who Am I
                        </h3>
                        <p>
                            My name is Giancarlo, a Software Engineer
                            based in NYC. I've worked for companies big
                            and small and actually run my own, Casa Kota.
                            <br>
                            </br>
                            I'm always thinking of what to build next
                            and love creating new pieces of software.
                            <br>
                            </br>
                            Outside of programming, I love lifting, jiu-jitsu
                            traveling, skateboarding and good food. Mexican,
                            Japanese and Thai cuisines are my faves.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;