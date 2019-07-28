import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import PropTypes from 'prop-types'

class Tr extends React.Component {

    static propTypes = {
        model : PropTypes.object.isRequired
    }

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