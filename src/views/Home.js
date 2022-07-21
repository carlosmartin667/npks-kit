import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import TableCompany from "./tables/TableCompany"

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Mis Lotes</CardTitle>
        </CardHeader>
        <CardBody>
          <TableCompany />
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
