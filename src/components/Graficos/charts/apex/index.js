// ** React Imports
import { Fragment} from 'react'
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
// ** Charts
import ApexDonutChart from './ApexDonutChart'
// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ApexCharts = () => {

  return (
    <Fragment>
      <Row className='match-height'>   
        <Col xl='6' lg='12'>
          <ApexDonutChart />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ApexCharts
