import VList from "./components/vlist";

let data = [];
for (let id = 0; id < 100; id++) {
    data.push({
        id
    });
}

export default function App() {
    return (
        <div className="App">
            <VList list={data}></VList>
        </div>
    );
}
