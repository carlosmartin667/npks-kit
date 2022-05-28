import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import WizardModernAlta from '../components/Alta/wizard/WizardModernAlta'

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <WizardModernAlta/>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
