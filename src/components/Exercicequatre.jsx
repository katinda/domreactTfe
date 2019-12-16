import React from 'React'
import ballon from '../../image/ballon.jpeg'

export default class Exercicequatre extends React.Components{
    constructor(props){

        super(props)
        this.state={
            count:[]

        }

    }
    handleClik(){
        let variable = this.state.count.push('lolo')
        this.setState({
            count: variable
        })
    }
    render(){
        return(
            <div>
                <div className=" container bg-secondary">
                    <p> générer des élements du DOM</p>

                    <p> cliquer sur le bouton ci-dessous pour générer des oeufs.</p>

                    <button class="oeuf bg-success"> Ajouter un oeuf </button>
 
                   0
                    <div class="popey">
                            {this.count.map(element => {
                        <img src={ballon} alt="" />
                         })}

                   </div> 


                </div>
                
            </div>
        )
    }
}