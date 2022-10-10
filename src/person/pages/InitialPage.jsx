import person from '../../assets/person.jpg';

export const InitialPage = () => {
  return (
    <main className="px-3">
      <div className="row mb-4 align-items-center">
        <div className="col-md-4 col-sm-12 mt-2">
          <img src={ person } className="img-fluid rounded" alt="my-photo" />
        </div>
        <div className="col-md-8 col-sm-12 mt-2">
          <h1>Elvis Salazar</h1>
          <p className="lead">Location: Chihuahua, México</p>
          <h2>About me</h2>
          <p className="lead">I'm a ICT engineer specializing in software development; I have five years of experience doing software. My technical skills are focused on custom software and e-commerce; Technologies like JavasScript, Liquid, HTML, CSS, Node.JS, PHP, etc.</p>
          <p className="lead">I like to work with multiple people; as a team lead, I managed teams from 5 to 10 developers, and I feel that communication is the primary key to completing projects. My personal goal is to earn a high level of performance that allows me to develop myself professionally and personally.</p>
          <h2>Social / Contact</h2>
          <a href="mailto:elvis@kanan.dev"><i className="fa-regular fa-envelope fa-2xl"></i></a>
          <a href="https://www.linkedin.com/in/elvis-salazar-6178061a0/" className="mx-4"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
          <a href="https://github.com/elvis-tec"><i className="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
    </main>
  )
}
