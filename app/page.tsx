import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const cardData = [
    {
      title: "Dínamo ",
      content: "Generador de corrent continu que converteix energia mecànica en elèctrica. Va ser àmpliament utilitzat abans dels alternadors i rectificadors i encara es troba en aplicacions que requereixen un subministrament estable de corrent continu.",
      image: "/dinamo.jpg",
    },
    {
      title: `Motor d’Excitació Independent`,
      content: `Motor de corrent continu amb bobinatges separats, cosa que permet un control precís de la velocitat. És útil en aplicacions que requereixen estabilitat i resposta ràpida, com grues i trens elèctrics.`,
      image: ``,
    },
    {
      title: `Motor d’Excitació en Sèrie`,
      content: `Motor amb bobinatge d’excitació en sèrie amb l’induït, que proporciona un alt parell d’arrencada però una velocitat que disminueix amb la càrrega. Ideal per tramvies, ascensors i muntacàrregues, però perillós sense càrrega.`,
      image: ``,
    },
    {
      title: `Motor d’Excitació en Derivació (Shunt)`,
      content: `Motor amb bobinatge en paral·lel amb l’induït, fet que permet mantenir una velocitat constant. És eficient i estable en aplicacions com màquines industrials, bombes i ventiladors.`,
      image: ``,
    },
    {
      title: `Motor d’Excitació Composta`,
      content: `Combina característiques dels motors en sèrie i en derivació, oferint un bon equilibri entre parell d’arrencada i estabilitat de velocitat. Utilitzat en tracció elèctrica, generadors i equips industrials.`,
      image: ``,
    },
  ]
  const cardData2 = [
    {
      title: `Motors Síncrons `,
      content: `Els motors síncrons funcionen a una velocitat constant sincronitzada amb la freqüència del corrent altern. A causa del seu funcionament, necessiten sistemes externs per a l’arrencada, com ara excitació addicional o variadors de freqüència, per assolir la velocitat de sincronització.`,
      image: ``,
    },
    {
      title: `Motors Asíncrons`,
      content: `Els motors asíncrons són els més utilitzats a la indústria per la seva simplicitat i resistència. Són resistents, econòmics i requereixen poc manteniment. Poden tenir un rotor de gàbia d'esquirol, que és el més comú per la seva robustesa i economia, o un rotor bobinat, que permet un millor control de l'arrencada. Són habituals en aplicacions com ventiladors, bombes d’aigua i refrigeradors.`,
      image: ``,
    },
  ]
  const cardData3 = [
    {
      title: `Motors Monofàsics i Universals`,
      content: `Els motors monofàsics es fan servir en habitatges i petits comerços. Els motors d'inducció amb bobinatge auxiliar tenen un bobinatge addicional per facilitar l’arrencada i, en alguns casos, un condensador per millorar el procés. Els motors de condensador poden tenir un condensador permanent, que funciona sempre, o un condensador d’arrencada, que es desconnecta després d’engegar-se. Aquests motors es troben en electrodomèstics com rentadores, aires condicionats i refrigeradors. Els motors universals poden funcionar tant amb corrent continu com altern, tenen una velocitat molt alta i s’utilitzen en aspiradores, trepants i liquadores.`,
      image: ``,
    },
  ]
  const cardData4 = [
    {
      title: `Motors Pas a Pas `,
      content: `Els motors pas a pas es mouen en petits passos en lloc de girar contínuament, fet que permet un control precís del moviment. Requereixen un controlador electrònic per al seu funcionament. Hi ha dos tipus principals: els de reluctància variable, on el rotor no té imants, només ferro, i els híbrids, que combinen reluctància i imants permanents per millorar la precisió. Són comuns en impressores, robots i maquinària de control numèric.`,
      image: ``,
    },
    
  ]

  return (
    <>
      <header className="mb-8 text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Motors elèctrics</h1>
        <p className="text-xl text-gray-600 a mx-auto">
        Els motors elèctrics transformen l&apos;energia elèctrica en energia mecànica, permetent el moviment. Es fan servir en tot tipos d&apos;àmbits, com la indústria, els electrodomèstics i la robòtica. Segons el seu disseny i el tipus de corrent amb què funcionen, es divideixen en diverses categories.
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
      <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors de corrent altern</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData2.map((card, index) => (
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
      <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors Monofàsics i Universals</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData3.map((card, index) => (
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
      <div><h1 className="text-4xl b font-bold mb-4 text-gray-800 b">Motors Pas a Pas</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData4.map((card, index) => (
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