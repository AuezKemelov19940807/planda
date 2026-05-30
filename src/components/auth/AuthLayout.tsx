export default function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-16">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p>{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
