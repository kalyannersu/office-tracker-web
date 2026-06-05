import Container from '@/components/Container';

export const metadata = { title: 'Privacy Policy — Office Tracker' };

export default function PrivacyPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm" style={{ color: 'var(--muted)' }}>Last updated: June 6, 2026</p>
      <hr className="my-6" style={{ borderColor: 'var(--line)' }} />

      <article className="prose-body">
        <p>
          Office Tracker (&quot;the App&quot;) is a personal work-hour tracking app published by
          UnderlineIT. This policy explains what we collect, why, where it&apos;s stored, and how
          you control it. We keep it short because we collect very little.
        </p>

        <h2>1. Information we collect</h2>
        <p>When you use the App, we collect:</p>
        <ul>
          <li><strong>Email address</strong> — used as your sign-in identifier.</li>
          <li><strong>Password</strong> — never stored in plaintext. Handled by Firebase Authentication, which stores only a salted hash.</li>
          <li><strong>Firebase user ID</strong> — a random unique identifier issued at signup, used to scope your data.</li>
          <li><strong>Work session records</strong> — start time, end time, work mode (Office or Work From Home), and notes you optionally create. You enter all of this.</li>
          <li><strong>Shift settings</strong> — your configured shift start/end times and reminder preferences. Stored on your device only.</li>
          <li><strong>Local notification permission status</strong> — managed by iOS; we do not see your push token.</li>
        </ul>
        <p>
          We do <strong>not</strong> collect: name, phone number, contacts, location, camera or photo
          access, health data, biometric data, IP address logs, analytics, advertising identifiers,
          or any device hardware identifiers.
        </p>

        <h2>2. Where your data is stored</h2>
        <ul>
          <li><strong>Authentication credentials</strong> — Google Firebase Authentication.</li>
          <li><strong>Work session records</strong> — Google Cloud Firestore, in a Google-managed datacenter (currently <em>asia-south1</em>, Mumbai).</li>
          <li><strong>Local-only data</strong> (shift settings, theme preference) — stored on your device via Apple&apos;s on-device storage. Never transmitted to us.</li>
        </ul>
        <p>
          Google Firebase is operated by Google LLC under their <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://firebase.google.com/support/privacy">Firebase Privacy</a> commitments. We have a standard customer relationship with Google; no special data-sharing agreement.
        </p>

        <h2>3. How we use your data</h2>
        <ul>
          <li>To let you sign in across devices.</li>
          <li>To show you your own work session history.</li>
          <li>To schedule reminder notifications on your device based on your sessions and shift settings.</li>
        </ul>
        <p>
          We do not profile you, do not infer behavior, do not target ads, and do not sell or share
          your data with anyone.
        </p>

        <h2>4. Third parties</h2>
        <p>
          We use exactly one third-party service: <strong>Google Firebase</strong>, as described above.
          We do not use any analytics SDK, advertising network, crash reporting service, or
          third-party login provider.
        </p>

        <h2>5. Notifications</h2>
        <p>
          All notifications shown by the App are <strong>local notifications</strong> generated on your
          device. We do not send remote push notifications. Your device&apos;s push token is never
          transmitted to our servers.
        </p>

        <h2>6. Data retention</h2>
        <p>
          Your data is retained as long as your account exists. When you delete your account
          (Settings → Delete Account in the app), we permanently and immediately delete:
        </p>
        <ul>
          <li>All your work session records in Firestore.</li>
          <li>Your Firebase Authentication user record.</li>
        </ul>
        <p>
          Deletion is irreversible. There is no &quot;recently deleted&quot; recovery period on our side.
          Google Firebase may retain encrypted system backups for up to 90 days, per their
          standard operations; these are not accessible to us.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Under India&apos;s Digital Personal Data Protection Act (DPDP, 2023), the EU General Data
          Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA) — to the
          extent each applies to you — you have the right to:
        </p>
        <ul>
          <li><strong>Access</strong> the data we hold about you.</li>
          <li><strong>Correct</strong> any inaccuracies.</li>
          <li><strong>Delete</strong> your data (use the in-app deletion, or email us).</li>
          <li><strong>Withdraw consent</strong> at any time by deleting your account.</li>
          <li><strong>Lodge a complaint</strong> with your local data protection authority.</li>
        </ul>
        <p>To exercise any of these rights, email us at the address in section 10.</p>

        <h2>8. Children</h2>
        <p>
          The App is not directed to children under 13. We do not knowingly collect data from
          children. If you believe a child has provided us data, contact us and we will delete it.
        </p>

        <h2>9. Security</h2>
        <p>
          All network traffic uses HTTPS/TLS. Firestore access is governed by per-user security
          rules — only your authenticated session can read or modify your records. No employee
          has routine access to your data. We do not maintain plaintext copies of any credentials.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any privacy question or to exercise a right above, email{' '}
          <a href="mailto:nersukalyan77@gmail.com">nersukalyan77@gmail.com</a>. We respond within
          7 business days.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          If we change this policy, we&apos;ll update the &quot;last updated&quot; date at the top and, for
          material changes, surface a notice in the App. Continued use of the App after a change
          means you accept the updated policy.
        </p>
      </article>
    </Container>
  );
}
