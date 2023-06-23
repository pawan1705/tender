import './TestComponent.css';


function TestComponent(props) {
  return (<div id="test">
    <h1>TestComponent section</h1>
    <h2>Add Result</h2>
    <p>a={props.a}</p>
    <p>b={props.b}</p>
    <p>add ={props.a+props.b}</p>
    </div>
  );
}
export default TestComponent;
