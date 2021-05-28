class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        })

    }
    handleMinusOne(){
        this.setState((prevState)=> {
            return { 
                count: prevState.count - 1
            }
        })

    }
    handleResetCount(){
        this.setState(()=>{
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetCount}>Reset counter</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));