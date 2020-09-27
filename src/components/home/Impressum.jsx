import React from "react";

const Impressum = () => {
    return (
        <div id="impressum" className="jumbotron jumbotron-fluid m-0">
            <div className="container container-fluid p-5">
                <div className="row">
                    <div className={`col-lg-12`}>
                        <h1 className="display-4 mb-5 text-center">Impressum</h1>
                        <p className="lead text-center">Diese Seite ist laut § 55 RStV eine rein private Seite und benötigt somit kein Impressum.
Es werden auf dieser Seite keine Werbebanner oder sonstige kommerzielle Tätigkieten ausgeführt.</p>
                        <p className="lead text-center">Trotzdem möchte ich meinen Besuchern ermöglichen mit mir in Kontakt zu treten. Gerne können Sie mich per <a href="https://threema.id/N9WJ72V4">Threema</a> kontaktieren.</p>
                        <p className="lead text-center">Quellenangaben für die verwendeten Bilder und Grafiken: https://fortawesome.github.io/Font-Awesome/</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
