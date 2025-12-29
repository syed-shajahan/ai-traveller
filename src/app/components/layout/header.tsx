import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          🌍 AI Traveler
        </Link>

        {/* Right section */}
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground "
          >
            Trips
          </Link>

          <ThemeToggle />
        </nav>

      </div>
    </header>
  );
}
