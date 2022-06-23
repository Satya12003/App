import Addtodo from './components/Addtodo'
import Listtodo from './components/Listtodo'
import Count from './components/Counttodo'
import { useState } from "react";
import Addusers from './components/Addusers';
import Userslist from './components/Userslist';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-4"><Addtodo  /></div>
        <div className="col-sm-4"><Listtodo /></div>
        <div className="col-sm-4"><Count  /></div>
      </div>
      <div className="row">
        <div className="col-sm-6"><Addusers  /></div>
        <div className="col-sm-6"><Userslist /></div>
      </div>
    </div>
  );
}

export default App;
