const App = () => (
    <div>
        <FirstComp />
        <NamedComp name="Scott" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
