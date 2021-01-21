import {createContext} from "react";
import Themes from "./Themes";


const ThemeContext = createContext(Themes.light);

export default ThemeContext;