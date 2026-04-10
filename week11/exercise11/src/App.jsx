import './App.css'

function SimpleCard({title, content}) {
    return (
        <div>
            <h2>(title)</h2>
            <p>(content)</p>
        </div>
    );
}

function App() {
  return 
  <div><h1>Hello React</h1>
  <SimpleCard title="Hi Hi Hi" content="this is my first react project"></SimpleCard>
  </div>
}

export default App
