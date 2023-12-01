class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input:"",
            address:"",
            submitted:false
        }
     this.verifier=this.verifier.bind(this);
     this.goBack=this.goBack.bind(this);
    } 
 
 verifier(){
    let input= document.getElementById("email");
    let errMSG= document.querySelector(".errorMSG");
    let submit= document.getElementById("submit");
      if(!input.checkValidity()){
        input.classList.add("error");
        errMSG.classList.add("error");
      }else{
        this.setState({
          submitted:true,
          address: this.state.input
        })
      }
    }
  goBack(){
    let dismiss= document.getElementById("dismiss");
    this.setState({
      submitted:false
    })
  }
  
  componentDidMount(){
    let input= document.getElementById("email");
    
    input.addEventListener("input",(e)=>{
      input.classList.remove("error");
      this.setState({
        input:e.target.value
      })
    });
    
  }  
    render(){
      
        if(!this.state.submitted){
        return (
            <div className="card">
    <img className="bgMobile" alt="Graphs" src="./images/illustration-sign-up-mobile.svg" />
    <form className="col" method="post">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <div className="features">
        <span><img className="tick" src="images/icon-list.svg"/><p>Product discovery and building what matters</p></span>
        <span><img className="tick" src="images/icon-list.svg" /><p>Measuring to ensure updates are a success</p></span>
        <span><img className="tick" src="images/icon-list.svg" /><p>And much more!</p></span>
      </div>
      <div className="emailDiv">
        <label for="email">Email address
        </label>
        <p className="errorMSG ">Valid email required</p>
        <input id="email" className="" type="email" placeholder="email@company.com" required/>
      </div>
      <input onClick={this.verifier} type="submit" className="purple" id="submit"  value="Subscribe to monthly newsletter"/>
    </form>
    <img className="bgDesktop" src="images/illustration-sign-up-desktop.svg" alt="Graphs"/>             </div>        
        )
    }
    else
    {
        return (
            <div className="card">
                <div className="success col">
                <img className="tickBig" alt="A big tick" src="./images/icon-success.svg"/>
                <h1>Thanks for subscribing!</h1>

                <p>
                A confirmation email has been sent to <strong>{this.state.address}</strong>.
                Please open it and click the button inside to confirm your subscription.
                </p>

                <button className="purple" id="dismiss" onClick={this.goBack}>Dismiss message</button>
                </div>
            </div>
        )
    }
    }
}


;
ReactDOM.render(<App/>, targetNode)
