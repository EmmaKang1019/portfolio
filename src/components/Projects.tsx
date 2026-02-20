type Project = {
  title: string
  summary: string
  stack: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    summary: 'Short description of your first featured project.',
    stack: 'React, TypeScript, CSS',
  },
  {
    title: 'Project Two',
    summary: 'Short description of your second featured project.',
    stack: 'Node.js, API, Database',
  },
  {
    title: 'Project Three',
    summary: 'Short description of your third featured project.',
    stack: 'UI/UX, Accessibility, Performance',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="stack">{project.stack}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
