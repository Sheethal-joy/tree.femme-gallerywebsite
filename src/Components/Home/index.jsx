
import React from 'react';
import "./css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Page Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>tree.femme</title>

      {/* Page Loader */}
      <div id="loader-wrapper">
        <div id="loader" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>

      {/* Hero Section */}
      <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="./image/hero.jpg">
        <form className="d-flex tm-search-form">
          <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success tm-search-btn" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-6 tm-text-primary">Latest Photos</h2>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <form action className="tm-text-primary">
              Page <input type="text" defaultValue={1} size={1} className="tm-input-paging tm-text-primary" /> of 200
            </form>
          </div>
        </div>

        {/* Gallery */}
        <div className="row tm-mb-90 tm-gallery">
  {['my-photo1.jpg', 'my-photo2.jpg', 'my-photo3.jpg', 'my-photo4.jpg', 'my-photo5.jpg', 'my-photo6.jpg'].map((imgSrc, index) => (
    <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={`img/${imgSrc}`} alt={`Image ${index + 1}`} className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>{`Image ${index + 1}`}</h2>
          <a href="photo-detail.html">View more</a>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">18 Oct 2020</span>
        <span>9,906 views</span>
      </div>
    </div>
  ))}
</div>


        {/* Pagination */}
        <div className="row tm-mb-90">
          <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
            <a href="javascript:void(0);" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
            <div className="tm-paging d-flex">
              <a href="javascript:void(0);" className="active tm-paging-link">1</a>
              <a href="javascript:void(0);" className="tm-paging-link">2</a>
              <a href="javascript:void(0);" className="tm-paging-link">3</a>
              <a href="javascript:void(0);" className="tm-paging-link">4</a>
            </div>
            <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">Next Page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
