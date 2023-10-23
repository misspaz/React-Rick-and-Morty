export default function ChangeTheme() {
    const changeTheme = () => {
        document.body.className = document.body.className === "dark-theme" ? "light-theme" : "dark-theme"
    }
    return <button className="b-btn" onClick={changeTheme}>
        Cambiar tema
    </button>
}