import React, { useCallback, useEffect, useRef } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import InfosHotes from './InfosHotes'
import InfosCamps from './InfosCamps'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Fonctionnement from './Fonctionnement'

export default function DevenirHote() {

  const {user, token} = useStateContext()
  const userLocal = JSON.parse(localStorage.getItem('USER'))
  const navigate = useNavigate()

//   const handleClick = (e) => {
//     e.preventDefault()
//     // return <Navigate to={'/login'} />
//     navigate('/login')
//   }

  useEffect(()=>{
    // console.log(user)
  }, [])

  return (
    <div>
      <div className="container mx-auto">
        {
          userLocal && Object.keys(userLocal).length > 0
          ?
          <Header user={userLocal} />
          :
          <Header user={null} />
        }
      </div>
      <div className="container">
        <div className="container">
          <h1 className='text-center'>Devenir hôte</h1>
          <InfosHotes />
          <br />
          <InfosCamps />
          <br />
          <Fonctionnement />

          <Row className='mt-5 text-center'>
            <Col>
                {/* <Button
                    type='submit'
                    className='btn'
                    onClick={handleClick}
                    style={{ border:'none',boxShadow:'none',outline:'none',background:'#25632d', color:'white' }}
                >
                    Créer une annonce
                </Button> */}
                {
                    userLocal && (
                    // <Link to={'/annonce'} style={{ background:'#25632d', color:'white' }} className='btn'>
                    //     Créer une annonce
                    // </Link>
                    <a href="/annonce" style={{ background:'#25632d', color:'white' }} className='btn'>Créer une annonce</a>
                    )
                }
                {
                    !userLocal && (
                    // <Link to={'/login?from=devenirhote'} style={{ background:'#25632d', color:'white' }} className='btn'>
                    //     Créer une annonce
                    // </Link>
                    <a href="/login/devenirhote" style={{ background:'#25632d', color:'white' }} className='btn'>Créer une annonce</a>
                    )
                }
                
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}
