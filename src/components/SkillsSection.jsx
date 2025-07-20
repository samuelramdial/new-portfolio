import { useState } from "react";
import {cn} from "@/lib/utils";
const skills = [
    //Languages
    {name: "HTML/CSS", category: "Languages"},
    {name: "C/C++", category: "Languages"},
    {name: "Python", category: "Languages"}, 
    {name: "Java", category: "Languages"},
    {name: "JavaScript", category: "Languages"},
    {name: "SQL", category: "Languages"},

    //Frameworks & Libraries
    {name:"Node.js", category:"Frameworks & Libraries"},
    {name: "Express", category:"Frameworks & Libraries"},
    {name: "Flask", category:"Frameworks & Libraries"},
    {name: "React", category:"Frameworks & Libraries"},
    {name: "Bootstrap", category:"Frameworks & Libraries"},
    {name: "Psycopg2", category:"Frameworks & Libraries"},

    //Databases 
    {name:"MongoDB", category:"Databases"}, 
    {name: "PostgreSQL", category:"Databases"}, 
    {name: "Firebase", category:"Databases"},

    //Tools & Systems
    {name:"Git", category:"Tools & Systems"}, 
    {name:"Linux", category:"Tools & Systems"},
    {name: "Jupyter", category:"Tools & Systems"},
    {name: "VirtualBox", category:"Tools & Systems"},
    {name: "VS Code", category:"Tools & Systems"},
    {name: "Figma", category: "Tools & Systems"},
];

const categories = ["all", "Languages", "Frameworks & Libraries", "Databases", "Tools & Systems"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className = "py-24 px-4 bg-secondy/30">
        <div className = "container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center"> My <span className="text-primary"> Skills</span></h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key = {key} onClick={() => setActiveCategory(category)} className={cn("px-6 py-2.5 rounded-full transition-colors duration-300 capitalize",
                                                                                                  activeCategory === category ? "bg-primary text-primary-foreground" :
                                                                                                  "bg-secondary/70 text-foreground hover: bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className ="text-center mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                    </div>               
                ))}
            </div>
        </div>
    </section>
}