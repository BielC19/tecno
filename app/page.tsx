import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const cardData = [
    {
      title: "Card 1",
      content: "This is the content for Card 1.",
      image: "https://picsum.photos/seed/1/800/400",
    },
    {
      title: "Card 2",
      content: "Here's some information for Card 2.",
      image: "https://picsum.photos/seed/2/800/400",
    },
    {
      title: "Card 3",
      content: "Card 3 contains important details.",
      image: "https://picsum.photos/seed/3/800/400",
    },
    {
      title: "Card 4",
      content: "The fourth card has additional data.",
      image: "https://picsum.photos/seed/4/800/400",
    },
    {
      title: "Card 5",
      content: "Card 5 presents more wiki content.",
      image: "https://picsum.photos/seed/5/800/400",
    },
    {
      title: "Card 6",
      content: "The final card in this example grid.",
      image: "https://picsum.photos/seed/6/800/400",
    },
  ]

  return (
    <>
      <header className="mb-8 text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Wiki</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our collection of knowledge cards covering various topics. Each card represents a different area of
          interest or piece of information.
        </p>
      </header>

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

