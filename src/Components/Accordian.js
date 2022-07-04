import React from "react";

const Accordian = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Who are we?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              LandzHub is useful as a map measurement tool for outdoor
              activities and to measure the length or area of the field using
              maps and can also be use to measure land by physically by taking
              point on the land using mobile. It helpful in garden and farm work
              or planning, great to keep area records. It’s great for
              constructions and agricultural fencing. This application is
              practical even for solar panel installation, roof area estimation
              or trip planning. Subscription is not included in ad-free or PRO
              versions, it is an additional feature obtained by an in-app
              purchase. The mentioned versions influence and expand
              functionality.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>
                Download it and start measuring your fields today!
              </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              GPS Field Area Measure is also useful as a map measurement tool
              for outdoor activities, range finder applications and sports such
              as biking or marathon. Comes in handy when exploring golf area or
              as a golf distance meter, convenient for land surveys, practical
              for field pasture area measure, helpful in garden and farm work or
              planning, great to keep area records. It’s great for constructions
              and agricultural fencing. This application is practical even for
              solar panel installation, roof area estimation or trip planning.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>All in all, it is useful for:</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              - Farmers, for farm management - Agronomists - Town planners -
              Construction surveyor - Landscape artists - Land based surveys -
              Land record management - Construction surveys - Health, Education
              and facilities mapping - Farm fencing - Sports track measurement -
              Construction sites and building sites area - Asset mapping -
              Landscape design - GIS, ArcGIS, ArcMap
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
