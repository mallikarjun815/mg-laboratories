import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
          <Link href="/products/nitomin" className="hover:underline">NITOMIN</Link>
          <Link href="/products/adipolin" className="hover:underline">ADIPOLIN</Link>
          <Link href="/products/endorelief" className="hover:underline">ENDORELIEF</Link>
          <Link href="/products/emthik" className="hover:underline">EMTHIK</Link>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} MG Laboratories Private Limited</p>
      </div>
    </footer>
  );
}
