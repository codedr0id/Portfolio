import React from "react";
import "../scss/Skills.scss";

const Skills = () => {
  const skillsData = [
    {
      category: "Backend",
      skills: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Spring Boot", icon: "devicon-spring-plain colored" },
        { name: "Microservices", icon: "fas fa-network-wired" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
        { name: "UPI", icon: "fas fa-mobile-alt" },
        { name: "Event-driven Architecture", icon: "fas fa-project-diagram" },
      ]
    },
    {
      category: "Databases & Messaging",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "ElasticSearch", icon: "fas fa-search" },
        { name: "Kafka", icon: "fas fa-stream" },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: "fab fa-js colored" },
        { name: "React", icon: "fab fa-react colored" },
        { name: "HTML5", icon: "fab fa-html5 colored" },
        { name: "CSS3", icon: "fab fa-css3 colored" },
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt colored" },
        { name: "Docker", icon: "fab fa-docker colored" },
        { name: "AWS", icon: "fab fa-aws colored" },
        { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
        { name: "Grafana", icon: "fas fa-chart-line" },
      ]
    }
  ];

  return (
    <section className="Skills" id="skills">
      <h2 className="section-title" data-title="Skills">Technologies I Specialize In</h2>
      <div className="Skills__grid">
        {skillsData.map((category) => (
          <div key={category.category} className="Skills__category">
            <h3 className="Skills__category-title">{category.category}</h3>
            <div className="Skills__items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="Skills__item">
                  <i className={`Skills__icon ${skill.icon}`}></i>
                  <span className="Skills__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;