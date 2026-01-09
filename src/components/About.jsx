import React from 'react'

const About = () => {
    return (
        <>
            {/* About Section */}
            <section id="about" className="p-8 scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1/3">
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                I'm Muhammad Shaheer Khan, a passionate Full Stack Web Developer with a strong focus on building clean, functional, and user-friendly web applications. I specialize in technologies like React, Next.js, Tailwind CSS, Node.js, Express.js, and Firebase.
                            </p>
                            <p>
                                I'm continuously learning and expanding my skill set, diving into tools and technologies that keep me ahead in this fast-moving industry. I'm also comfortable with version control (Git), responsive design, and RESTful APIs.
                            </p>
                            <p>
                                When I’m not coding, I enjoy thinking about startup ideas, experimenting with new stacks, and sharing knowledge with other
                            </p>
                        </div>
                    </div>

                    <div className="flex-1/3">
                        <div className="p-6 border rounded-lg shadow-md bg-black">
                            <h3 className="text-xl font-semibold mb-4">Experience</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium">Frontend Developer Internship</h4>
                                        <span className="px-2 py-1 text-sm border rounded-md">2023 - 2024</span>
                                    </div>
                                    <p className="text-primary">Prodigy Infotech</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Build some Frontend projects using JavaScript and React.js.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium">Freelancing</h4>
                                        <span className="px-2 py-1 text-sm border rounded-md">2024 - present</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Built and maintained multiple client websites and web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
