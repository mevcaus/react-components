const App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList items={['apples', 'bananas']}/>
    </div>
);

function GroceryList(props) {
    return (
        <ul>
            {props.items.map(item => <GroceryListItem item={item} />)}
        </ul>
    )
}

const GroceryListItem = (prop) => {
    const [isDone, setIsDone] = React.useState(false);
    const style = {
        fontWeight: isDone ? 'bold' : 'none'
    }
    return (
        <li style={style}
        onMouseEnter={() => setIsDone(true)}
        >
            {prop.item}
        </li>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));