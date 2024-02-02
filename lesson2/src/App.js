import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';


function App() {
  const [ show, setShow ] = useState(false);

  const [ input, setInput ] = useState('');

  console.log(input, 'input');
  const handleShow = () => setShow(!show);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };


  return (
    <div>
      <CountPage/>
      {/*<User name={'Bakyt'} age={18}/>*/}
      <h1>{input}</h1>
      <Input placeholder={'name'} type={'text'} onChangeInput={onChangeInput}/>

      {
        show && <Modal handleShow={handleShow}>
          <h1>Content</h1>
        </Modal>
      }
      <button onClick={handleShow}>открыть</button>
    </div>
  );
}


export default App;
