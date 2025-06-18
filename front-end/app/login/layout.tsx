
export const metadata = {
  title: "Log-in to Hostinger",
  description: "Access your Hostinger account securely.",
};
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-wrapper">
      {children}
    </div>
  );
}
