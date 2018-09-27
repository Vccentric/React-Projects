/**
 * Signup v1.0.0
 * This is a signup page built with React.js
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
            'password': '',
            'isSubmitted': false,
            'gender': 'male',
        }
        this.results = { // submitted results
            'valid': false,
            'data': []
        };
    }

    // function to handle input change
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    // function to handle form submit
    handleFormSubmit(event) {
        event.preventDefault();
        this.validate(); // validate input fields
        this.setState({ 'isSubmitted': true });
    }

    // function to handle input validations
    validate() {
        let valid = true; // default
        this.results.data = []; // reset

        // check first name field
        if (this.state.firstName === '') { // Empty
            valid = false;
            this.results.data.push({ 'name': 'firstName', 'value': 'Empty' });
        } else if (!this.state.firstName.match(/^[a-zA-Z]*$/)) { // Only Letters
            valid = false;
            this.results.data.push({ 'name': 'firstName', 'value': 'Only Letters' });
        }

        // check last name field
        if (this.state.lastName === '') { // Empty
            valid = false;
            this.results.data.push({ 'name': 'lastName', 'value': 'Empty' });
        } else if (!this.state.lastName.match(/^[a-zA-Z]*$/)) { // Only Letters
            valid = false;
            this.results.data.push({ 'name': 'lastName', 'value': 'Only Letters' });
        }

        // check email field
        if (this.state.email === '') {
            valid = false;
            this.results.data.push({ 'name': 'email', 'value': 'Empty' });
        } else if (this.state.email.length < 7) {
            valid = false;
            this.results.data.push({ 'name': 'email', 'value': 'Min of 7 Chars' });
        }

        // check password field
        if (this.state.password === '') {
            valid = false;
            this.results.data.push({ 'name': 'password', 'value': 'Empty' });
        } else if (this.state.password.length < 3) {
            valid = false;
            this.results.data.push({ 'name': 'password', 'value': 'Min of 3 Chars' });
        }

        // check results
        if (valid) {
            this.results.data.push({ 'name': 'firstName', 'value': this.state.firstName });
            this.results.data.push({ 'name': 'lastName', 'value': this.state.lastName });
            this.results.data.push({ 'name': 'email', 'value': this.state.email });
            this.results.data.push({ 'name': 'password', 'value': this.state.password });
            this.results.data.push({ 'name': 'gender', 'value': this.state.gender });
        }
        this.results.valid = valid; // set
    }

    render() {
        return (
            <div>
                <fieldset>
                    <form onSubmit={this.handleFormSubmit}>
                        <h3>Signup Form</h3>
                        <InputField
                            type='text'
                            name='firstName'
                            label='First Name'
                            placeholder='Please enter your first name.'
                            value={this.state.firstName}
                            handleInputChange={this.handleInputChange}
                        />
                        <InputField
                            type='text'
                            name='lastName'
                            label='Last Name'
                            placeholder='Please enter your last name.'
                            value={this.state.lastName}
                            handleInputChange={this.handleInputChange}
                        />
                        <InputField
                            type='text'
                            name='email'
                            label='Email'
                            placeholder='Please enter your email address.'
                            value={this.state.email}
                            handleInputChange={this.handleInputChange}
                        />
                        <InputField
                            type='password'
                            name='password'
                            label='Password'
                            placeholder='Please enter a password.'
                            value={this.state.password}
                            handleInputChange={this.handleInputChange}
                        />
                        <GenderInput
                            value={this.state.gender}
                            handleInputChange={this.handleInputChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </fieldset>
                <br />
                {this.state.isSubmitted && <ResultsTable results={this.results} />}
            </div>
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
                    placeholder={this.props.placeholder}
                    size='50'
                    maxLength="50"
                />
                <br /><br />
            </div>
        );
    }
}

// input field component
class GenderInput extends React.Component {
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
                <label>Gender: </label>
                <br />
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={this.props.value === 'male'}
                    onChange={this.handleInputChange}
                />
                <span>Male</span>
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={this.props.value === 'female'}
                    onChange={this.handleInputChange}
                />
                <span>Female</span>
                <br /><br />
            </div>
        );
    }
}

// results table component
function ResultsTable(props) {
    let items = props.results.data.map((item, index) => {
        return <TableItem key={index} name={item.name} value={item.value} />;
    });
    return (
        <fieldset>
            <h3>{props.results.valid ? 'Results Submitted:' : 'Form Error:'}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </fieldset>
    );
}

// table item component
function TableItem(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    );
}

// initialize and render on the page
ReactDOM.render(
    <SignupForm />,
    document.getElementById('root')
);
