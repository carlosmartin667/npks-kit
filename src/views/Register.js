// ** React Imports
import React, {useContext} from "react"
import { Link } from 'react-router-dom'

// ** Import logo icon
import Logo from "../assets/images/logo/logo.svg"

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'


// ** Styles
import '@styles/react/pages/page-authentication.scss'

// ** useContext - State fomr
import { ThemeColors } from "../utility/context/ThemeColors"
import ModalRegister from "../components/Login/ModalRegister"

const Register = () => {
  // ** Context
  const { username, setUsername, terms, setTerms, formValidation, setFormValidation } = useContext(ThemeColors)
 
    const expUsername = /^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo.
    // const expPassword = /^.{4,12}$/ // 4 a 12 digitos.
    // const expEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // const expPhone = /^\d{7,14}$/ // 7 a 14 numeros.


  const validationUsername = () => {
    if (expUsername) {
      if (expUsername.test(username.value)) {
        setUsername({...username, validation: true})
      } else {
        setUsername({...username, validation: false})
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

      // if (username.validation && InputPasswordToggle.validation)
      if (username.validation === true && terms === true) {
        setFormValidation(true)
        setUsername({value: '', validation: true})
        // setPassword({value: '', validation: null})
      } else {
        setFormValidation(false)
      }

  }

  // ** Hooks
  const { skin } = useSkin()

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default


  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
          <img src={Logo} alt={"Logo"} />
  
          <h2 className='brand-text text-primary ms-1'>NPKS</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login Cover' />
          </div>
        </Col>
        
        <Col className=' d-flex align-items-center auth-bg px-2 p-lg-5 ' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' xs='12' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Registrate en NPKS
            </CardTitle>
            <CardText className='mb-2'>Registrate y lográ la máxima eficiencia en fertilización.</CardText>

            <Form onSubmit={handleSubmit} className='auth-register-form mt-2'>

              {formValidation === false && <h3>LLENAR CAMPO</h3>}
              {formValidation === true && <h3>mensaje enviado</h3>}

              <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                Nombre de usuario
                </Label>
                <Input className={username.validation ? '' : 'error_input_register'} type='text' id='register-username'
                 placeholder='Ingrese su nombre de usuario' autoFocus                 
                 value={username.value}
                 onChange={(e) => setUsername({...username, value: e.target.value})}
                 onKeyUp={validationUsername}
                 onBlur={validationUsername}
                 />
                 {Boolean(username.validation) ? null : <p className='error_input_message_register'>Campo requerido (Letras, numeros, guion y guion_bajo)
                 <br />
                 {Boolean(username.value.length < 4) && <p className='error_input_message_register'>de 4 a 16 caracteres</p>}
                 </p>}

                 
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-email'>
                Email
                </Label>
                <Input type='email' id='register-email' placeholder='Ingrese su email' />
              </div>

              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                Contraseña
                </Label>
                {/* <InputPasswordToggle className='input-group-merge' id='register-password' /> */}
                <Input type="password" className='input-group-merge' id='register-password' placeholder="Seleccione su contraseña"
                                />

              </div>

              <div className='mb-1'>
                 <Label className='form-label' for='register-select'>
                 Como conociste NPKS
                 </Label>
                <Input type="select" name="selectMulti" id="register-select">
                    <option value='Corteva'>Corteva</option>
                    <option value='GDM (Don Mario)'>GDM (Don Mario)</option>
                    <option value='Sitio web de NPKS'>Sitio web de NPKS</option>
                    <option value='Otro'>Otro</option>
                    
                 </Input>
               </div>

              <div className='form-check mb-1'>
                <Input type='checkbox' id='terms' checked={terms} onChange={(e) => setTerms(e.target.checked)} />
                <Label className='form-check-label' for='terms'>
                  Acepto la 
                  <ModalRegister />
                </Label>
                
                {/* onClick={e => e.preventDefault()} */}
              </div>

              <Button type='submit' color='primary' block>
                Registrate
              </Button>

              {/* <Button tag={Link} to='/' color='primary' block>
                Registrate
              </Button> */}
            </Form>

            <p className='text-center mt-2'>
              <span>¿Ya tienes una cuenta?</span>
            </p>

            <Button tag={Link} to='/login' className='mt-1' color='primary' block>
              Iniciar Sesión
            </Button>

            {/* <p className='text-center mt-2'>
              <span className='me-25'>¿Ya tienes una cuenta?</span>
              <Link to='/login'>
                <span>Si el usuario ya está registrado, puede iniciar sesión desde este botón</span>
              </Link>
            </p> */}

            {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div> */}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
