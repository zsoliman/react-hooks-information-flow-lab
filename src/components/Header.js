const Header = ({ onDarkModeClick, isDarkMode }) => {
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {isDarkMode ? "dark" : "light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;