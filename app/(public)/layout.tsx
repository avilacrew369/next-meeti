import Header from "@/src/shared/components/ui/Header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   <>

        <Header />

    {children}
   </>
  );
}