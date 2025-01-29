import { Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = "Ideas for Future Development";
  const description =
    "Explore a collection of ideas and inspirations for future development, including innovative concepts and potential improvements.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/ideas`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function IdeasForDevelopment() {
  const ideas = [
    "Implement a real-time data synchronization feature for seamless collaboration.",
    "Introduce advanced AI-based personalization for users.",
    "Develop a mobile app version to expand accessibility.",
    "Optimize backend systems for enhanced scalability and performance.",
    "Incorporate gamification elements to increase user engagement.",
    "Focus on improving accessibility features for inclusivity.",
    "Add multilingual support to reach a global audience.",
    "Develop an API for third-party integrations and extensions.",
  ];

  return (
    <Flex fillWidth className="flex flex-col p-8 space-y-6 bg-gray-100 text-black">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Ideas for Future Development
      </h1>
      <div className="space-y-4">
        {ideas.map((idea, index) => (
          <p key={index} className="text-lg leading-relaxed">
            {index + 1}. {idea}
          </p>
        ))}
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Ideas for Future Development",
            description:
              "A curated list of innovative concepts and ideas for enhancing future development.",
            url: `https://${baseURL}/ideas`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
    </Flex>
  );
}
