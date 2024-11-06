"use client";
import { Card, CardBody, Image } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className={title()}>Sobre nosotros</h1>
      </div>
      <div className="hidden md:flex gap-2">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            overflow: "hidden",
            width: "max",
          }}
        >
          {/* Imagen a la izquierda */}
          <div style={{ flex: 1, padding: "56px" }}>
            <Image
              isBlurred
              isZoomed
              alt="Imagen de ejemplo"
              radius="full"
              src="/su_turismo.png"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                minWidth: "250px",
              }}
            />
          </div>

          {/* Texto a la derecha */}
          <div style={{ flex: 1, padding: "16px", minWidth: "400px" }}>
            <Card>
              <CardBody>
                <p className="text-xl">
                  Su-turismo es una página web que muestra todos los sitios
                  turísticos y especifique lugares que pertenezcan a esa zona
                  junto con los acontecimientos históricos o datos interesantes
                  que hagan más atractivo el lugar. Nos desatacamos en nuestra
                  página web porque no solo mostramos una ruta para llegar a
                  estos lugares, sino que también les mostramos la historia, los
                  datos más relevantes, lugares cercanos para comer y toda la
                  información necesaria para que tengan la experiencia completa
                  al visitar estos sitios turísticos. Con este servicio queremos
                  incentivar a que muchos turistas conozcan los lugares
                  turísticos del Sumapaz y donde puedan pasar un rato agradable,
                  pues muchos suelen ir siempre a los mismos sitios sin saber de
                  la existencia lugares extraordinarios en los que pueden vivir
                  grandes experiencias.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <div className="md:hidden basis-1 pl-4">
        <div
          style={{
            display: "grid",
            alignItems: "center",
            borderRadius: "8px",
            overflow: "hidden",
            width: "max",
          }}
        >
          {/* Imagen a la izquierda */}
          <div style={{ flex: 1, padding: "56px" }}>
            <Image
              isBlurred
              isZoomed
              alt="Imagen de ejemplo"
              radius="full"
              src="/su_turismo.png"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                minWidth: "250px",
              }}
            />
          </div>

          {/* Texto a la derecha */}
          <div style={{ flex: 1, padding: "16px", minWidth: "400px" }}>
            <Card>
              <CardBody>
                <p className="text-xl">
                  Su-turismo es una página web que muestra todos los sitios
                  turísticos y especifique lugares que pertenezcan a esa zona
                  junto con los acontecimientos históricos o datos interesantes
                  que hagan más atractivo el lugar. Nos desatacamos en nuestra
                  página web porque no solo mostramos una ruta para llegar a
                  estos lugares, sino que también les mostramos la historia, los
                  datos más relevantes, lugares cercanos para comer y toda la
                  información necesaria para que tengan la experiencia completa
                  al visitar estos sitios turísticos. Con este servicio queremos
                  incentivar a que muchos turistas conozcan los lugares
                  turísticos del Sumapaz y donde puedan pasar un rato agradable,
                  pues muchos suelen ir siempre a los mismos sitios sin saber de
                  la existencia lugares extraordinarios en los que pueden vivir
                  grandes experiencias.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
