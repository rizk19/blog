import React from 'react';

const SectionAbout = () => {

    return (
        <section className="section-about" id="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                    </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                            </p>
                    <a href="#section-tours" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img srcset="img/eki-market-1-big.jpg 300w, img/eki-market-1-big.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Nat 1"
                            className="composition__photo composition__photo--p1"
                            src="img/eki-market-1-big.jpg" />
                        <img srcset="img/eki-asakusa-2-big.jpg 300w, img/eki-asakusa-2-big.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Nat 2"
                            className="composition__photo composition__photo--p2"
                            src="img/eki-asakusa-2-big.jpgg" />
                        <img srcset="img/eki-onepiece-sign-big.jpg 300w, img/eki-onepiece-sign-big.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Nat 3"
                            className="composition__photo composition__photo--p3"
                            src="img/eki-onepiece-sign-big.jpg" />
                        <img src="img/eki-market-1-big.jpg" alt="Nat 1" className="composition__photo composition__photo--p1" />
                        <img src="img/eki-asakusa-2-big.jpg" alt="Nat 2" className="composition__photo composition__photo--p2" />
                        <img src="img/eki-onepiece-sign-big.jpg" alt="Nat 3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout