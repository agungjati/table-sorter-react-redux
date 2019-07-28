import React from 'react'
import Tr from './Tr'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import { Button } from '@material-ui/core';
import './MyTable.css'
import PropTypes from 'prop-types'

class MyTable extends React.Component {


  TRowNoData = () => (<TableRow>
    <TableCell colSpan={3} align="center">No Data</TableCell>
  </TableRow>)

  render() {
    const { onSortNumber, onSortName, list } = this.props

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              onClick={onSortNumber}
              width="80"
              className="cursor-pointer">
              No.
              <Button className="btn-sorter">
                <ArrowDropUp style={{ transform: "translateY(8px)" }} />
                <ArrowDropDown style={{ transform: "translateY(-6px)" }} />
              </Button>
            </TableCell>
            <TableCell
              onClick={onSortName}
              className="cursor-pointer">
              Nama
              <Button className="btn-sorter">
                <ArrowDropUp style={{ transform: "translateY(8px)" }} />
                <ArrowDropDown style={{ transform: "translateY(-6px)" }} />
              </Button>
            </TableCell>
            <TableCell>Umur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.length ? list.map((l, i) => <Tr key={i} model={l} />) :
            this.TRowNoData()}
        </TableBody>
      </Table>)
  }
}

export default MyTable