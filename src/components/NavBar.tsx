import Link from "next/link";
import Image from "next/image";


export function NavBar() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/mg-logo.jpeg" alt="MG Labs" width={48} height={48} className="rounded" />
          <span className="text-xl font-bold text-primary">MG Laboratories</span>
        </Link>
        <nav className="flex space-x-4">
          <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
          <Link href="/products" className="text-sm font-medium hover:underline">Products</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
