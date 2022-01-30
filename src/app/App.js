import './App.css';
import { fakeData } from '../Components/fakeData';
import PostList from '../Components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit Browser</h1>
      </header>
      <PostList posts = {fakeData}/>

    </div>
  );
}

export default App;
