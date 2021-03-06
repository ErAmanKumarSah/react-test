import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const firstName = 'Daniel';
const lastName = 'Ritchie';
const tutorial_link = 'https://reactjs.org/docs/conditional-rendering.html';

const element3 = <h4>Hello {firstName + ' '+ lastName}! Welcome...</h4>;
const element2 = <p>we declare a variable called name and then use it inside JSX by wrapping it in curly braces:</p>;
const element = <div><h3 className='text-center'>React</h3><a href={tutorial_link} target="_blank" className='links'>Click here for this tutorial...</a></div>;

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hey {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, budy...</h1>;
// }

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harry',
    lastName: 'potter'
}

const element4 = <h4>First Name : {user.firstName} <br /> Last Name : {user.lastName}</h4>;
const element5 = (<h3>Mr. {formatName(user)}</h3>);
const element6 = <div tabIndex="0">Element6</div>;
//const element7 = <img src={user.avatarUrl}></img>;
//const title = response.potentiallyMaliciousInput;
//const element8 = <h3>{title}</h3>;
const element9 = React.createElement(
    'p', {className: 'el9'},
    'This is created by react createElement...'
);
// const element10 = { //error - use array instead props as a child
//     type: 'h1',
//     props: {
//         className: 'el10',
//         children: 'Hello, World!'
//     }
// };

function tick() {
    const element11 = (
        <div>
            <h4>It is {new Date().toLocaleTimeString()}</h4>;
        </div>
    );
    ReactDOM.render(element11, document.getElementById('e11'));
}
setInterval(tick, 1000);

function Welcome(props) {
    return <h4>Hey, {props.name}</h4>
}

// class Welcome extends React.Component {  // this also works
//     render() {
//         return <h4>Hi, {this.props.name}</h4>;
//     }
// }
//const element12 = <div />;
const element13 = <Welcome name="Sara" />;

function FormatDate(date) {
    date = new Date();
    return date.toLocaleDateString();
}

function Welcome1(props) {
    return (

            <li className={props.className}><a href={props.siteurl}>{props.name}</a></li>
            /* <div className="Comment">
                <div className="UserInfo">
                    <img src={props.author.avatarUrl} alt="image" />
                    <div className="UserInfo-name">
                    {props.author.name}
                    </div>        
                </div>
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">{formateDate(props.date)}</div>
            </div> */

    );
}


function App2() {
    return (
    <ul>
        <Welcome1 name="Home" className="menu-item home-menu" siteurl="/home" />
        <Welcome1 name="About" className="menu-item about-menu" siteurl="/about" />
        <Welcome1 name="Product" className="menu-item product-menu" siteurl="/product" />
        <Welcome1 name="Gallery" className="menu-item gallery-menu" siteurl="/gallery" />
        <Welcome1 name="Contact" className="menu-item contact-menu" siteurl="/contact" />
    </ul>
    );
}


// function formatDate2(date) {
//     return date.toLocaleDateString();
//   }
  
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img
//             className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate2(props.date)}
//         </div>
//       </div>
//     );
//   }
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };

function tick2() {
    const element16 = (
        <div>
            <h4>Element 16 - Date and Time </h4>
            {/* <h4>Time : {new Date().toLocaleDateString()}</h4> */}
            {/* <h4>Date : {new Date().toLocaleDateString() } ------ Time : {new Date().toLocaleTimeString()}</h4> */}
            <h4>Time : {new Date().toLocaleTimeString()}</h4>
        </div>
    );
    ReactDOM.render(element16, document.getElementById('e16'))
}
setInterval(tick2, 1000);


function Clock(props) {
    return (
        <p>Clock function ! Time : {props.date.toLocaleTimeString()}</p>
    );
}
function tick3() {
    ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('e17'));
}
setInterval(tick3, 1000);

