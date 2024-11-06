"use client";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface ImageCard {
  place: string;
  title: string;
  urlImage: string;
  description: string;
}
let image_card: ImageCard = {
  place: "",
  title: "",
  urlImage: "",
  description: "",
};

export const Carrusel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="max-w-[1200px] gap-4 grid grid-cols-12 grid-rows-2 px-8">
      {list.map((item, index) => (
        <Card
          key={index}
          isFooterBlurred
          className={`col-span-12 sm:col-span-4 h-[300px] items-center justify-center ${
            index >= list.length - 1 ? "sm:col-start-5" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/80 uppercase font-bold">
              {item.place}
            </p>
            <h4 className="text-white font-medium text-2xl">{item.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={item.urlImage}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
            <Button
              key={index}
              className="font-medium text-white"
              color="primary"
              radius="full"
              size="sm"
              onPress={() => {
                image_card = item;
                onOpen();
              }}
            >
              Más información
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Modal isOpen={isOpen} size="5xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {image_card.title} en {image_card.place}
              </ModalHeader>
              <ModalBody>
                <p>{image_card.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  className="font-medium text-white"
                  color="primary"
                  onPress={onClose}
                >
                  Saber más
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const list: ImageCard[] = [
  {
    place: "Fusagasugá",
    title: "La clarita, el Jardín de Doña Bertha",
    urlImage:
      "https://i.pinimg.com/originals/c9/c0/48/c9c04898a3166d1782dd2ece47525a95.jpg",
    description:
      "La clarita, el Jardín de Doña Bertha: Es un jardín tradicional construido hace más de 100 años su atractivo principal es la variedad de orquídeas y bromelias símbolos florales de la región.",
  },
  {
    place: "Fusagasugá",
    title: "Parque San Rafael",
    urlImage:
      "https://adrenalinecolombia.com/wp-content/uploads/2023/04/pexels-free-nature-stock-7261-800x600.jpg",
    description:
      "El Parque San Rafael es una de las principales zonas de afluencia y reserva de agua del Sumapaz, zona de recarga de acuíferos y humedades, bosques montañosos húmedos",
  },
  {
    place: "Cabrera",
    title: "Paramo del Sumapaz",
    urlImage:
      "https://www.ambienteysociedad.org.co/wp-content/uploads/2021/07/shutterstock_1245597697.jpg",
    description:
      "Esta reserva hídrica de la cordillera Oriental comprende páramos como Cruz Verde, Las Ánimas, Las Mercedes, El Cedral, Andabobos, Clarín, El Cajón y Los Tambos de Colorado. Más de 300 hectáreas hacen parte de Reservas Naturales de la Sociedad Civil (RNSC), que se localizan en Cabrera, Bogotá, Chipaque y Choachí.",
  },
  {
    place: "Pandi",
    title: "Las piedras de El Helechal",
    urlImage: "https://www.rupestreweb.info/suxmuralcementerio.jpg",
    description:
      "Pinturas grabadas en estas piedras por las antiguas comunidades muiscas que habitaron la región.",
  },
  {
    place: "Pandi",
    title: "El puente Natural",
    urlImage:
      "https://caminantesdelretorno.com/wp-content/uploads/2018/09/img-31.jpg",
    description:
      "Se trata de un puente formado por piedras, por el que pasaron los soldados de la Guerra de los Mil Días. También cuenta con una formación rocosa, una cueva natural y un mariposario que se ha formado a lo largo de los años.",
  },
  {
    place: "Pasca",
    title: "Museo De Arqueología e Historia Natural de Pasca",
    urlImage:
      "https://www.clubviveuniminuto.org/sites/default/files/2021-11/museo-de-arqueologia-pasca-cultura-egresados-uniminuto.png",
    description:
      "Resguarda una colección arqueológica compuesta aproximadamente por 2.600 piezas, que representan la cultura material, los saberes tradicionales y la cosmovisión de los pueblos indígenas que habitaron el territorio colombiano hace cientos de años.",
  },
  {
    place: "Pasca",
    title: "Laguna Colorada",
    urlImage:
      "https://s2.wklcdn.com/image_43/1298141/18018788/11371775Master.jpg",
    description:
      "Constituida como una reserva hidrológica del Paramo de Sumapaz, por sus espectaculares lagunas Colorados, cajita y cojones; siendo estas un atractivo turístico inigualable.",
  },
  {
    place: "San Bernardo",
    title: "Las momias de San Bernardo",
    urlImage:
      "https://www.infobae.com/resizer/v2/ZHAYTZP5CFD65H6TV63DVBMHHI.jpg?auth=3c7ef639f87b28a348dc5f8b08b4efcb2fd31b91503dd54c555581726e9b4926&smart=true&width=992&height=661&quality=85",
    description:
      "Desde hace más de 40 años, los pobladores se dieron cuenta que algunos cuerpos se convertían en momias de una manera natural ¿Cuál es la razón? Según algunas personas, el consumo de alimentos típicos de la región como la guatila, el balú y la calabaza hacen que los cuerpos de los fallecidos presenten un fenómeno de momificación natural.",
  },
  {
    place: "Tibacuy",
    title: "El Cerro Quininí",
    urlImage:
      "https://www.roadtrip.travel/_next/image?url=https%3A%2F%2Fstatic.roadtrip.travel%2Fmedia%2Fblog%2F1f2b8478696811eaafcaa22f1f7fc821.jpg&w=1920&q=75",
    description:
      'En lengua muisca traduce "Montaña sagrada de la Luna“, guarda en sus raíces el paso del tiempo, desde los asentamientos de los Indios Panches, quienes acudían a este cerro a celebrar rituales de adoración a la luna, algunas formaciones rocosas tienen un nombre específico dependiendo del tipo de rituales que allí se daban en torno a la diosa Luna.',
  },
  {
    place: "Venecia",
    title: "Salto la Chorrera",
    urlImage:
      "https://s0.wklcdn.com/image_124/3729777/24100593/15328584Master.jpg",
    description:
      "El recorrido se realiza por un sendero eco-turístico divisando la variedad de cultivos de la región, es una caminata rodeada de leyendas e historias de los Sutagaos, antiguos pobladores del municipio y antecesores de toda la variedad de arte rupestre que se encuentra plasmada en las piedras aledañas al recorrido.",
  },
];
