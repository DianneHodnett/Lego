import React, { Component } from 'react'
import '../styles/Login.css'

export default class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render () {
        const handleSubmit = (event) => {
            const payload = {
                event: event,
                username: this.state.username,
                password: this.state.password
            }

            this.props.submitHandler(payload)
            // event.preventDefault()
            // console.log(this.state.username + ":" this.state.password)


            //const handleTextChange = (event) => {
            //this.setState({username: event.target.value})
            //}
        }
        return (
            <div className="login">
                <form className="flexBox" onSubmit={handleSubmit}>
                    {/*<input type="text" placeholder="Username" onChange={handleTextChange}/>*/}
                    <input required type="text" placeholder="Username" onChange={e => this.setState({username: e.target.value})}/>
                    <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );

    }
}