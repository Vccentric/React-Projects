/**
 * Notes v1.0.0
 * This is a basic notes app built with React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// input field component
class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        this.create = this.create.bind(this);
        this.state = {
            value: ''
        };
    }

    // function to handle changes in the textarea
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    // function to clear/empty the textarea
    clear() {
        this.setState({ value: '' });
    }

    // function to create a new note from the data in the textarea
    create() {
        // todo
    }

    render() {
        return (
            <fieldset>
                <textarea value={this.state.value} onChange={this.handleChange} placeholder="Enter Text"></textarea>
                <div>
                    <button onClick={this.clear}>Clear</button>
                    <button onclick={this.create}>Enter</button>
                </div>
            </fieldset>
        );
    }
}

// initialize and render on the page
ReactDOM.render(
    <InputField />,
    document.getElementById('root')
);