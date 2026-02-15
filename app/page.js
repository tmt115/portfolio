"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">Thomas Tedeschi</span>
            <div className="flex gap-3">
              <a href="https://github.com/tmt115" target="_blank" className="text-sm hover:text-blue-600">GitHub</a>
              <a href="https://linkedin.com/in/thomas-tedeschi" target="_blank" className="text-sm hover:text-blue-600">LinkedIn</a>
              <a href="mailto:tommytedeschi1@gmail.com" className="text-sm hover:text-blue-600">Email</a>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Thomas Tedeschi - Electrical & Computer Engineering</h1>
      </section>

       {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <div className="bg-white shadow-md rounded-2xl p-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            I am a student at Cornell University studying ECE. I enjoy learning about Computer Systems, 
            Power Systems, Electrical Design, and more. I apply my knowledge through personal projects
            and in school clubs and activities. I am always looking to learn new things and find new problems
            to solve. Feel free to check out all my projects/activities below.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="Tic-Tac-Toe Robotic Arm"
            description="Currently working on an autonomous robotic arm that can play Tic-Tac-Toe with CEED."
            link="/projects/tic-tac-toe-arm"
          />

          <ProjectCard
            title="PCB Design"
            description="Created PCB designs from schematic to layout/wiring in multiple softwares."
            link="/projects/pcb-design"
          />

          <ProjectCard
            title="Arduino F1 Reaction Time Game"
            description="Microcontroller-based reaction time game inspired by Formula 1 start lights."
            link="/projects/f1-reaction-game"
          />

          <ProjectCard
            title="Breadboard 555 Timer Circuit"
            description="Designed and tested a 555 timer circuit for pulse generation and frequency control."
            link="/projects/555-timer"
          />

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center pb-16">
        <p className="text-gray-600">Contact: tommytedeschi1@gmail.com</p>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Thomas Tedeschi
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring" }}>
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-5">{description}</p>
          <Link href={link}>
            <Button className="w-full">View Project</Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}


