import React from 'react';
import './assets/scss/main.scss';
import {
    Header,
    Navigation,
    SectionAbout,
    SectionFeatures,
    SectionTours,
    SectionStories,
    // SectionBook,
} from "./views";

function App() {

    return (
        <div className="App">

            <Navigation />

            <Header />

            <main>
                <SectionAbout />

                <SectionFeatures />

                <SectionTours />

                <SectionStories />


            </main>
            <footer class="footer">
                <div class="footer__logo-box">
                    <img src="img/logo-green-2x.png" alt="Full logo" class="footer__logo" />
                </div>
                <div class="row">
                    <div class="col-1-of-2">
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Privacy Policy</a></li>
                                <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1-of-2">
                        <p class="footer__copyright">
                            Built by <a href="#" class="footer__link">Rizki Ahmad Faris</a>
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
