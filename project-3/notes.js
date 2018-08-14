/**
 * Notes v1.0.0
 * This is a basic notes app built with React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// notes form component
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        this.create = this.create.bind(this);
        this.state = {
            value: '',
            readOnly: false
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
                <textarea
                    name="input-1"
                    maxLength="1000"
                    rows="40"
                    cols="100"
                    style={{ resize: 'none' }}
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    readOnly={this.state.readOnly}
                ></textarea>
                {!this.state.readOnly &&
                    <div>
                        <button onClick={this.clear}>Clear</button>
                        <button onClick={this.create}>Enter</button>
                    </div>
                }
            </fieldset>
        );
    }
}

// initialize and render on the page
ReactDOM.render(
    <NoteForm placeholder="Enter Text" />,
    document.getElementById('root')
);