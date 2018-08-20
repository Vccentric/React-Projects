/**
 * Notes v1.0.0
 * This is a basic notes app built with React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// list of sample notes data
const data = [
    { title: 'note title 1', text: 'this is text inside the notes. 32kjb32k 3j2h3kj2 3hk2j3hj32 k3hk23jh23 3kjhk' },
    { title: '', text: 'this is text inside the notes. nk2uiduh h32 k32h kj3jhk323h kjhkhkh322dkjk' },
    { title: 'note title 2', text: 'this is text inside the notes. fdkfk fhkhek kejhekhek jkewhkehkehew' },
    { title: 'note title 3', text: 'this is text inside the notes. fdjkhehkbekweb jkfdhjkdfs kfkfbkkkbj' },
    { title: '', text: 'this is text inside the notes. lsfljdljldfdfl' }
];

// notes container component
class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createForm = this.createForm.bind(this);
        this.createFormSubmit = this.createFormSubmit.bind(this);
        this.createFormClose = this.createFormClose.bind(this);
        this.state = { // default values
            mode: 'list'
        };
        this.notes = (this.props.data) ? this.props.data : [];
    }

    // function to handle create button
    createForm(event) {
        this.setState({ mode: 'create' });
    }

    // function to handle create form submit
    createFormSubmit(event, note) {
        this.notes.push(note);
        this.setState({ mode: 'list' });
    }

    // function to handle closing the create form
    createFormClose(event) {
        this.setState({ mode: 'list' });
    }

    render() {
        let element = null;

        // check which view to render
        switch (this.state.mode) {
            case 'create':
                element = (
                    <NoteForm
                        handleCreateFormSubmit={this.createFormSubmit}
                        handleCreateFormClose={this.createFormClose}
                    />
                );
                break;
            case 'list':
            default:
                element = (
                    <div>
                        <h1>Notes:</h1>
                        <button id="create" onClick={this.createForm}>Create</button>
                        <NotesListing data={this.notes} />
                    </div>
                );
                break;
        }

        // render view
        return (
            <fieldset id="notes-container">{element}</fieldset>
        );
    }
}

// note form component
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        this.submit = this.submit.bind(this);
        this.close = this.close.bind(this);
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
    clear(event) {
        this.setState({ value: '' });
    }

    // function to submit and create a new note from the data in the textarea
    submit(event) {
        // defensive check
        if (this.state.value !== '') { // cannot be empty
            let note = {
                title: '',
                text: this.state.value
            };
            this.props.handleCreateFormSubmit(event, note);
        }
    }

    // function to close the create form
    close(event) {
        this.props.handleCreateFormClose(event);
    }

    render() {
        return (
            <fieldset>
                <label>Create Form:</label>
                <br />
                <textarea
                    name="input-1"
                    maxLength="1000"
                    rows="40"
                    cols="100"
                    style={{ resize: 'none' }}
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder != undefined ? this.props.placeholder : 'Enter Text'}
                    readOnly={this.state.readOnly}
                ></textarea>
                <br />
                <div>
                    <button onClick={this.close}>Close</button>
                    {!this.state.readOnly && <button onClick={this.clear}>Clear</button>}
                    {!this.state.readOnly && <button onClick={this.submit}>Submit</button>}
                </div>
            </fieldset>
        );
    }
}

// notes listing component
function NotesListing(props) {
    let listing = props.data.map((note, index) => {
        let text = (note && note.title !== '') ? note.title : note.text;
        return <ListItem key={index} text={text} />
    });
    return (
        <fieldset>
            <ul>{listing}</ul>
        </fieldset>
    );
}

// list item component
function ListItem(props) {
    return <li>{props.text}</li>;
}

// initialize and render on the page
ReactDOM.render(
    <NotesContainer data={data} />,
    document.getElementById('root')
);