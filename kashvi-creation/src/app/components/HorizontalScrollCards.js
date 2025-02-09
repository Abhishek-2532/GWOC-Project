"use client";
import React from "react";

const cards = [
  { id: 1, title: "Card 1", description: "This is card 1", image: "image1.png" },
  { id: 2, title: "Card 2", description: "This is card 2", image: "image2.png" },
  { id: 3, title: "Card 3", description: "This is card 3", image: "image3.png" },
  { id: 4, title: "Card 4", description: "This is card 4", image: "image4.png" },
  { id: 5, title: "Card 5", description: "This is card 5", image: "image5.png" },
];

export default function HorizontalScrollCards() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
        <div className="flex space-x-6 p-3">
          {cards.map((card) => (
            <div key={card.id} className="min-w-[280px] bg-white shadow-lg p-4 rounded-lg snap-center">
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-bold mt-3">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
