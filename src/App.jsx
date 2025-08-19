import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react";

function App() {

    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });

  const inputIsValid = () => {
    if( userInput.duration >=1 &&  userInput.duration < 20){
      return true;
    } else{
      return false;
    }
  };

    function handleChange(inputIdentifier, newValue){
      setUserInput(prevUserInput =>{
          return{
              ...prevUserInput,

              // By default in JS data returned with .value is a string
              // adding the + before newValue forces the conversion to int
              [inputIdentifier]: +newValue 
          };
      });
  }
  return (
    <>
    <Header />

    {/* NOTE ON PASSING STATE:
    We are able to pass a pointer to a handleChange function to the Component. It doesn't feel like running this 
    function in the child component will update the object in the App.jsx but it does. */}
    <UserInput onChangeInput={handleChange} userInput={userInput}/>
    {inputIsValid() ? <Result userInput = {userInput}/> : <p className="center">Please enter duration between 1-20</p>}
    </>
  )
}

export default App
