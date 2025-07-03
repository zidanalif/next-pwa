"use client";
import { usePathname } from "next/navigation";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/CartIcon";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import WishlistIcon from "../icons/WishlistIcon";
import Link from "next/link";

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="bottom-tabbar">
      <div className="bottom-tabbar-full">
        <nav>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link
            href="/search"
            className={pathname === "/search" ? "active" : ""}
          >
            <SearchIcon />
            <span>Search</span>
          </Link>
          <Link href="/cart" className={pathname === "/cart" ? "active" : ""}>
            <CartIcon />
            <span>Cart(2)</span>
          </Link>
          <Link
            href="/wishlist"
            className={pathname === "/wishlist" ? "active" : ""}
          >
            <WishlistIcon />
            <span>Wishlist</span>
          </Link>
          <Link
            href="/account"
            className={pathname === "/account" ? "active" : ""}
          >
            <AccountIcon />
            <span>Account</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
