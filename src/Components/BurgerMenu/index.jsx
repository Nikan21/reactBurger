import React from 'react';
import './styles.css'

class BurgerMenu extends React.Component{
    constructor(){
        super()

        this.state = {
            isShown: false
        }

        this.switchState = () =>{
            this.setState((prevState)=>{
                return {isShown: !prevState.isShown}
            })
        }
    }

    render(){
        const styles = this.state.isShown === true ? 'menu-shown' : 'menu-hidden';
        return(<div>
            <div onClick = {this.switchState}>On/Off</div>
            <div className = {styles}>Text</div>
        </div>)
    }
}

export default BurgerMenu