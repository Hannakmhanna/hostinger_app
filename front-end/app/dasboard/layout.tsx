
export const metadata = {
  title: "Dashboard | Hostinger",
  description: "Access your Hostinger account securely.",
};
export default function DasboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dasboard-wrapper">
      {children}
    </div>
  );
}
