const App = () => (
    <div>
        <Person
            name="Douuuuuuug"
            age={16}
            hobbies={["Singing", "Guitar", "Eating"]}
        />
        <Person
            name="Ron"
            age={19}
            hobbies={["Being pervy", "Lying", "Cheating"]}
        />
        <Person
            name="Albus Dumbledore"
            age={390}
            hobbies={[
                "Saving Harry",
                "Winning the long game",
                "Getting really really old",
            ]}
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
