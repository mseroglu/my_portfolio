import { useTheme } from "next-themes"


const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="flex items-center justify-between px-10 py-2 mt-12 h-16 max-w-5xl mx-auto ">
      <span></span>
      <button 
      className="px-6 py-2 text-white bg-pink-600 rounded-md font-semibold"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>
    </header>
  )
}

export default Header
