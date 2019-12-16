import React from 'react'
import Exerciceun from '../components/Exerciceun'
import Exercicedeux from '../components/Exercicedeux'
import Exercicetrois from '../components/Exercicetrois'
import Exercicequatre from '../components/Exercicequatre'
import Exercicecinq from '../components/Exercicecinq'
import Exercicesix from '../components/Exercicesix'
import Exercicesept from '../components/Exercicesept'


export default class Nav extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:1
        
            
        }
    }
        handleClickun()
        {
            this.setState({
                count:1
            })
        }
        handleClickdeux()
        {
            this.setState({
                count:2
            })
        }
        handleClicktrois()
        {
            this.setState({
                count:3
            })
        }
        handleClickquatre()
        {
            this.setState({
                count:4
            })
        }
        handleClickcinq()
        {
            this.setState({
                count:5
            })
        }
        handleClicksix()
        {
            this.setState({
                count:6
            })
        }
        handleClicksept()
        {
            this.setState({
                count:7
            })
        }
    
    
   

    render(){
        return(
            
                <div>
                    <div class='row'>
                <div class='col-3'>
                    <a href="" onClick={this.handleClickun.bind(this)}>Exercice 1{this.state.count}</a>
                </div>
                <div class='col-3'>
                    <a href="" onClick={this.handleClickdeux.bind(this)}> Exercice 2{this.state.count}</a>
                </div>
                <div class='col-3'>
                    <a href="" onClick={this.handleClicktrois.bind(this)}>Exercice 3{this.state.count}</a>
                </div>
                <div class='col-3'>
                    <a href="" onClick={this.handleClickquatre.bind(this)}>Exercice 4{this.state.count}</a>
                </div>
            </div>

            <div class='row'>
                <div class='col-3'>
                    <a href="" onClick={this.handleClickcinq.bind(this)}>Exercice 5{this.state.count}</a>
                </div>

                <div class='col-3'>
                    <a href="" onClick={this.handleClicksix.bind(this)}> Exercice 6{this.state.count}</a>
                </div>
            </div>

            <div class='col-3'>
                    <a href="" onClick={this.handleClicksept.bind(this)}> Exercice 7{this.state.count}</a>
                </div>
                
               

                <div>
                    <div>{this.state.count== 1 ? <div><Exerciceun/></div> : null}</div>
                    <div>{this.state.count== 2 ? <div><Exercicedeux/></div> : null}</div>
                    <div>{this.state.count== 3 ? <div><Exercicetrois/></div> : null}</div>
                    <div>{this.state.count== 4 ? <div><Exercicequatre/></div> : null}</div>
                    <div>{this.state.count== 5 ? <div><Exercicecinq/></div> : null}</div>
                    <div>{this.state.count== 6 ? <div><Exercicesix/></div> : null}</div>
                    <div>{this.state.count== 7 ? <div><Exercicesept/></div> : null}</div>
                </div>
            </div>
        )
        
    }
}