// Converting a function to a class
class Clock2 extends React.Component {
    render() {
        return (
            <div>
                <p>Converting a function to a class : ----- : Time : {this.props.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

class Clock3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    }
    render() {
        return (
            <div>
                <p><code>Replaced this.props.date with this.state.date : -- : Time</code>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

// Adding lifecycle methods to a class
class Lifecycleclock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <p>This is LifeCycle Methods... - Time : {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

// using state correctly
//this.setState({comment: 'Vannakkam'});
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
// }));
// this.setState(function(state, props){
//     return {
//         counter: state.counter + props.increment
//     };
// });
function ClockApp() {
    return (
      <div>
        <Lifecycleclock />
        <Lifecycleclock />
        <Lifecycleclock />
      </div>
    );
  }

// Handling events
// function activateLasers() {
//     console.log('onclick event');
// }

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked');
    }
    return (
        <a href={tutorial_link} onClick={handleClick} target="_blank">Click me for Action</a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoginButton extends React.Component {
    handleClick = () => {
        console.log('this is : ', this);
    }
    render() {
        return (
            <button onClick={this.handleClick}>Click Here</button>
        );
    }
}

class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is - ', this);
    }
    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>Click me</button>
        );
    }
}

// Conditional Rendering...
function UserGreeting(props) {
    return <p>Welcome Back!</p>;
}
function GuestGreeting(props) {
    return <p>Please Signup...</p>
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log("isLoggedIn : ",isLoggedIn);
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginBtn(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}
function LogoutBtn(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutBtn onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginBtn onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

//Inline if with Logical && Operator
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    //const isLoggedIn2 = this.isLoggedIn2;
    return (
        <div>
            <p>HEllo!</p>
             {unreadMessages.length > 0 && <h6>You have {unreadMessages.length} unread messages...</h6>}
            {/*<p>The user is <b>{isLoggedIn2 ? 'currently' : 'not'}</b> logged in.</p>;  */}
        </div>
    );
}
const messages = ['React', 'Re: React', 'msg', 'JavaScript', 'JQuery', 'Html', 'css', 'bootstrap', 'wordpress'];
console.log(messages, messages.length);

// Inline if else with conditional operator
// class Ifelse extends React.Component {
//     constructor(props) {
//         super(props);
//         //const isLoggedIn = this.state.isLoggedIn;
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//           <div>
//             The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//           </div>
//         );
//       }
// }
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className="warning">Warning!</div>
    );
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn = {this.state.showWarning}/>
                <button onClick={this.handleLogoutClick}>{this.state.showWarning ? 'Hide':'Show'}</button>
            </div>
        );
    }
}

//Lists and keys
const numbers = [9,7,5,3,1];
const doubled = numbers.map((number) => number * 2);
console.log(numbers, doubled);
const listItems0 = numbers.map((number) => <li>{number}</li>);

function NumberList2(props) {
    const numbers2 = props.numbers2;
    const listItems2 = numbers2.map((number) => <li>{number}</li>);
    return ( <ul >{listItems2}</ul> );
}
const numbers2 = [1,12,13,14,15];

function NumberList3(props) {
    const numbers3 = props.numbers3;
    const listItems3 = numbers3.map((number) => <li key={number}>{number*2.5}</li>);
    return (<ul className="numberlist3">{listItems3} - list3</ul>);
}
const numbers3 = [2,22,32,42,12];
function ListItemFn(props) {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:
      <li key={value.toString()}>
        {value} - Test
      </li>
    );
  }

  function NumberList4(props) {
    const numbers4 = props.numbers4;
    const listItems4 = numbers4.map((numberd) =>
      // Wrong! The key should have been specified here:
      <ListItemFn value={numberd} />
    );
    return (
      <ul>
        {listItems4}
      </ul>
    );
  }
  const numbers4 = [3,33,333,3333,33333];
  function Blog(props) {
      const sidebar = (          
            <ul>
                {props.posts.map((post) => <li key={post.id}><a href={post.title}>{post.title}</a></li>)}
            </ul>          
      );
      const content = props.posts.map((post) => 
        <div key={post.id} className="w-100">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
        
      );
      return (
          <div>
              <hr />
              <div className="w-25 blog-post-left">{sidebar}</div>
              <div className="w-75 blog-post-right">{content}</div>
              <hr />
          </div>
      );
  }
  const posts = [
      {id:1, title: "React Native", content: "Keys Must Only Be Unique Among Siblings"},
      {id:2, title: "map", content: "Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique. We can use the same keys when we produce two different arrays:"}
  ];

