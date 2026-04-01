
function App() {
  let Items = ["apple", "banana", "guava"];
  return <>
    {Items.map(item => <li key={item}>{item}</li>)}
  </>
}

export default App;