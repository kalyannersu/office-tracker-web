import Container from '@/components/Container';

export const metadata = { title: 'Delete your account — Office Tracker' };

export default function DeleteAccountPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Delete your account</h1>
      <p style={{ color: 'var(--muted)' }}>
        Office Tracker lets you permanently delete your account and all associated data from
        inside the app. Here&apos;s how, plus what happens when you do.
      </p>
      <hr className="my-6" style={{ borderColor: 'var(--line)' }} />

      <article className="prose-body">
        <h2>Step-by-step</h2>
        <ol>
          <li>Open Office Tracker on your iPhone.</li>
          <li>Go to the <strong>Settings</strong> tab (bottom-right).</li>
          <li>In the <strong>Account</strong> section, tap <strong>Delete Account</strong>.</li>
          <li>Read the warning, tap <strong>Continue</strong>.</li>
          <li>Enter your account password.</li>
          <li>Type <strong>DELETE</strong> in the confirmation field.</li>
          <li>Tap <strong>Delete Forever</strong>.</li>
        </ol>

        <h2>What gets deleted</h2>
        <ul>
          <li>Your Firebase Authentication user record (email, password hash, sign-in metadata).</li>
          <li>Every work session record we hold for your account, in Firestore.</li>
          <li>Any cached data on your device when you uninstall the app.</li>
        </ul>
        <p>This is immediate and irreversible. There is no recently-deleted bin on our side.</p>

        <h2>What we keep</h2>
        <p>
          Nothing tied to you personally. Google&apos;s Firebase platform may retain encrypted
          system-level backups for up to 90 days as part of their standard operations; these are
          not accessible to us or to anyone else.
        </p>

        <h2>Can&apos;t access the app?</h2>
        <p>
          If your device is broken or you can&apos;t sign in, email{' '}
          <a href="mailto:nersukalyan77@gmail.com">nersukalyan77@gmail.com</a> from the email
          address you registered with. We&apos;ll verify and process the deletion within 7 business
          days, then confirm via email.
        </p>
      </article>
    </Container>
  );
}
