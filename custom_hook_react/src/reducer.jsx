import { useReducer } from "react";
const initialState = {
  count: 0,
};
function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="w-full h-screen bg-cyan-900 flex justify-center items-center">
      <div className="w-72 bg-gray-900 rounded  text-white p-4">
        <div className="mb-2 flex flex-col justify-center items-center">
          <div>
            <h1 className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent ">
              Counter APP using UseReducer
            </h1>
          </div>
          <div className="my-4">
            <h3 className="font-bold text-2xl">Count: {state.count}</h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent px-4 py-0.5 font-bold rounded-md bg-gray-700"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Add
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent px-4 py-0.5 font-bold rounded-md bg-gray-700"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Subt
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent px-4 py-0.5 font-bold rounded-md bg-gray-700"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
