export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl mx-auto px-5 py-10 sm:py-14">{children}</div>;
}
