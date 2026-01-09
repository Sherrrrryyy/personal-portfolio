import React from 'react'
import SkillBadge from './Skill-Badge';

const Skills = () => {
  return (
    <div>
        <section id="skills" className="p-8 py-40 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="React" level={90} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="JavaScript" level={80} />
            <SkillBadge name="Node.js" level={50} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="MongoDB" level={50} />
            <SkillBadge name="Git" level={85} />
          </div>
        </section>
    </div>
  )
}

export default Skills
