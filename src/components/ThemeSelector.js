import useTheme from "../hooks/useTheme";
import dark from "../assets/dark-mode.svg"
import light from "../assets/light-mode.svg"


import "./ThemeSelector.css"
const ThemeSelector = () => {
    
    const themeColors = ['#58249c','#249c6b','#b70233']
    const {changeColor, changeMode, mode} = useTheme();
    const buttons = document.querySelectorAll(".theme-buttons > div")

    const handleClick = (e, color) => {
        changeColor(color)
        buttons.forEach(button => button.classList.remove("large"))
        e.target.classList.add("large")
    }

    const toggleTheme = () => {
        changeMode(mode === "light" ? "dark" : "light")
    }
    console.log(mode)

    return ( 
<div className="theme-selector">
    <div className="mode-toggle">
        <img src={mode === "light" ? light : dark} alt="dark-light-toggle" onClick={toggleTheme} className="" />
    </div>
    <div className="theme-buttons">
        {themeColors.map(color => (
            <div
            key={color}
            onClick = {(e) => handleClick(e,color)}
            style = {{backgroundColor : color}}
            />
        ))}
    </div>
</div>
     );
}
 
export default ThemeSelector;