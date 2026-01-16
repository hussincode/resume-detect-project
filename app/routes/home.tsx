import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/Navbar";
import { resumes } from "constance/insex";
import ResumeCard from "../components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumvir" },
    { name: "description", content: "make you next job be the best one" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
    <div className="page-heading">
      <h1>Welcome to Resumvir</h1>
      <h2>make you next job be the best one</h2>
    </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
    </main>;
}
