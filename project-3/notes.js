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

// note form component
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

// notes listing component
function NotesListing(props) {
    let listing = props.data.map((note, index) => {
        let text = (note && note.title !== '') ? note.title : note.text;
        return <ListItem key={index} text={text} />
    });
    return (
        <fieldset>
            <label>Notes:</label>
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
    <NotesListing data={data} />,
    document.getElementById('root')
);