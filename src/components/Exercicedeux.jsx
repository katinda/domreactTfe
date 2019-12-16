import React from 'React'

export default class Exercicedeux extends React.Components{
    constructor(props){

        super(props)
        this.state={
            nom:'inconnu'

        }
    }


    handleChange(e){

        this.setState({nom: e.target.value})
    }
    handleClick(e){
        this.setState({ nom:'inconnu'})
    }
      
    render(){
        return(
            <div>
                <div className=' container .bg-secondary'>
                    <input value={this.state.nom} onChange={this.handleChanges.bind(this)} type="text"/>
                    <button onClick={this.handleClick.bind(this)}>loio </button>
                </div>
             </div>
        )
    }
}