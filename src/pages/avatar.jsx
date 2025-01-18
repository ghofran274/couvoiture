import React, { useState } from "react";

const AvatarDropdown = ({ avatars, selectedAvatar, setSelectedAvatar }) => {
  const [isOpen, setIsOpen] = useState(false); // Contrôle si la liste est ouverte

  return (
    <div style={{ position: "relative", width: "200px" }}>
      {/* Zone sélectionnée */}
      <div
        onClick={() => setIsOpen(!isOpen)} // Ouvre/Ferme la liste
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {selectedAvatar ? (
          <img
            src={selectedAvatar}
            alt="Selected Avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
        ) : (
          <span>Choose an avatar</span>
        )}
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
          ▼
        </span>
      </div>

      {/* Liste déroulante */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "white",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {avatars.map((url, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAvatar(url);
                setIsOpen(false); // Fermer la liste après sélection
              }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
                backgroundColor:
                  selectedAvatar === url ? "lightgray" : "transparent",
              }}
            >
              <img
                src={url}
                alt={`Avatar ${index}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span>Avatar {index + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
