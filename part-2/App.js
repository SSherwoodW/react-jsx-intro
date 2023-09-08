const App = () => (
    <div>
        <Tweet
            username="steve-o"
            name="Steve"
            date="September 8, 2021"
            message="Just dug my own grave with a douche"
        />
        <Tweet
            username="steve-o"
            name="Steve"
            date="September 8, 2022"
            message="Just took a dump in my grave"
        />
        <Tweet
            username="ronmunchin"
            name="Ronald"
            date="September 11, 1983"
            message="Just destroyed the economy by accident, oops"
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