// FORMS
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Typing...'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
       this.setState({value: event.target.value.toUpperCase()});
    }
    handleSubmit(event) {
        console.log('Submitted Successfuly : '+ this.state.value);
        //alert('Submitted Successfuly : '+ this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name :&nbsp;
                    <input type="text" value={this.state.value} onChange={this.handleChange} />   
                </label><br />
                
                {/* <textarea rows='5' value={this.state.value} onChange={this.handleChange}>Hello there, this is some text in textarea</textarea> */}
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Redux'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
       this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        console.log('Submitted Successfuly : '+ this.state.value);
        //alert('Submitted Successfuly : '+ this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Pick any 1 of selection tech...
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option selected value="Reactjs">ReactJs</option>
                    <option value="React-Native">React Native</option>
                    <option value="Element">Element Js</option>
                    <option value="Jsx">Jsx</option>
                    <option value="Redux">Redux</option>
                    <option value="Flux">Flux</option>
                </select>
                {/* <select multiple={true} value={['a','c']}></select> */} {/* Note : You can pass an array into the value attribute, allowing you to select multiple options in a select tag: */}
                {/* <textarea rows='5' value={this.state.value} onChange={this.handleChange}>Hello there, this is some text in textarea</textarea> */}
                </label>
                <br />
                <input type="file" /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//Handling Multiple Inputs
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isGoing: true, numberOfGuest: 5};
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
    render(){
        return (
            <form>
                <label>Is Going : 
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Number of Guest : 
                    <input type="number" name="numberOfGuest" value={this.state.numberOfGuest} onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

// Lifting State Up

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>THe water would boil...</p>;
    }
    return <p>The water would not boil...</p>;
}
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
        //e.preventDefault();
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in celsius: </legend>
                <input value={temperature} onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}
//Adding a second input
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state ={temperature: ''};
    }
    handleChange(e) {
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        //const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}
class TemperatureCalculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange ={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

//writing conversion functions
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// Composition vs inheritance
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog() {
    return(
        <FancyBorder color="red">
            <h2 className="Dialog-title">Title of Dialog...</h2>
            <p className="Dialog-message">This is the message for dialoge...</p>
        </FancyBorder>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane w-100">
            <div className="SplitPane-left w-50">
                {props.left}
            </div>
            <div className="SplitPane-right w-50">
                {props.right}
            </div>
        </div>
    );
}
function SplitPaneApp(){
    return(
        <SplitPane left={<Contacts />} right={<Chat />} />
    );
}
function Contacts(){
    return <div className="Contacts" />;
}
function Chat() {
    return <div className="Chat" />;
}
function Dialog(props){
    return (
        <FancyBorder color="red">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.messages}</p>
            {props.children}
        </FancyBorder>
    );
}
function DialogContent(){
    return(
        <Dialog title="Welcome" messages="Thank you for visiting our spacecraft!" />
    );
}
class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }
    render(){
        return (
            <div>
                <Dialog title="Mars Exploreation Program" messages="how should we refer to you?" />
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </div>
        );
    }
    handleChange(e){
        this.setState({login: e.target.value});
    }
    handleSignUp() {
        alert('Welcome aboard '+ this.state.login);
        console.log('Welcome aboard '+ this.state.login);
    }
}

// Thinking in React
class FilterableProductTable extends React.Component {
    render(){
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}
class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        );
    }
}
class ProductRow extends React.Component {
    render(){
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
class SearchBar extends React.Component {
    render(){
        return(
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    only show products in stock
                </p>
            </form>
        );
    }
}
class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category} />
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr> */}
                    {rows}
                </tbody>
            </table>            
        );
    }
}

const PRODUCTS = [
    {category:"Sporting Goods", price:'$49', stocked:true, name:'Football'},
    {category:"Electronis", price:'$123', stocked:true, name:'imac'},
    {category:"Sports", price:'$78', stocked:false, name:'hocky'},
    {category:"Elctricals", price:'$34', stocked:false, name:'iphone10'},
    {category:"Office", price:'$56', stocked:false, name:'excel'}
]

