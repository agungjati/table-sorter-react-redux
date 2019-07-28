import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class FormMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            disabledBtn : true, 
            fieldName : "",
            fieldAge : 0
        }
    }

    formStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "20px 10px"
    }

    onChangeField = (evt) => {
        this.setStateField(evt);

        this.setStateButtonAble();
    }

    setStateButtonAble() {
        const { fieldName, fieldAge } = this.state;
        if (fieldName !== "" && fieldAge !== 0)
            this.setState({ disabledBtn: false });
        else
            this.setState({ disabledBtn: true });
    }

    setStateField(evt) {
        const { name, value } = evt.target;
        if (name == "name")
            this.setState({ fieldName: value });
        else
            this.setState({ fieldAge: value });
    }

    render() {
        return (
            <Paper style={{ width: "400px", margin: "25px" }}>
            <form onSubmit={this.props.onAddMember}  style={this.formStyle} >
                <TextField
                    onChange={this.onChangeField}
                    value={this.state.fieldName}
                    name="name"
                    margin="dense"
                    label="Name"
                    variant="outlined"
                    placeholder="Enter name..."
                     />
                <TextField
                    onChange={this.onChangeField}
                    value={this.state.fieldAge}
                    name="age"
                    margin="dense"
                    type="number"
                    label="Age"
                    variant="outlined"
                    placeholder="Enter age..."
                     />
                <div>
                <Button 
                    disabled={this.state.disabledBtn}
                    type="submit"
                    variant="contained"  
                    color="primary" 
                    style={{ "float":"right", marginTop: "10px"  }}>
                    Simpan</Button>
                </div>
            </form>
            </Paper>)
    }
}

export default FormMember