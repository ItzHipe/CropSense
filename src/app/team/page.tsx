import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const teamMembers: TeamMember[] = [
  { name: "Dhruv Choudhary", role: "Lead Developer", img: "/images/DraconiX.jpg" },
  { name: "Aman Shaikh", role: "UI/UX Designer", img: "/images/DraconiX.jpg" },
  { name: "Aditya Jadhav", role: "Backend Engineer", img: "/images/DraconiX.jpg" },
  { name: "Jay Patil", role: "Nalla", img: "/images/DraconiX.jpg"}
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Our Team</h1>
      <p className="text-lg text-gray-300 mb-8">Meet the people behind Crop Sense</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <Image src={member.img} alt={member.name} width={128} height={128} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
