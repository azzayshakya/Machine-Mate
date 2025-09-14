import { useState } from "react";

const ModernNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = {
    product: {
      label: "Product",
      items: [
        { name: "Demo", href: "#", description: "Try our live demo" },
        { name: "Features", href: "#", description: "Explore all features" },
        { name: "Documentation", href: "#", description: "Technical guides" },
        { name: "Pricing", href: "#", description: "View pricing plans" },
      ],
    },
    company: {
      label: "Company",
      items: [
        {
          name: "About Us",
          href: "about-us",
          description: "Our story and mission",
        },
        {
          name: "Our Startups",
          href: "our-startups",
          description: "Portfolio companies",
        },
        {
          name: "Research Papers",
          href: "research-papers",
          description: "Latest research",
        },
        {
          name: "Careers",
          href: "join-our-team",
          description: "Join our team",
        },
      ],
    },
    blogs: {
      label: "Tech Blogs",
      items: [
        {
          name: "Machine Learning",
          href: "machine-learning-blog",
          description: "ML insights & tutorials",
        },
        {
          name: "Deep Learning",
          href: "deep-learning-blog",
          description: "Neural networks & AI",
        },
        {
          name: "Python",
          href: "python-blog",
          description: "Python programming",
        },
        {
          name: "Data Science",
          href: "data-science-blog",
          description: "Analytics & insights",
        },
      ],
    },
    mathematics: {
      label: "Mathematics",
      items: [
        {
          name: "Linear Algebra",
          href: "#",
          description: "Vectors & matrices",
        },
        { name: "Calculus", href: "#", description: "Derivatives & integrals" },
        { name: "Probability", href: "#", description: "Statistical theory" },
        { name: "Statistics", href: "#", description: "Data analysis methods" },
      ],
    },
  };

  const handleDropdownEnter = (key) => {
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
              <span className="text-lg font-bold text-white">kb</span>
            </div>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-2xl font-bold text-transparent">
              kbDoc
            </span>
          </div>

          <div className="hidden items-center space-x-1 lg:flex">
            <a
              href="home"
              className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
            >
              Home
            </a>

            {Object.entries(menuItems).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(key)}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 rounded-lg px-4 py-2 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600">
                  <span>{menu.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 top-full w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 ${
                    activeDropdown === key
                      ? "visible translate-y-0 transform opacity-100"
                      : "invisible -translate-y-4 transform opacity-0"
                  }`}
                >
                  <div className="p-6">
                    <h3 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                      <div className="mr-3 h-2 w-2 rounded-full bg-cyan-500"></div>
                      {menu.label}
                    </h3>
                    <div className="space-y-1">
                      {menu.items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="group block rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50"
                        >
                          <div className="font-semibold text-gray-900 transition-colors group-hover:text-cyan-600">
                            {item.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
                    <p className="text-center text-sm text-white">
                      Explore more in {menu.label.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden transform rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl lg:block">
              Purchase
            </button>

            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-cyan-600 lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 border-t border-gray-100 py-4">
            <a
              href="#"
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-cyan-600"
            >
              Home
            </a>

            {Object.entries(menuItems).map(([key, menu]) => (
              <div
                key={key}
                className="border-b border-gray-50 last:border-b-0"
              >
                <div className="mb-2 rounded-lg bg-gray-50 px-4 py-3 font-semibold text-gray-900">
                  {menu.label}
                </div>
                <div className="mb-4 space-y-1 pl-8">
                  {menu.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2 text-gray-600 transition-colors hover:text-cyan-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white shadow-lg">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
