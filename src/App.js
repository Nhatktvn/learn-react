import FetchingData from "./components/advanced-react/hoc/FetchingData";
import BlogPage from "./components/learnRouter/BlogPage";
import BlogPageDetail from "./components/learnRouter/BlogPageDetail";
import Nav from "./components/learnRouter/Nav";
import ProfilePage from "./components/learnRouter/ProfilePage";
import "./reset.scss";
import { Routes, Route } from "react-router-dom";
// const CountContext = createContext();
// function CountProvider(props) {
//   const [count, setCount] = useState(0);
//   const value = [count, setCount];
//   return (
//     <CountContext.Provider value={value} {...props}></CountContext.Provider>
//   );
// }
// function CountDisplay() {
//   const [count] = useContext(CountContext);
//   return <div>The count is: {count}</div>;
// }
// function Counter() {
//   const [, setCount] = useContext(CountContext);
//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       onClick={increment}
//       className="p-2 bg-blue-500 rounded-lg text-white font-medium"
//     >
//       Increment
//     </button>
//   );
// }

function App() {
  return (
    <div>
      <FetchingData></FetchingData>
    </div>
  );
}

export default App;
