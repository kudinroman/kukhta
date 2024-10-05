import React, { Component } from "react";
import recordings1 from "../../../assets/images/recordings-1.jpg";
import recordings2 from "../../../assets/images/recordings-2.jpg";

class Recordings extends Component {
  render() {
    return (
      <div>
        <div className="w-full flex flex-col mb-8 md:mb-12 md:flex-row md:gap-8">
          <h2 className="md:hidden">Naxos Laureate Series</h2>
          <img
            className="mb-3 md:w-3/5 object-scale-down md:self-start"
            src={recordings1}
            alt="Naxos Laureate Series"
          />

          <div className="md:w-2/5 md:min-w-60">
            <h2 className="hidden md:block">Naxos Laureate Series</h2>
            <div className="">
              <p className="font-semibold">Galina Gorelova</p>
              <p className="mb-2">1. The Castle of Mir</p>
              <p className="font-semibold">Prelude and Fuga</p>
              <p>2. Preludio</p>
              <p className="mb-2">3. Fuga</p>
              <p className="font-semibold">Joaquin Rodrigo</p>
              <p className="mb-2">4. Toccata </p>
              <p className="font-semibold">Roberto Gerhard</p>
              <p className="mb-2">5. Fantasia</p>
              <p className="font-semibold">Eduardo Morales-Caso</p>
              <p className="mb-2">6. El Jardin de Lindaraja </p>
              <p className="font-semibold">Sergio Assad</p>
              <p className="mb-2">7. Fantasia Carioca</p>
              <p className="font-semibold">Leo Brouwer</p>
              <p className="font-semibold">Sonata nr.3, El Decameron Negro</p>
              <p>8. Guijes y Gnomos </p>
              <p>9. Treno por Oya</p>
              <p>10. Burlesca del Aire</p>
              <p className="mb-2">11. La Risa de los Griots</p>
              <p className="font-semibold">Roland Dyens</p>
              <p>12. Blue Montuno </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mb-8 md:mb-12 md:flex-row md:gap-8">
          <h2 className="md:hidden">Maestro Series</h2>
          <img
            className="mb-3 md:w-3/5 object-scale-down md:self-start md:order-last"
            src={recordings2}
            alt="Maestro Series"
          />
          <div className="md:w-2/5">
            <h2 className="hidden md:block">Maestro Series</h2>
            <div>
              <p className="font-semibold">
                Vladimir Zakharov Suite: Nostalgia for the Grand Duchy…
              </p>
              <p>1. Prelude and Fughetta on Slavic Themes</p>
              <p>2. Grunwald Pastorale (Fantasy)</p>
              <p className="mb-2">3. Variations on the Lithuanian Theme</p>
              <p className="font-semibold">Francisco Tarrega</p>
              <p className="mb-2">4. The Carnival of Venice</p>
              <p className="font-semibold">Johann Kaspar Mertz</p>
              <p className="mb-2">5. Tarantelle</p>
              <p className="font-semibold">Augustin Barrios Mangore</p>
              <p>6. Medallon Antiguo</p>
              <p className="mb-2">7. Gavota al Estilo Antiguo</p>
              <p className="font-semibold">Dionysio Aguado</p>
              <p className="mb-2">8. Allegro brilliante (Studium nr.27)</p>
              <p className="font-semibold">Sergio Assad</p>
              <p className="mb-2">9. Fantasia Carioca</p>
              <p className="font-semibold">Leo Brouwer</p>
              <p className="mb-2">10. Paisaje Cubano con Fiesta</p>
              <p className="font-semibold">Astor Piazzolla</p>
              <p className="mb-2">11. Invierno Porteno (tra.: Sergio Assad)</p>
              <p className="font-semibold">Django Reinhardt</p>
              <p className="mb-2">12. Nuages (arr.: Roland Dyens)</p>
              <p className="font-semibold">
                Vinicius de Moraes & Antonio Carlos Jobim
              </p>
              <p className="mb-2">13. Felicidade (arr.: Roland Dyens)</p>
              <p className="font-semibold">Roland Dyens</p>
              <p>14. Tango en Skai</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recordings;
