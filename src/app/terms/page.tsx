import Container from '@/components/Container';

export const metadata = { title: 'Terms of Service — Office Tracker' };

export default function TermsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
      <p className="text-sm" style={{ color: 'var(--muted)' }}>Last updated: June 6, 2026</p>
      <hr className="my-6" style={{ borderColor: 'var(--line)' }} />

      <article className="prose-body">
        <p>
          These Terms govern your use of the Office Tracker app (&quot;the App&quot;), published by
          UnderlineIT (&quot;we&quot;, &quot;us&quot;). By creating an account or using the App, you agree to them.
        </p>

        <h2>1. The service</h2>
        <p>
          Office Tracker is a personal productivity tool that lets you log your work hours and
          shift patterns. It is provided as-is, with no service-level guarantee. The App requires
          an internet connection to sign in and sync; it works offline once data is loaded.
        </p>

        <h2>2. Your account</h2>
        <ul>
          <li>You must provide a real email address to sign up.</li>
          <li>You are responsible for keeping your password confidential.</li>
          <li>You agree not to share, sell, or transfer your account.</li>
          <li>You must be at least 13 years old to use the App.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile, or disassemble the App except to the extent permitted by applicable law.</li>
          <li>Use the App to violate any law or any other party&apos;s rights.</li>
          <li>Attempt to gain unauthorized access to our infrastructure or another user&apos;s data.</li>
          <li>Use the App to send unsolicited communications.</li>
        </ul>

        <h2>4. Your content</h2>
        <p>
          You own the data you enter (work sessions, settings, notes). By using the App, you grant
          us a limited, non-exclusive licence to store, transmit, and display that data only for
          the purpose of operating the App for you. We never use your content for any other purpose.
        </p>

        <h2>5. Account termination</h2>
        <p>
          You can delete your account at any time from within the App (Settings → Delete Account).
          This permanently removes your data; see our <a href="/privacy">Privacy Policy</a>.
          We may suspend or terminate your account if you materially breach these Terms; we will
          give you notice and a chance to remedy where reasonable.
        </p>

        <h2>6. Disclaimer of warranties</h2>
        <p>
          THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
          BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. We do not warrant that the App will be uninterrupted, error-free, or
          that any data loss will not occur.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, in no event will UnderlineIT be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of data,
          profits, or revenue, arising from your use of the App. Our total aggregate liability for
          any claim shall not exceed the amount you paid us in the prior 12 months, which for the
          free version of the App is zero.
        </p>

        <h2>8. Changes to the App and Terms</h2>
        <p>
          We may modify the App at any time. We may update these Terms; material changes will be
          notified in the App or by email. Continued use after an update means you accept the new
          Terms.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These Terms are governed by the laws of India. Any dispute will be subject to the
          exclusive jurisdiction of courts in Vijayawada, Andhra Pradesh, India.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions? Email <a href="mailto:nersukalyan77@gmail.com">nersukalyan77@gmail.com</a>.
        </p>
      </article>
    </Container>
  );
}
