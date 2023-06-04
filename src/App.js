import {useState} from "react"
import './App.css';
import Box from "./component/Box"


//1 create two boxes. (title, img, result value)
//2 paper scissors rock button
//3 Button click = show on box
//4 Computer randomly picks the item
//5. using value of 3 4 , define winner.
//6. Loss = red, win= green , tie = black box color change.

const choice = {
  rock:{
    name:"Rock",
    img:"https://i.pinimg.com/736x/9d/bb/14/9dbb14a92a7611794f3e5a0c80e4bad6.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.mercurius.com.au/cdn/shop/products/childrens-scissor-right-13cm-round-tip-35520100_700x700.jpg?v=1676283413"
  },
  paper:{
    name:"Paper",
    img:"https://neal.fun/share-cards/paper.png"
  },
}
function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState("")
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer)=>{
    console.log("user", user, "computer", computer)

    // if (user.name == computer.name){
    //   return "tie"
    // }else if(user.name == "Paper")
    //   return computer.name=="Rock"?"win":"lose";
    // else if(user.name == "Rock")
    //   return computer.name=="Scissors"?"win":"lose";
    // else if(user.name == "Scissors")
    //   return computer.name=="Paper"?"win":"lose";

    if (user.name == computer.name){
      return "tie"
    }else if(user.name == "Paper")
      return computer.name=="Rock"?"win":"lose";
    else if(user.name == "Rock")
      return computer.name=="Scissors"?"win":"lose";
    else if(user.name == "Scissors")
      return computer.name=="Paper"?"win":"lose";
   

    // if (result.user == "win"){
    //   result.computer = "lose"
    // }


    // if (user.name == computer.name){
    //   return "tie"
    // } else if(user.name == "Paper"){
    //   if(computer.name == "Rock"){
    //   return "win"
    //   }else {
    //     return "lose"
    //   }
    // }

    // if (userChoice = scissors && computerChoice = rock){
    //   result = lose
  }

  const randomChoice = ()=>{
    let itemArray = Object.keys(choice) //객체의 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random value",randomItem)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return(
  <div>
    <div className="main">
    <Box title="You" item={userSelect} result={result}/>
    <Box title="Computer" item={computerSelect} result={result}/>
   </div>

   <div className="buttons">
    <button onClick={() => play("scissors")}>Scissor</button>
    <button onClick={() => play("rock")}>Rock</button>
    <button onClick={() => play("paper")}>Paper</button>
   </div>

  </div>
)};

export default App;
