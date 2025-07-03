import InstallPrompt from "@/components/InstalPrompt";
import BottomNav from "@/components/template/BottomNav";
import Header from "@/components/template/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
      <InstallPrompt />
    </>
  );
};

export default layout;
