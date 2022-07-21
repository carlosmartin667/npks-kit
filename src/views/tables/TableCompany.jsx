// ** Icons Imports
import { MoreVertical, Edit, Trash, Monitor, TrendingUp, TrendingDown } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Card } from 'reactstrap'

const TableCompany = () => {
    const data = [
        {
          img: require('@src/assets/images/icons/toolbox.svg').default,
          name: 'Lote 1',
          description: 'Alta productividad',
          icon: <Monitor size={18} />,
          countryside: 'Gastaldi',
          location: 'Villa María',
          city: 'Córdoba',
          date: '15/12/2022',
          crop: 'Maíz',
          cropUp: true,
        },
        {
            img: require('@src/assets/images/icons/book.svg').default,
            name: 'Lote 5',
            description: null,
            icon: <Monitor size={18} />,
            countryside: 'El Mimoso',
            location: 'Río IV',
            city: 'Córdoba',
            date: '11/11/2022',
            crop: 'Soja',
            cropUp: false,
          },
          {
            img: require('@src/assets/images/icons/book.svg').default,
            name: 'Lote 2',
            description: 'Baja productividad',
            icon: <Monitor size={18} />,
            countryside: 'Aleman',
            location: 'Pasco',
            city: 'Córdoba',
            date: '-------',
            crop: null,
            cropUp: null,
          },
          {
            img: require('@src/assets/images/icons/toolbox.svg').default,
            name: 'Lote 3',
            description: null,
            icon: <Monitor size={18} />,
            countryside: 'Antonio',
            location: 'Esperanza',
            city: 'Santa Fe',
            date: '01/04/2022',
            crop: 'Alfalfa',
            cropUp: true,
          },
      ]

    const renderData = () => {

        return (
            <>
            {data.map((col, index) => (
            <tr key={index}>
             {/* NOMBRE */}
             <td>
                 <div  className="d-flex aling-items-center">
               <img className='me-75' src={col.img} alt={col.name} />
               <div className='d-flex flex-column'>
               <span className='align-middle fw-bolder'>{col.name}</span>
               <span className='font-small-2 text-muted'>{col.description}</span>
               </div>
               </div>
             </td>
             {/* CAMPO */}
             <td>
                 <span className="fw-bolder mb-25">{col.countryside}</span>
             </td>
             {/* LOCALIDAD */}
             <td className='text-nowrap'>
                <div className='d-flex flex-column'>
                 <span className='fw-bolder mb-25'>{col.location}</span>
                 <span className='font-small-2 text-muted'>en {col.city}</span>
                </div>
            </td>
            {/* LOCALIDAD */}
            <td>
                <Badge pill color={col.cropUp ? 'light-primary' : 'light-danger' } className='me-1'>
                 {col.date}
                </Badge>
            </td>
            {/* CULTIVO */}
            <td>
                <div className='d-flex align-items-center'>
                <span className='fw-bolder me-1'>{col.crop}</span>
                {col.cropUp ? (<TrendingUp size={15} className="text-success" />) : (<TrendingDown size={15} className="text-danger" />)}
                </div>
            </td>
            <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Ver</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Más</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </td>
            </tr>
            ))}
            </>
        )
    }

  return (
    <Card>
    <Table responsive>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>CAMPO</th>
          <th>LOCALIDAD</th>
          <th>FECHA DE SIEMBRA</th>
          <th>CULTIVO</th>
          <th>OPCIONES</th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </Table>
    </Card>
  )
}

export default TableCompany;
