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

  static propTypes = {
    onSortName : PropTypes.func.isRequired,
    onSortNumber : PropTypes.func.isRequired,
    list : PropTypes.array.isRequired,
    sortNameAsc : PropTypes.bool,
    sortNoAsc : PropTypes.bool
  }

  TRowNoData = () => (<TableRow>
    <TableCell colSpan={3} align="center">No Data</TableCell>
  </TableRow>)

  render() {
    const { onSortNumber, onSortName, list, sortNameAsc, sortNoAsc } = this.props

    let transparentIconNoUp = sortNoAsc ? "" : "half-transparent",
        transparentIconNoDown = sortNoAsc ? "half-transparent" : "",
        transparentIconNameUp = sortNameAsc ? "" : "half-transparent",
        transparentIconNameDown = sortNameAsc ? "half-transparent" : "";

    return (
      <Table className="my-table">
        <TableHead>
          <TableRow style={{background: "#fff"}}>
            <TableCell
              onClick={onSortNumber}
              width="80"
              className="cursor-pointer">
              No.
              <Button className="btn-sorter">
                <ArrowDropUp className={transparentIconNoUp} style={{ transform: "translateY(8px)" }} />
                <ArrowDropDown className={transparentIconNoDown} style={{ transform: "translateY(-6px)" }} />
              </Button>
            </TableCell>
            <TableCell
              onClick={onSortName}
              className="cursor-pointer">
              Name
              <Button className="btn-sorter">
                <ArrowDropUp className={transparentIconNameUp} style={{ transform: "translateY(8px)" }} />
                <ArrowDropDown className={transparentIconNameDown} style={{ transform: "translateY(-6px)" }} />
              </Button>
            </TableCell>
            <TableCell>Age</TableCell>
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