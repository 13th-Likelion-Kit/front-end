import React from "react";

const Card = ({name, major,studentId,image}) => {

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "gray",
      }}
    >
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        maxWidth: "440px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <img
          src={image}
          style={{
            borderRadius: "50%",
            width: "96px",
            height: "96px",
            marginRight: "16px",
          }}
        />
        <div>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            {name}
          </h2>
          <div
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "4px",
            }}
          >
            <p style={{ color: "#6b7280" }}>{major}</p>
            <p style={{ color: "#6b7280" }}>{studentId}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;