import Link from 'next/link';
import Container from '@/components/Container';

export default function HomePage() {
  return (
    <Container>
      <section className="text-center pt-6 pb-14">
        <span
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-white text-2xl font-bold mb-6"
          style={{ background: 'var(--accent)' }}
        >
          OT
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Track your work hours, simply.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
          One tap to swipe in. One tap to swipe out. Office or work-from-home, weekly
          summaries, daily targets, automatic reminders. No clutter, no ads.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: 'var(--accent)' }}
          >
            Download on App Store
          </a>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border"
            style={{ borderColor: 'var(--line)' }}
          >
            Get support
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4 mb-16">
        {[
          { t: 'Office or WFH', d: 'Tag every session so you know where the hours went.' },
          { t: 'Smart reminders', d: 'Walk breaks, 6/7/8/9-hour milestones, shift alerts.' },
          { t: 'Weekly insights', d: 'Bars, target lines, ratios — at a glance.' },
        ].map((f) => (
          <div
            key={f.t}
            className="rounded-2xl border p-5"
            style={{ borderColor: 'var(--line)' }}
          >
            <h3 className="font-semibold mb-1">{f.t}</h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>{f.d}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: 'var(--line)' }}>
        <h2 className="text-xl font-bold mb-2">What we don&apos;t do</h2>
        <ul className="text-sm space-y-1.5" style={{ color: 'var(--muted)' }}>
          <li>· No ads. Ever.</li>
          <li>· No analytics SDKs. No tracking.</li>
          <li>· Your data is yours. Delete your account in one tap.</li>
          <li>· No third-party data sharing.</li>
        </ul>
      </section>
    </Container>
  );
}
