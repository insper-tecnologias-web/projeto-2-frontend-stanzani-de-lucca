import MoodyLogo from "@/assets/moody.svg";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-center py-6">
      <img src={MoodyLogo} alt="Moody." />
    </header>
  )
}

export default Navbar