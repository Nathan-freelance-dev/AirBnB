import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import './card.scss'
import Woman from '../../assets/images/image 12.png'

const CardData = () => {
     return (
          <Container className='mt-4'>
               <h1>Onlie Experiences</h1>

               <p className='text-muted text_w-50'>
                    Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.
               </p>

               <Row className='mt-4 mb-5'>
                    <Col md={4}>
                         <Card className='rounded rounded-3 border-0'>
                              <Card.Img variant="top" src={Woman} />
                              <Card.Body className='p-0 mt-4'>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                   </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                         </Card>
                    </Col>

                    <Col md={4}>
                         <Card className='rounded rounded-3 border-0'>
                              <Card.Img variant="top" src={Woman} />
                              <Card.Body className='p-0 mt-4'>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                   </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                         </Card>
                    </Col>

                    <Col md={4}>
                         <Card className='rounded rounded-3 border-0'>
                              <Card.Img variant="top" src={Woman} />
                              <Card.Body className='p-0 mt-4'>
                                   <Card.Title>Card Title</Card.Title>
                                   <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                   </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                         </Card>
                    </Col>
                    
               </Row>
          </Container>
     )
}

export default CardData