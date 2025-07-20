import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id = "about" className = "py-24 px-4 relative">
        <div className ="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className = "text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className = "space-y-6">
                    <h3 className = "text-2xl font-semibold">Backend-Focused, Frontend-Capable, Always Scalable</h3>
                    <p className="text-muted-foreground">I build modern web applications with stacks like React, Flask, and PostgreSQL — blending backend architecture with clean, responsive interfaces. My experience as a Resident Advisor and Lambda Phi Epsilon brother has shaped how I collaborate and lead, and now as a master’s student at Georgia Tech, I’m doubling down on my mission: to solve real problems through technology and thoughtful engineering.</p>
                    <p className = "text-muted-foreground">I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape. Whether I'm building full-stack applications with React, Flask, and PostgreSQL or collaborating with peers and mentors on scalable backend systems, I approach each project with intention and a focus on impact. With experience leading in both academic and community spaces — from serving as a Resident Advisor to helping charter Lambda Phi Epsilon at UNC Charlotte — I blend technical ability with real-world collaboration to deliver work that’s both meaningful and well-engineered.</p>
                    <div className = "flex flex-col sm: flex-row gap-4 pt-4 justify-center">
                        <a href = "#contact" className="cosmic-button">Get In Touch</a>
                        <a href = "https://www.linkedin.com/in/samuel-ramdial/overlay/1752997350507/single-media-viewer/?profileId=ACoAADLranIBfCsRHXtYC_WiMf8lxKGBqHkP2os" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className = "grid grid-cols-1 gap-6">
                    <div className = "gradient-border p-6 card-hover">
                        <div className = "flex items-start gap-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className = "text-left">
                                <h4 className = "font-semibold text-lg">Backend & Databases</h4>
                                <p className = "text-muted-foreground">Building robust APIs with Python and Flask, and optimizing data storage using PostgreSQL and MySQL. Skilled in schema design, query optimization, and database management.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "gradient-border p-6 card-hover">
                        <div className = "flex items-start gap-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className = "text-left">
                                <h4 className = "font-semibold text-lg">Infrastructure Behind the Interface</h4>
                                <p className = "text-muted-foreground">Crafting the logic and infrastructure behind user experiences. I specialize in building RESTful APIs, designing normalized schemas, and ensuring data integrity across scalable applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "gradient-border p-6 card-hover">
                        <div className = "flex items-start gap-4">
                            <div className = "p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className = "text-left">
                                <h4 className = "font-semibold text-lg">Project Management</h4>
                                <p className = "text-muted-foreground">Driving software projects from concept to deployment by combining technical skills with team collaboration. Experienced in backend development, cross-role teamwork, and Agile workflows using Git.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}