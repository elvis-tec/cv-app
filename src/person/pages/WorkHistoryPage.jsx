export const WorkHistoryPage = () => {
  return (
    <main className="px-3">
      <div className="row mb-4 align-items-center">
      <div className="col-md-4 col-sm-12">
        <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
          <a className="p-1 rounded bg-light link-dark text-decoration-none" href="#simple-list-item-1">FullStack Labs</a>
          <a className="p-1 rounded bg-light link-dark text-decoration-none" href="#simple-list-item-2">Westmount Solutions</a>
          <a className="p-1 rounded bg-light link-dark text-decoration-none" href="#simple-list-item-3">Technological University of Chihuahua (UTCH)</a>
          <a className="p-1 rounded bg-light link-dark text-decoration-none" href="#simple-list-item-4">Pegachisa Del Norte S.A. De C.V.</a>
          <a className="p-1 rounded bg-light link-dark text-decoration-none" href="#simple-list-item-5">Punto Chihuahua S.A. De C.V.</a>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 overflow-auto mt-2" style={{
        height: "500px"
      }}>
        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
          <h4 id="simple-list-item-1">Senior Software Developer / Shopify Developer</h4>
          <span className="badge text-bg-primary">FullStack Labs</span>
          <br />
          <span className="badge text-bg-secondary">March 2022 - September 2022</span>
          <p>As a contractor, I implemented custom software for Shopify stores and custom styles.</p>
          <b>Techs:</b>
          <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
            <span className="badge text-bg-info m-1">JavaScript</span>
            <span className="badge text-bg-info m-1">Shopify</span>
            <span className="badge text-bg-info m-1">CSS</span>
            <span className="badge text-bg-info m-1">HTML</span>
            <span className="badge text-bg-info m-1">jQuery</span>
            <span className="badge text-bg-info m-1">Liquid</span>
          </div>
          <h4 id="simple-list-item-2">Development and Engineering Manager</h4>
          <span className="badge text-bg-primary">Westmount Solutions</span>
          <br />
          <span className="badge text-bg-secondary">January 2019 - March 2022</span>
          <p>Started as a developer in the development of e-commerce platforms, I became development team leader after 2 months, Mexico team lead 1 month later, and finally engineering manager.</p>
          <b>Techs:</b>
          <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
            <span className="badge text-bg-info m-1">JavaScript</span>
            <span className="badge text-bg-info m-1">Node.js</span>
            <span className="badge text-bg-info m-1">PHP</span>
            <span className="badge text-bg-info m-1">CodeIgniter</span>
            <span className="badge text-bg-info m-1">Shopify</span>
            <span className="badge text-bg-info m-1">Liquid</span>
            <span className="badge text-bg-info m-1">CSS</span>
            <span className="badge text-bg-info m-1">HTML</span>
            <span className="badge text-bg-info m-1">jQuery</span>
            <span className="badge text-bg-info m-1">WordPress</span>
          </div>
          <h4 id="simple-list-item-3">Webmaster</h4>
          <span className="badge text-bg-primary">UTCH</span>
          <br />
          <span className="badge text-bg-secondary">August 2017 - December 2018</span>
          <p>I implemented the base to publish relevant information about the university and the ability to modified, also, it was required to manage different sites on just one place.
            <br/>To complete the project, I implemented WordPress Multisites on an Apache server, and modifing the defual theme with PHP and Javascript.</p>
          <b>Techs:</b>
          <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
            <span className="badge text-bg-info m-1">JavaScript</span>
            <span className="badge text-bg-info m-1">PHP</span>
            <span className="badge text-bg-info m-1">CSS</span>
            <span className="badge text-bg-info m-1">HTML</span>
            <span className="badge text-bg-info m-1">jQuery</span>
            <span className="badge text-bg-info m-1">WordPress</span>
            <span className="badge text-bg-info m-1">Apache</span>
          </div>
          <h4 id="simple-list-item-4">Software developer</h4>
          <span className="badge text-bg-primary">Pegachisa Del Norte S.A. De C.V.</span>
          <br />
          <span className="badge text-bg-secondary">April 2017 - August 2017</span>
          <p>Intern in the development of an inventory system and development and implementation of a quality system for the company's machining.</p>
          <b>Techs:</b>
          <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
            <span className="badge text-bg-info m-1">PHP</span>
            <span className="badge text-bg-info m-1">CSS</span>
            <span className="badge text-bg-info m-1">HTML</span>
          </div>
          <h4 id="simple-list-item-5">Web developer</h4>
          <span className="badge text-bg-primary">Punto Chihuahua S.A. De C.V.</span>
          <br />
          <span className="badge text-bg-secondary">July 2016 - March 2017</span>
          <p>Intern in the development and implementation of the company's website for commercial use.</p>
          <b>Techs:</b>
          <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
            <span className="badge text-bg-info m-1">PHP</span>
            <span className="badge text-bg-info m-1">WordPress</span>
            <span className="badge text-bg-info m-1">CSS</span>
            <span className="badge text-bg-info m-1">HTML</span>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}