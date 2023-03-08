import React from 'react';
import './App.css';

function App() {

  const font_plus = () => {
    var elements = document.querySelectorAll(" h1, h2, h3, h4, h5, h6, p, li, a, b, th, tr, td, span");
    var fs;
    for(let i = 0; i<elements.length; i++){
      fs = window.getComputedStyle(elements[i]).fontSize.replace('px', '');
      fs ++;
      // if(a[i].style.fontSize){
        elements[i].style.fontSize = fs + 'px' 
      // }
    }
  }
  const font_minus = () => {
    var a = document.querySelectorAll(" h1, h2, h3, h4, h5, h6, p, li, a, b, th, tr, td, span ");
    var fs;
    for(let i = 0; i<a.length; i++){
      fs = window.getComputedStyle(a[i]).fontSize.replace('px', '');
      fs --;
      a[i].style.fontSize = fs + 'px' 
    }
  }

  return (
    <React.Fragment>
      <div className='App'>
        <button onClick={font_plus}>Click To Increase</button>
        <h1>Hey Man Hey</h1>
        <h2>Hey Man Hey</h2>
        <h3>Hey Man Hey</h3>
        <p>Hey Man Hey</p>
        <span>Hey Man Hey</span>
        <p>
          mohamed khaled saad
          
        </p>
        <button onClick={font_minus}>Click To Decrease</button>
      </div>
    </React.Fragment>
  );
}

export default App;
