import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const cardData = [
    {
      title: "Dínamo ",
      content: "Generador de corrent continu que converteix energia mecànica en elèctrica. Va ser àmpliament utilitzat abans dels alternadors i rectificadors i encara es troba en aplicacions que requereixen un subministrament estable de corrent continu.",
      image: "data:image/jpeg;base64,/9j/...", // Truncat per brevitat
    },
    {
      title: `Motor d’Excitació Independent`,
      content: `Motor de corrent continu amb bobinatges separats, cosa que permet un control precís de la velocitat. És útil en aplicacions que requereixen estabilitat i resposta ràpida, com grues i trens elèctrics.`,
      image: `https://picsum.photos/seed/2/800/400`,
    },
    {
      title: `Motor d’Excitació en Sèrie`,
      content: `Motor amb bobinatge d’excitació en sèrie amb l’induït, que proporciona un alt parell d’arrencada però una velocitat que disminueix amb la càrrega. Ideal per a tramvies, ascensors i muntacàrregues, però perillós sense càrrega.`,
      image: `https://picsum.photos/seed/3/800/400`,
    },
    {
      title: `Motor d’Excitació en Derivació (Shunt)`,
      content: `Motor amb bobinatge en paral·lel amb l’induït, fet que permet mantenir una velocitat constant. És eficient i estable en aplicacions com màquines industrials, bombes i ventiladors.`,
      image: `https://picsum.photos/seed/4/800/400`,
    },
    {
      title: `Motor d’Excitació Composta`,
      content: `Combina característiques dels motors en sèrie i en derivació, oferint un bon equilibri entre parell d’arrencada i estabilitat de velocitat. Utilitzat en tracció elèctrica, generadors i equips industrials.`,
      image: `https://picsum.photos/seed/5/800/400`,
    },
  ]

  return (
    <>
      <header className="mb-8 text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Motors elèctrics</h1>
        <p className="text-xl text-gray-600 a mx-auto">
          {`Els motors elèctrics transformen l'energia elèctrica en energia mecànica, permetent el moviment. Es fan servir en tot tipus d'àmbits, com la indústria, els electrodomèstics i la robòtica. Segons el seu disseny i el tipus de corrent amb què funcionen, es divideixen en diverses categories.`}
        </p>
      </header>
      <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors de corrent continu</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Image for ${card.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
