/**
 * ProductTable v1.0.0
 * This is a searchable product table data table using React.js
 *
 * @author      Christopher Viray
 * @copyright   (c) 2018 Christopher Viray
 * @license     MIT
 * @version     1.0.0
 */

// list of product data
const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

// filterable product table component
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handleInStockCheckboxChange = this.handleInStockCheckboxChange.bind(this);
        this.state = {
            'filterText': '',
            'inStock': false
        }
    }

    handleSearchBarChange(e) {
        this.setState({ 'filterText': e.target.value });
    }

    handleInStockCheckboxChange(e) {
        this.setState({ 'inStock': e.target.checked });
    }

    render() {
        let filterList = this.props.products;
        return (
            <fieldset>
                <SearchBar
                    onChangeSearchBar={this.handleSearchBarChange}
                    onChangeInStockCheckbox={this.handleInStockCheckboxChange}
                />
                <ProductTable products={filterList} />
            </fieldset>
        );
    }
}

// search bar component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handleInStockCheckboxChange = this.handleInStockCheckboxChange.bind(this);
    }

    handleSearchBarChange(e) {
        this.props.onChangeSearchBar(e);
    }

    handleInStockCheckboxChange(e) {
        this.props.onChangeInStockCheckbox(e);
    }

    render() {
        return (
            <fieldset>
                <input type="text" name="search" placeholder="Search..." onChange={this.handleSearchBarChange} />
                <br />
                <input type="checkbox" name="inStock" id="inStock" onChange={this.handleInStockCheckboxChange} />
                <label htmlFor="inStock">Only show products in stock</label>
            </fieldset>
        );
    }
}

// product table component
function ProductTable(props) {
    // create table list from products data
    let listItems = props.products.map((product) => {
        return (<ProductRow
            key={product.name}
            name={product.name}
            price={product.price}
            stocked={product.stocked}
        />);
    });
    return (
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th><b>Name</b></th>
                        <th><b>Price</b></th>
                    </tr>
                </thead>
                <tbody>{listItems}</tbody>
            </table>
        </fieldset>
    );
}

// product category row component
function ProductCategoryRow(props) {
    return (
        <tr>
            <td colSpan="2"><b>{props.category}</b></td>
        </tr>
    );
}

// product row component
function ProductRow(props) {
    return (
        <tr>
            <td style={!props.stocked ? { color: 'red' } : {}}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    );
}

// app component
function App() {
    return <FilterableProductTable products={data} />;
}

// initialize and render on the page
ReactDOM.render(
    <App />,
    document.getElementById('root')
);