"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CaretDown,
  MagnifyingGlass,
  ShoppingBag,
  List,
  X,
} from "@phosphor-icons/react";
import Button from "./ui/Button";

const navigation = [
  { name: "Home", href: "/", megaMenu: false },
  { name: "About", href: "/about", megaMenu: false },
  { name: "Events", href: "/events", megaMenu: false },
  { name: "Research", href: "/research", megaMenu: false },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="relative text-brown-dark w-full z-50 border-b border-brown-dark/10 bg-[url('/assets/images/background.webp')] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-2 -ml-2 text-brown-dark hover:text-brown-medium transition-colors relative z-50"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
            <Link href="/" className="font-didot text-3xl tracking-tight">
              RUSHABHAYAN
            </Link>
          </div>

          {/* Desktop Navigation & Contact Us */}
          <div className="hidden md:flex flex-1 justify-end space-x-4 text-lg h-full items-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="group h-full flex items-center relative justify-center min-w-[80px]" // Added min-w for equal sizing preference
              >
                <img
                  src="/assets/icons/menu_selected.svg"
                  alt="Selected"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 object-cover"
                />
                <Link
                  href={item.href}
                  className={`inline-flex uppercase items-center font-medium group-hover:font-semibold font-manrope transition-all hover:text-brown-medium relative z-10 h-full  ${
                    pathname === item.href
                      ? "text-brown-darker font-bold"
                      : "text-brown-dark"
                  }`}
                >
                  {item.name}
                  {item.megaMenu && (
                    <CaretDown size={14} className="ml-1 mt-0.5" />
                  )}
                </Link>{" "}
                {/* Mega Menu / Dropdown */}
                {item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-7xl bg-cream-light border-t border-brown-dark/5 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    <div className="mx-auto max-w-7xl px-8 py-12 grid grid-cols-4 gap-2">
                      {item.categories?.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="font-didot text-lg mb-4 text-brown-darker">
                            {category.name}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  href="#"
                                  className="text-brown-medium hover:text-brown-dark transition-colors font-manrope text-sm block"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Featured Section in Menu */}
                      <div className="col-span-1 relative h-64 bg-brown-muted/10 rounded-lg overflow-hidden flex items-end p-6">
                        <div className="relative z-10">
                          <p className="text-brown-dark font-didot text-xl mb-2">
                            New Season
                          </p>
                          <Link
                            href="/new-arrivals"
                            className="text-sm font-manrope font-semibold underline decoration-1 underline-offset-4"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Us Button */}
            <div className="hidden md:block pl-4">
              <Button variant="primary" size="md" className="text-lg">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-cream-light px-6 border-t border-brown-dark/10 overflow-y-auto">
          <div className="flex flex-col space-y-6 pt-6 pb-20">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="border-b border-brown-dark/10 pb-4"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    item.megaMenu &&
                    setActiveSubmenu(
                      activeSubmenu === item.name ? null : item.name,
                    )
                  }
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-didot text-brown-dark"
                    onClick={() => !item.megaMenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.megaMenu && (
                    <CaretDown
                      size={20}
                      className={`transform transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.megaMenu && activeSubmenu === item.name && (
                  <div className="mt-4 pl-4 space-y-4">
                    {item.categories?.map((cat, idx) => (
                      <div key={idx}>
                        <h4 className="font-manrope font-semibold text-brown-medium mb-2">
                          {cat.name}
                        </h4>
                        <ul className="space-y-2 pl-2 border-l border-brown-dark/20">
                          {cat.items.map((subItem) => (
                            <li key={subItem} className="text-brown-muted">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="primary" className="w-full justify-center">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
