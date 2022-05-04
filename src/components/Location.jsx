import React from "react";

const Location = () => {
  return (
    <section className="map-clean">
      <div className="container">
      <div class="intro">
                        <h2 class="text-center" >Location </h2>
                        <p class="text-center">Nunc luctus in metus eget
                            fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                        </p>
                    </div>
      </div>
      <iframe
        style={{ padding: "0rem 15rem" }}
        allowFullScreen
        frameBorder
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.537171038884!2d106.79512572776744!3d10.801369316648005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527007b448ec3%3A0xbf63e9bd29590221!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gR0nhuqJJIFBIw4FQIENIVVnDik4gR0lBIFNUQVIgR0xPQkFM!5e0!3m2!1svi!2s!4v1646638366901!5m2!1svi!2s"
        width="100%"
        height={450}
      />
    </section>
  );
};

export default Location;
