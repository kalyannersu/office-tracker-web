import Container from '@/components/Container';

export const metadata = { title: 'Support — Office Tracker' };

const faqs = [
  {
    q: 'How do I start tracking?',
    a: 'Open the app and tap either Office or WFH on the home tab. The timer starts immediately. Tap Swipe Out when you finish.',
  },
  {
    q: 'I forgot to swipe out yesterday. What happens?',
    a: 'The session stays open. Open the app, tap Swipe Out, and adjust the end time on the next update of the app. We recommend swiping out before your phone screen locks the next morning to avoid an unreasonably long session.',
  },
  {
    q: 'Why am I not getting notifications?',
    a: 'iOS controls notification permissions per app. Go to iOS Settings → Office Tracker → Notifications and make sure they are allowed. In the app, Settings → Shift Settings → Notifications must also be on.',
  },
  {
    q: 'My shift starts at 9 AM but the reminder fires too early. How do I fix it?',
    a: 'In Settings → Shift Settings, set your Shift Start time using the picker. The pre-shift reminder fires that many minutes before — adjust the "Pre-shift Reminder" value to taste.',
  },
  {
    q: 'I deleted a session by mistake. Can I get it back?',
    a: 'No — deletion is permanent. We do not keep a recently-deleted bin. Long-press deletes intentionally require holding for a moment, but if it happens, simply re-create the session (this manual-add feature is coming in the next update).',
  },
  {
    q: 'How do I switch to dark mode?',
    a: 'Settings → Appearance. Choose System (follows iOS), Light, or Dark.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Settings → Account → Delete Account. You will be asked for your password and need to type DELETE to confirm. This action is irreversible.',
  },
  {
    q: 'Does the app work offline?',
    a: 'Mostly yes. Once you have signed in and loaded your history, you can swipe in/out without connectivity. Data syncs to Firestore once connection returns.',
  },
];

export default function SupportPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Support</h1>
      <p className="mb-6" style={{ color: 'var(--muted)' }}>
        Most answers below. For anything else, email{' '}
        <a href="mailto:nersukalyan77@gmail.com" style={{ color: 'var(--accent)' }}>
          nersukalyan77@gmail.com
        </a>{' '}
        — we respond within 24-48 hours.
      </p>
      <hr className="my-6" style={{ borderColor: 'var(--line)' }} />

      <h2 className="text-xl font-bold mb-4">Frequently asked</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="rounded-xl border p-4"
            style={{ borderColor: 'var(--line)' }}
          >
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {f.a}
            </p>
          </details>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-12 mb-3">Still stuck?</h2>
      <p style={{ color: 'var(--muted)' }}>
        Send an email to{' '}
        <a href="mailto:nersukalyan77@gmail.com" style={{ color: 'var(--accent)' }}>
          nersukalyan77@gmail.com
        </a>{' '}
        with:
      </p>
      <ul className="mt-2 text-sm list-disc pl-5 space-y-1" style={{ color: 'var(--muted)' }}>
        <li>Your iOS version and device model.</li>
        <li>What you tried and what you saw.</li>
        <li>A screenshot, if relevant.</li>
      </ul>
    </Container>
  );
}
