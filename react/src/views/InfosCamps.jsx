import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function InfosCamps() {
  return (
    <div>
        <h3 className="text-center">
            Infos camps
        </h3>
        <Row className='align-items-center text-center' style={{ height:'250px', background:'#25632d', color:'white' }}>
            <Col>
                Infos générales sur les camps
            </Col>
        </Row>
    </div>
  )
}
