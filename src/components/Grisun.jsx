import React from 'react'
import Modifié from './Modifié';
export default class Grisun extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <Modifié titre="modifié titre"/>
            </div>
        )
    }
}