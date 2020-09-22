// import React, { Component } from 'react'
// class Form extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             username: '',
//             email: '',
//             password: ''
             
//         }
//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             username: event.target.value
//         })

//     }
//     handleEmailChange = (event) => {
//         this.setState({
//             email: event.target.value
//         })

//     handlePasswordChange = (event) => {
//             this.setState({
//                 password: event.target.value
//             })
//     }
            
//     handleSignUp = (event) => {
//         alert($ {this.state.username} $ {this.state.email} $ {this.state.password})
//         event.preventDefault()
                
//             })
//     }
        

    


//     render(){
//         return(
//             <form on SignUp={this.handleSignUp}>
//                 <div>
//                     <label>Username</label>
//                     <input type="text" value={this.state.username}
//                      onChange={this.handleUsernameChange}/>
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input type="text" value={this.state.email}
//                      onChange={this.handleEmailChange}/>
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type="text" value={this.state.password}
//                      onChange={this.handlePasswordChange}/>
//                 </div>
//             </form>
//         )
//     }
//  }
// export default Form