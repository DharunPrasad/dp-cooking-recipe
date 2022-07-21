import { createContext, useReducer } from "react";

//Creating a context
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
        return {...state, mode : action.payload}
    default:
      return state;
  }

  
};

//Creating a component that will be used to wrap our app
//Withing this component we can create a provider that will wrap the rest of the app using the children prop
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#5b249c",
    mode : "light"
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (theme) => {
    dispatch({type : "CHANGE_MODE", payload : theme})
  }
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