//function ScheduleDate(date) {
class ScheduleDate extends React.Component { 
    render() {
        const date = new Date();
        const current_time = date.toLocaleTimeString();
        //const set_time = this.set_time.bind(this);
        const timestamp = 120 * 60;
        const hours = Math.floor(timestamp/60/60), mins = Math.floor((timestamp - hours *60*60)/ 60 ), output=hours%24+":"+mins;
        const next_time = current_time;
        return (
            <div>
                <h2>current_time : {current_time}</h2>
                <div>
                    <input value={this.setState} name="" placeholder="Set the time for alarm" />
                </div>
                <h2>next_time : {next_time}</h2>
                <p>hours : {hours}</p>
            </div>
        );
    }
}
//setInterval(ScheduleDate, 1000);

//ReactDOM.render(<input value="hi" />, mountNode);
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(element,  document.getElementById('root'));
ReactDOM.render(element3, document.getElementById('anchor'));
ReactDOM.render(element2, document.getElementById('root2'));
ReactDOM.render(element4, document.getElementById('asdf'));
ReactDOM.render(element5, document.getElementById('parag'));
ReactDOM.render(element6, document.getElementById('e6'));
//ReactDOM.render(element7, document.getElementById('e7'));
// ReactDOM.render(element8, document.getElementById('e8'));
ReactDOM.render(element9, document.getElementById('e9'));
//ReactDOM.render(element10, document.getElementById('prop-elem'));
//ReactDOM.render(element12, document.getElementById('e12'));
ReactDOM.render(element13, document.getElementById('e13'));
ReactDOM.render(<App2 />, document.getElementById('e14'));
// ReactDOM.render(
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author}
//     />,
//     document.getElementById('e15')
//   );
ReactDOM.render(<Clock date={new Date()} />, document.getElementById('e18'));
ReactDOM.render(<Clock2 date={new Date()} />, document.getElementById('e19'));
ReactDOM.render(<Clock3 />, document.getElementById('e20'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();  commented
ReactDOM.render(<Lifecycleclock />, document.getElementById('e21'));
ReactDOM.render(<ClockApp />, document.getElementById('e22'));
ReactDOM.render(<ActionLink />, document.getElementById('e23'));
ReactDOM.render(<Toggle />, document.getElementById('e24'));
ReactDOM.render(<LoginButton />, document.getElementById('e25'));
ReactDOM.render(<LoggingButton />, document.getElementById('e26'));
ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById('e27'));
ReactDOM.render(<LoginBtn />, document.getElementById('e28'));
ReactDOM.render(<LogoutBtn />, document.getElementById('e29'));
ReactDOM.render(<LoginControl />, document.getElementById('e30'));
ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('e31'));
//ReactDOM.render(<Ifelse isLoggedIn={? 'currently' : 'not'}/>, document.getElementById('e32'));
ReactDOM.render(<Page />, document.getElementById('e33'));
ReactDOM.render(<ul>{listItems0}</ul>, document.getElementById('e34'));
ReactDOM.render(<NumberList2 numbers2={numbers2} />, document.getElementById('e35'));
ReactDOM.render(<NumberList3 numbers3={numbers3} />, document.getElementById('e36'));
ReactDOM.render(<NumberList4 numbers4={numbers4} />, document.getElementById('e37'));
ReactDOM.render(<NameForm />, document.getElementById('e38'));
ReactDOM.render(<SelectForm  />, document.getElementById('e39'));
ReactDOM.render(<Blog posts={posts}/>, document.getElementById('e40'));
ReactDOM.render(<Reservation />, document.getElementById('e41'));
ReactDOM.render(<Calculator />, document.getElementById('e42'));
ReactDOM.render(<TemperatureCalculator />, document.getElementById('e43'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('e44'));
ReactDOM.render(<SplitPaneApp />, document.getElementById('e45'));
ReactDOM.render(<DialogContent />, document.getElementById('e46'));
ReactDOM.render(<SignUpDialog />, document.getElementById('e47'));
ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('e48'));
ReactDOM.render(<FormatDate date={new Date()}/>, document.getElementById('e49'));
ReactDOM.render(<ScheduleDate date = {new Date()} />, document.getElementById('e50'));