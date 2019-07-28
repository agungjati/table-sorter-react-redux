import React from 'react'
import './App.css'
import MyTable from './MyTable'
import Paper from '@material-ui/core/Paper'
import FormMember from './FormMember'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortNoAsc: true,
      sortNameAsc: true
    }
  }

  static propTypes = {
    SortNumber : PropTypes.func.isRequired,
    SortName : PropTypes.func.isRequired,
    AddNewMember : PropTypes.func.isRequired
  } 

  onSortNumber = () => {
    this.setState({ sortNoAsc: !this.state.sortNoAsc })
    this.props.SortNumber(this.state.sortNoAsc)
  }

  onSortName = () => {
    this.setState({ sortNameAsc: !this.state.sortNameAsc })
    this.props.SortName(this.state.sortNameAsc)
  }

  onAddMember = (evt) => {
    evt.preventDefault()
    const { name, age } = evt.target
    this.props.AddNewMember(name.value, age.value)

  }

  componentDidUpdate() {
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        <FormMember onAddMember={this.onAddMember} />
        <br />
        <Paper style={{ padding: "10px" }}>
          <MyTable 
            onSortName={this.onSortName}
            onSortNumber={this.onSortNumber}
            list={this.props.list} />
        </Paper>
      </div>
    )
  }
}

export default App

