import React from "react";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aman Shaikh",
    role: "Backend Developer",
    img: "/images/projects/project-01/aman2.jpg",
  },
  {
    name: "Aditya Jadhav",
    role: "Backend Developer",
    img: "/images/projects/project-01/adi2.jpg",
  },
  {
    name: "Dhruv Choudhary",
    role: "Frontend Developer",
    img: "/images/projects/project-01/me2.jpg",
  },
  {
    name: "Jay Patil",
    role: "Frontend Developer",
    img: "/images/projects/project-01/jay.jpg",
  },
];

const TeamPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Our Team</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              maxWidth: "200px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "100%",
                borderRadius: "50%",
                boxShadow: "0 4px 20px rgba(0, 255, 0, 0.5)",
              }}
            />
            <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
              {member.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "gray" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
