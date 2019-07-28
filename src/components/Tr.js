import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Tr extends React.Component {

    render() {
        const { id, name, age} = this.props.model
        return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{age}</TableCell>
        </TableRow>)
    }
}

export default Tr