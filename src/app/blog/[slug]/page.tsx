"use client";

import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Heading, Row, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { register } from "module";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface BlogParams {
  params: {
    slug: string;
  };
}

export default function Home() {
  const cards = [
    { title: "Temperature", value: "28°C", color: "bg-red-500" },
    { title: "Humidity", value: "65%", color: "bg-blue-500" },
    { title: "Soil Moisture", value: "45%", color: "bg-green-500" },
    { title: "pH Level", value: "6.5", color: "bg-yellow-500" },
    { title: "Rainfall", value: "12mm", color: "bg-purple-500" },
  ];

  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Soil Moisture (%)",
        data: [40, 45, 50, 42, 48, 53],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Farm Analytics Dashboard</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {cards.map((card, index) => (
          <div key={index} className={`p-4 rounded-lg text-white ${card.color}`}>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Soil Moisture Trend</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
  }

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params: { slug } }: BlogParams) {
  let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
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

// export default function Blog({ params }: BlogParams) {
//   let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === params.slug);

//   if (!post) {
//     notFound();
//   }

//   const avatars =
//     post.metadata.team?.map((person) => ({
//       src: person.avatar,
//     })) || [];

//   return (
//     <Column as="section" maxWidth="xs" gap="l">
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BlogPosting",
//             headline: post.metadata.title,
//             datePublished: post.metadata.publishedAt,
//             dateModified: post.metadata.publishedAt,
//             description: post.metadata.summary,
//             image: post.metadata.image
//               ? `https://${baseURL}${post.metadata.image}`
//               : `https://${baseURL}/og?title=${post.metadata.title}`,
//             url: `https://${baseURL}/blog/${post.slug}`,
//             author: {
//               "@type": "Person",
//               name: person.name,
//             },
//           }),
//         }}
//       />
//       <Button href="/blog" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
//         Posts
//       </Button>
//       <Heading variant="display-strong-s">{post.metadata.title}</Heading>
//       <Row gap="12" vertical="center">
//         {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
//         <Text variant="body-default-s" onBackground="neutral-weak">
//           {formatDate(post.metadata.publishedAt)}
//         </Text>
//       </Row>
//       <Column as="article" fillWidth>
//         <CustomMDX source={post.content} />
//       </Column>
//       <ScrollToHash />
//     </Column>
//   );
// }
