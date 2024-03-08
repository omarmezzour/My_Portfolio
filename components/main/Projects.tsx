import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="./ansible-vagrant.webp"
          title="ANSIBLE for DevOps"
          description="This Ansible project is designed to orchestrate and deploy a multi-server environment consisting of web, database, and logging servers. Leveraging Vagrant for local testing and Ansible for configuration management, the project provides an organized structure, defined playbooks, and specific roles for each server, simplifying the deployment and maintenance of IT infrastructures."
        />
        <ProjectCard
          src="./netw_scann.png"
          title="Network Scanner with Python"
          description="The Network Scanner project involves developing a utility to examine networks, detecting connected devices, open ports, and potential security risks. Leveraging Python libraries like Scapy or Nmap, this tool provides a straightforward solution for network administrators and security experts to conduct thorough network scans, generating detailed reports to proactively address vulnerabilities and enhance network security."
        />
        <ProjectCard
          src="./Apache_HTTP_Server-Logo.wine.png"
          title="Secure Apache with SELinux Integration"
          description="The SELinux Integration with Apache project aims to enhance security by seamlessly integrating SELinux with the Apache web server. By tailoring SELinux policies for Apache, it restricts access to necessary resources, minimizing risks like SQL injection and cross-site scripting, thus strengthening the overall security of web servers."
        />
      </div>
    </div>
  );
};

export default Projects;
