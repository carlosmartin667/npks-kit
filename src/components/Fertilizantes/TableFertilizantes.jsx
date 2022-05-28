import React from 'react'
import { FormGroup, Input, Label, Table } from 'reactstrap'
import ModalFertilizanteAsuffre from './Modal/ModalFertilizanteAsuffre'
import ModalFertilizanteFosforo from './Modal/ModalFertilizanteFosforo'
import ModalFertilizanteNitrgeno from './Modal/ModalFertilizanteNitrgeno'
import ModalFertilizantePotasio from './Modal/ModalFertilizantePotasio'

const TableFertilizantes = () => {
    return (
        <Table responsive bordered size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Nitrogeno</th>
                    <th>Fosforo</th>
                    <th>potasio</th>
                    <th>asufre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre 2</td>
                    <td>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </td>
                    <td>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </td>
                    <td>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </td>
                    <td>

                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>

                    </td>
                </tr>
                <tr>
                    <td>Cantidad Kg/kg</td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                </tr>

                <tr>
                    <td>Eficiencia %</td>
                    <td>
                        <ModalFertilizanteNitrgeno/>
                    </td>
                    <td>
                        <ModalFertilizanteFosforo/>
                    </td>
                    <td>
                        <ModalFertilizantePotasio/>
                    </td>
                    <td>
                        <ModalFertilizanteAsuffre/>
                    </td>
                </tr>

                <tr>
                    <td>Precio</td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                    <td>
                        <Input
                            id="text"
                            name="text"
                            placeholder="ej: 34"
                            type="text"
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableFertilizantes