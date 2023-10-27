import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Mexicana.mx - Vuelos, Hoteles, Autos, Experiencias"
        />
        {/* <!-- Google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content="	booking, car rental, cruise, destination, experiences, flight, holiday, hotel, real estate, resort, tour, travel, travel agency, trip, vacation, agencia de viajes, bienes raíces, bienes raíces, crucero, de vacaciones, destino, dia de fiesta, experiencias, hotel, recurso, reserva, turística, viajar, viaje, vuelo"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
