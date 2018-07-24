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
            'lastName': '',
            'email': '',
            'password': ''
        }
    }

    // function to handle input change
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    // function to handle form submit
    handleFormSubmit(e) {
        e.preventDefault();

        // validate input fields
        let results = this.validate();
        let msg = '';
        if (results && results.pass) { // pass
            msg = "These were the values submitted into the Signup Form:\n";
            for (let field in this.state) {
                msg += "- " + field + ': ' + this.state[field] + '\n';
            }
        } else { // fail
            msg = "Error:\n";
            for (let i = 0; i < results.errorMessages.length; i++) {
                msg += results.errorMessages[i];
            }
        }

        // display message
        alert(msg);
    }

    // function to handle input validations
    validate(data) {
        let results = { // default values
            'pass': true,
            'errorMessages': []
        };

        // check if input field is empty
        for (let field in this.state) {
            let value = this.state[field];
            if (value === '') {
                let error = "- the field: " + field + ', is required.\n';
                results.errorMessages.push(error);
                results.pass = false;
            }
        }
        return results;
    }

    render() {
        return (
            <fieldset>
                <form onSubmit={this.handleFormSubmit}>
                    <h3>Signup Form</h3>
                    <InputField
                        type='text'
                        name='firstName'
                        label='First Name'
                        value={this.state.firstName}
                        handleInputChange={this.handleInputChange}
                    />
                    <InputField
                        type='text'
                        name='lastName'
                        label='Last Name'
                        value={this.state.lastName}
                        handleInputChange={this.handleInputChange}
                    />
                    <InputField
                        type='text'
                        name='email'
                        label='Email'
                        value={this.state.email}
                        handleInputChange={this.handleInputChange}
                    />
                    <InputField
                        type='password'
                        name='password'
                        label='Password'
                        value={this.state.password}
                        handleInputChange={this.handleInputChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </fieldset>
        );
    }
}

// input field component
class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // function to handle input change
    handleInputChange(e) {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.label}: </label>
                <br />
                <input
                    type={this.props.type}
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleInputChange}
                    placeholder={this.props.label}
                />
                <br /><br />
            </div>
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