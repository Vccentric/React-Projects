/**
 * Signup v1.0.0
 * This is a signup page built using React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// signup form component
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            'firstName': '',
            'lastName': ''
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let msg = "These were the values submitted into the Signup Form:\n";
        for (let field in this.state) {
            msg += "- " + field + ': ' + this.state[field] + '\n';
        }
        alert(msg);
    }

    render() {
        return (
            <fieldset>
                <form onSubmit={this.handleFormSubmit}>
                    <h3>Signup Form</h3>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    <br /><br />
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </fieldset>
        );
    }
}

// app component
function App() {
    return <SignupForm />;
}

// initialize and render on the page
ReactDOM.render(
    <App />,
    document.getElementById('root')
);