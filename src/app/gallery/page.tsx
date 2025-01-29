import AnalyticsDashboard from "@/components/AnalyticsDashboard";

export async function generateMetadata() {
  const title = "";
  const description = "Your Blog Description";
  const baseURL = "yourwebsite.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`https://${baseURL}/og-image.png`],
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnalyticsDashboard />
      <div className="container mx-auto p-6">{children}</div>
    </div>
  );
}
