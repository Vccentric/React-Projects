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
    }

    render() {
        return (
            <fieldset>
                <SearchBar />
                <ProductTable />
            </fieldset>
        );
    }
}

// search bar component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
                <input type="text" name="search" placeholder="Search..." />
                <br />
                <input type="checkbox" name="inStockOnly" id="inStockOnly" />
                <label htmlFor="inStockOnly">Only show products in stock</label>
            </fieldset>
        );
    }
}

// product table component
function ProductTable(props) {
    return (
        <fieldset>
            <table>
                <thead>
                    <tr>
                        <th><b>Name</b></th>
                        <th><b>Price</b></th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow />
                    <ProductRow />
                </tbody>
            </table>
        </fieldset>
    );
}

// product category row component
function ProductCategoryRow(props) {
    return (
        <tr>
            <td colSpan="2"><b>Product Category</b></td>
        </tr>
    );
}

// product row component
function ProductRow(props) {
    return (
        <tr>
            <td>Product Name</td>
            <td>Product Price</td>
        </tr>
    );
}

// app component
function App() {
    return <FilterableProductTable />;
}

// initialize and render on the page
ReactDOM.render(
    <App />,
    document.getElementById('root')
);