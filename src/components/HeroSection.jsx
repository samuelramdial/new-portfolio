import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id = "hero" className = "relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className = "container max-w-4xl mx-auto text-center z-10">
            <div className = "space-y-6">
                <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
                    <span className = "opacity-0 animate-fade-in">Hi,  I'm</span>
                    <span className = "text-primary opacity-0 animate-fade-in-delay-1"> Samuel</span>
                    <span className = "text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ramdial</span>
                </h1>
                <p className = "text-lg mg:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I earned my B.S. in Computer Science from UNC Charlotte and am currently pursuing my M.S. in Computer Science through Georgia Tech’s OMSCS program. I specialize in backend and full-stack development, with hands-on experience building scalable applications using Python, Flask, React, and PostgreSQL. I've collaborated with teams from Truist, IBM, and AWS to develop cloud-native solutions, and bring both technical depth and leadership to every project. I'm currently seeking full-time and internship opportunities.
                </p>

                <div className = "pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href = "#projects" className = "cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className = "text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}