import React from 'React'

export default class Exercicetrois extends React.Components{

    constructor(props){
        super(props)
        this.state={
            count:2
        }
    }
        handleClickun()
        {
            // this.setState({
            //     count:
            // })
        }
    render(){
        

        return(
            <div>
                 <div className=" container bg-secondary">
        <p>Deplacer les éléments</p>
        <div class='row d-flex justify-content-around arene'>
            <div class="rond bg-primary w-25 my-5">
                <div class="buu"></div>
            </div>

            <div class="rond bg-primary w-25 my-5">
                <div class="buu d-none"></div>
            </div>
        </div>

        <div class="mx-auto w-25">
            <button class='jaune'>change place</button>
        </div>

        <div class="mx-auto w-25">
            <button class='vert'>nombre de click 0</button>
        </div>
    </div>
        {/* <div>
        <div>{this.state.count%2== 0 ?  }</div>
        </div> */}

            </div>
        )
    }
}