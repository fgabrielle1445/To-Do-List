import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function App() {
  // Style for the "Add to list" button
  const btn_style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

  return (
    <div className="App">
      
      <div className="Header">
      <h1>To-Do List</h1>
      </div>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Enter Task" variant="outlined" />
      </form>

      <Button style={btn_style} onClick={() => { alert('clicked') }}>Add to list</Button>

    </div>
  );
}

export default App;
