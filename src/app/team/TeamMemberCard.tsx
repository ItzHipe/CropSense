import React from "react";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div
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
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0, 0, 0, 0.2)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <h2 style={{ fontSize: "1.5rem", margin: "10px 0" }}>
        {member.name}
      </h2>
      <p style={{ fontSize: "1rem", color: "gray" }}>{member.role}</p>
    </div>
  );
};

export default TeamMemberCard;
