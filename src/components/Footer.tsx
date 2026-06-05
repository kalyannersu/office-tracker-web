import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--line)' }}>
      <div
        className="max-w-5xl mx-auto px-5 py-8 text-sm flex flex-wrap items-center justify-between gap-3"
        style={{ color: 'var(--muted)' }}
      >
        <p>© {new Date().getFullYear()} UnderlineIT · Office Tracker</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
          <Link href="/support" className="hover:opacity-80">Support</Link>
          <Link href="/delete-account" className="hover:opacity-80">Delete account</Link>
        </div>
      </div>
    </footer>
  );
}
