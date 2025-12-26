import logo from "@/assets/logo.svg";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "shop", href: "#product" },
    { label: "Message", href: "#message" },
    { label: "Cart", href: "#cart" },
    { label: "Account", href: "#account" },
    { label: "Sell", href: "#register" },
  ];

  const navLink =
    " text-xl  hover:text-blue-600 transition-colors font-medium";

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-auto h-24" />
          </div>

          {/* Nav links */}
          <div className=" md:flex px-8 items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={navLink}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
