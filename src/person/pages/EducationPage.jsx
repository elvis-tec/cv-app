import logo from '../../assets/utch.png';

export const EducationPage = () => {
  return (
    <main className="px-3">
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 col-sm-12 mt-2">
            <div className="card">
                <img src={logo} className="card-img-top" alt="UTCH logo" />
                <div className="card-body text-black">
                    <h5 className="card-title">ICT Engineer</h5>
                    <p className="card-text">January 2017 - August 2018</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-2">
            <div className="card" >
                <img src={logo} className="card-img-top" alt="UTCH logo" />
                <div className="card-body text-black">
                    <h5 className="card-title">ICT University Senior Technician</h5>
                    <p className="card-text">September 2014 - December 2016</p>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
