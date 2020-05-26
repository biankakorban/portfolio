import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content className="text-secondary">
        <p className="text-secondary">
          A graduate of law with interest in computer science and computer
          science.
        </p>
        <p className="text-secondary">
          A graduate of professional courses at TAFE NSW in the field of
          software development.
        </p>
        <p className="text-secondary">
          Currently studying Advanced Diploma of Information Technology.
        </p>
        <p className="text-secondary">
          I am a young programmer at a junior level, possessing knowledge in the
          field of web applications using the .Net framework and SQL Server
          database.
        </p>
        <p className="text-secondary">
          I develop my knowledge in using the React library, Angular and
          Express.js platform.
        </p>
        <p className="text-secondary">
          Meanwhile, I like watching movies and tutorials on artificial
          intelligence and how to use Python in artificial intelligence.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
