import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-md text-white text-sm"
            style={{ background: 'var(--accent)' }}
          >
            OT
          </span>
          <span>Office Tracker</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm" style={{ color: 'var(--muted)' }}>
          <Link href="/support" className="hover:opacity-80">Support</Link>
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
