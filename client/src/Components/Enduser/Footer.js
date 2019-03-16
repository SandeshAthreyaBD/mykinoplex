import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

class FooterPage extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBFooter color="#1C2331" dark expand="md" className="font-small">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-1 pb-1">
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#2BBBAD" }}
              >
                ABOUT
              </h6>
              <p>
                <a href="#!" style={{ color: "#2BBBAD" }}>
                  Blog
                </a>
              </p>
              <p>
                <a href="/contact" style={{ color: "#2BBBAD" }}>
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" style={{ color: "#2BBBAD" }}>
                  SignIn
                </a>
              </p>
              <p>
                <a href="#!" style={{ color: "#2BBBAD" }}>
                  Help
                </a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
              <h6
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#2BBBAD" }}
              >
                Contact
              </h6>
              <p className="text-nowrap" style={{ color: "#2BBBAD" }}>
                <i className="fa fa-home mr-3 " style={{ color: "#2BBBAD" }} />{" "}
                Vereinsstraße 11, 51379 Leverkusen, Germany
              </p>
              <p style={{ color: "#2BBBAD" }}>
                <i
                  className="fa fa-envelope mr-3"
                  style={{ color: "#2BBBAD" }}
                />{" "}
                contact@myKinoplex.com
              </p>
              <p style={{ color: "#2BBBAD" }}>
                <i className="fa fa-phone mr-3" style={{ color: "#2BBBAD" }} />{" "}
                +49 017683000436
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="3" xl="2" className="mx-auto mt-3">
              <h6
                className="text-uppercase mb-4 font-weight-bold"
                style={{ color: "#2BBBAD" }}
              >
                Info
              </h6>
              <p style={{ color: "#2BBBAD" }}>
                <a href="#!" style={{ color: "#2BBBAD" }}>
                  Terms and Condition
                </a>
              </p>
              <p style={{ color: "#2BBBAD" }}>
                <a
                  onClick={this.toggle(14)}
                  href="#!"
                  style={{ color: "#2BBBAD" }}
                >
                  Privacy policies
                </a>
              </p>
              <p style={{ color: "#2BBBAD" }}>
                <a href="#!" style={{ color: "#2BBBAD" }}>
                  FAQs
                </a>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p
                className="text-center text-md-left grey-text"
                style={{ color: "#2BBBAD" }}
              >
                &copy; {new Date().getFullYear()} Copyright: All Right Reserved
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item" style={{ color: "#2BBBAD" }}>
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="#!"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="#!"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="#!"
                    >
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
            centered
            size="lg"
          >
            <MDBModalHeader
              tag="h2"
              toggle={this.toggle(14)}
              className="text-center text-md-left black-text"
            >
              Impressum (Privacy Policy)
            </MDBModalHeader>
            <MDBModalBody className="text-center font-weight-bolder text-md-left black-text">
              Impressum/Disclaimer Angaben gemäß § 5 TMG <br />
              &nbsp; <br /> myKinoplex Vereinsstr. 11 ,51379 Leverkusen, Germany
              Telefon: 017683000436 E-Mail: contact@myKinoplex.com
              <br />
              &nbsp; <br />
              Registereintrag: Eintragung im Registergericht: Leverkusen
              Registernummer: 05316000 <br />
              &nbsp; <br /> Umsatzsteuer-ID: 230/5002/4486
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              DE309784003 <br />
              &nbsp; <br /> Haftungsausschluss: <br />
              &nbsp; <br /> Haftung für Inhalte Die Inhalte <br />
              &nbsp; <br />
              unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
              § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
              dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
              werden wir diese Inhalte umgehend entfernen. <br />
              &nbsp; <br /> Haftung für Links Unser Angebot enthält Links zu
              externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
              der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
              <br />
              &nbsp; <br /> Urheberrecht <br />
              &nbsp; <br /> Die durch die Seitenbetreiber erstellten Inhalte und
              Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
              <br />
              &nbsp; <br /> Datenschutz <br />
              &nbsp; <br />
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht
              veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit ausdrücklich widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-Mails, vor. <br />
              &nbsp; <br /> Google Analytics <br />
              &nbsp; <br />
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (''Google''). Google Analytics verwendet sog.
              ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
              einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
              um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen zu erbringen. Auch wird Google diese
              Informationen gegebenenfalls an Dritte übertragen, sofern dies
              gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
              Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
              IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website voll umfänglich nutzen können.
              Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
              <br />
              &nbsp; <br /> Google AdSense <br />
              &nbsp; <br /> Diese Website benutzt Google Adsense, einen
              Webanzeigendienst der Google Inc., USA (''Google''). Google
              Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem
              Computer gespeichert werden und die eine Analyse der Benutzung der
              Website durch Sie ermöglicht. Google Adsense verwendet auch sog.
              ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von
              Informationen. Durch die Verwendung des Web Beacons können
              einfache Aktionen wie der Besucherverkehr auf der Webseite
              aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder
              Web Beacon erzeugten Informationen über Ihre Benutzung dieser
              Website (einschließlich Ihrer IP-Adresse) werden an einen Server
              von Google in den USA übertragen und dort gespeichert. Google wird
              diese Informationen benutzen, um Ihre Nutzung der Website im
              Hinblick auf die Anzeigen auszuwerten, um Reports über die
              Websiteaktivitäten und Anzeigen für die Websitebetreiber
              zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen zu erbringen. Auch
              wird Google diese Informationen gegebenenfalls an Dritte
              übertragen, sofern dies gesetzlich vorgeschrieben oder soweit
              Dritte diese Daten im Auftrag von Google verarbeiten. Google wird
              in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in
              Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte
              und die Anzeige von Web Beacons können Sie verhindern, indem Sie
              in Ihren Browser-Einstellungen ''keine Cookies akzeptieren''
              wählen (Im MS Internet-Explorer unter ''Extras > Internetoptionen
              > Datenschutz > Einstellung''; im Firefox unter ''Extras >
              Einstellungen > Datenschutz > Cookies''); wir weisen Sie jedoch
              darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
              Funktionen dieser Website voll umfänglich nutzen können. Durch die
              Nutzung dieser Website erklären Sie sich mit der Bearbeitung der
              über Sie erhobenen Daten durch Google in der zuvor beschriebenen
              Art und Weise und zu dem zuvor benannten Zweck einverstanden.{" "}
              <br />
              &nbsp; <br /> <br />
              &nbsp; <br /> Impressum vom Impressum Generator der Kanzlei
              Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(14)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </MDBFooter>
    );
  }
}

export default FooterPage;
