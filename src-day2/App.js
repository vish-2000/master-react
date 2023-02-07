import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Student from './ClassComponents/Student.class';
import Teacher from './FunctionComponent/Teacher.function';
import JsxComponent from './JSX/NormalJSX';
import NonJsxComponent from './JSX/NonJSX';

function App() {
  return (
    /*<>
      <Card1 
        title='C# Developer'
        img='https://www.w3schools.com/w3css/img_avatar4.png'
        name='Sarani Bandyopadhyay'
        dept='Backend'
      />

      <br/>
      <h2>Responsive Column Card</h2>
      <p>Resize the browser window</p>
      <div className="row">
        <Card2
          title='React'
          txt1='Component'
          txt2='Redux'
        />
        <Card2
          title='Angular'
          txt1='Module'
          txt2='Service'
        />
        <Card2
          title='Vue'
          txt1='Design'
          txt2='Vuex'
        />
        <Card2
          title='ES6'
          txt1='MAP()'
          txt2='REDUCE()'
        />
      </div>

      <br/>

      <Card1 
        title='Java Developer'
        img='https://www.w3schools.com/howto/img_avatar.png'
        name='Vishesh Agarwal'
        dept='Backend'
       />

    </>*/

    /*<>
      <Student />

      <Teacher />
    </>*/

    <>
      <JsxComponent />
      <br />
      <NonJsxComponent />
    </>

  );
}

export default App;
