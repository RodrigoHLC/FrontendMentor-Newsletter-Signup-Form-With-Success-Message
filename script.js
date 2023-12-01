class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      address: "",
      submitted: false };

    this.verifier = this.verifier.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  verifier() {
    let input = document.getElementById("email");
    let errMSG = document.querySelector(".errorMSG");
    let submit = document.getElementById("submit");
    if (!input.checkValidity()) {
      input.classList.add("error");
      errMSG.classList.add("error");
    } else {
      this.setState({
        submitted: true,
        address: this.state.input });

    }
  }
  goBack() {
    let dismiss = document.getElementById("dismiss");
    this.setState({
      submitted: false });

  }

  componentDidMount() {
    let input = document.getElementById("email");

    input.addEventListener("input", e => {
      input.classList.remove("error");
      this.setState({
        input: e.target.value });

    });

  }
  render() {

    if (!this.state.submitted) {
      return /*#__PURE__*/(
        React.createElement("div", { className: "card" }, /*#__PURE__*/
        React.createElement("img", { className: "bgMobile", alt: "Graphs", src: "./images/illustration-sign-up-mobile.svg" }), /*#__PURE__*/
        React.createElement("form", { className: "col", method: "post" }, /*#__PURE__*/
        React.createElement("h1", null, "Stay updated!"), /*#__PURE__*/
        React.createElement("p", null, "Join 60,000+ product managers receiving monthly updates on:"), /*#__PURE__*/
        React.createElement("div", { className: "features" }, /*#__PURE__*/
        React.createElement("span", null, /*#__PURE__*/React.createElement("img", { className: "tick", src: "images/icon-list.svg" }), /*#__PURE__*/React.createElement("p", null, "Product discovery and building what matters")), /*#__PURE__*/
        React.createElement("span", null, /*#__PURE__*/React.createElement("img", { className: "tick", src: "images/icon-list.svg" }), /*#__PURE__*/React.createElement("p", null, "Measuring to ensure updates are a success")), /*#__PURE__*/
        React.createElement("span", null, /*#__PURE__*/React.createElement("img", { className: "tick", src: "images/icon-list.svg" }), /*#__PURE__*/React.createElement("p", null, "And much more!"))), /*#__PURE__*/

        React.createElement("div", { className: "emailDiv" }, /*#__PURE__*/
        React.createElement("label", { for: "email" }, "Email address"), /*#__PURE__*/

        React.createElement("p", { className: "errorMSG " }, "Valid email required"), /*#__PURE__*/
        React.createElement("input", { id: "email", className: "", type: "email", placeholder: "email@company.com", required: true })), /*#__PURE__*/

        React.createElement("input", { onClick: this.verifier, type: "submit", className: "purple", id: "submit", value: "Subscribe to monthly newsletter" })), /*#__PURE__*/

        React.createElement("img", { className: "bgDesktop", src: "images/illustration-sign-up-desktop.svg", alt: "Graphs" }), "             "));

    } else

    {
      return /*#__PURE__*/(
        React.createElement("div", { className: "card" }, /*#__PURE__*/
        React.createElement("div", { className: "success col" }, /*#__PURE__*/
        React.createElement("img", { className: "tickBig", alt: "A big tick", src: "./images/icon-success.svg" }), /*#__PURE__*/
        React.createElement("h1", null, "Thanks for subscribing!"), /*#__PURE__*/

        React.createElement("p", null, "A confirmation email has been sent to ", /*#__PURE__*/
        React.createElement("strong", null, this.state.address), ". Please open it and click the button inside to confirm your subscription."), /*#__PURE__*/



        React.createElement("button", { className: "purple", id: "dismiss", onClick: this.goBack }, "Dismiss message"))));



    }
  }}



;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("targetNode"));