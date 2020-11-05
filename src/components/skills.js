import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import SkillBar from 'react-skillbars';

let Skills = () => {

    let skillData = [
        {
          "type": "Node",
          "level": 100
        },
        {
          "type": "APIs",
          "level": 90
        },
        {
          "type": "MySQL",
          "level": 70
        },
        {
          "type": "NoSQL",
          "level": 70
        },
        {
          "type": "React",
          "level": 75
        },
        {
          "type": "AWS",
          "level": 75
        },
        {
          "type": "Python",
          "level": 60
        }
      ]

      let skillData2 = [
        {
            "type": "Javascript",
            "level": 90
        },
        {
          "type": "Serverless",
          "level": 90
        },
        {
            "type": "HTML",
            "level": 85
        },
        {
            "type": "CSS",
            "level": 80
        },
        {
            "type": "GraphQL",
            "level": 75
        },
        {
          "type": "ElasticSearch",
          "level": 70
        },
        {
          "type": "GCS",
          "level": 50
        }
      ];
      

      let colors = {
        bar: '#2196f3',
        title: {
          background: '#fff',
          text: '#000'
        }
      }
    return (
        <Container>
            <Row>
                <Col>
                    <SkillBar skills={skillData} colors={colors}/>
                </Col>
                <Col>
                    <SkillBar skills={skillData2} colors={colors}/>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    )
}

export default Skills;