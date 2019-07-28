import React from 'react'
import './App.css'
import MyTable from './MyTable'
import Paper from '@material-ui/core/Paper'
import FormMember from './FormMember'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortNo: false,
      sortName: false
    }
  }

  onSortNumber = () => {
    this.setState({ sortNo: !this.state.sortNo })
    this.props.SortNumber(this.state.sortNo)
  }

  onSortName = () => {
    this.setState({ sortName: !this.state.sortName })
    this.props.SortName(this.state.sortName)
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

