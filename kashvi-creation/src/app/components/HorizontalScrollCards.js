"use client";
import React from "react";

const cards = [
  { id: 1, title: "Card 1", description: "This is card 1", image: "image1.png", price: "$49.99" },
  { id: 2, title: "Card 2", description: "This is card 2", image: "image2.png", price: "$59.99" },
  { id: 3, title: "Card 3", description: "This is card 3", image: "image3.png", price: "$69.99" },
  { id: 4, title: "Card 4", description: "This is card 4", image: "image4.png", price: "$79.99" },
  { id: 5, title: "Card 5", description: "This is card 5", image: "image5.png", price: "$89.99" },
];

export default function HorizontalScrollCards() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
        <div className="flex space-x-6 p-3">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="min-w-[280px] bg-white shadow-lg p-0 min-h-[340px] rounded-lg snap-center"
            >
              {/* Product Image */}
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md" />
              
              {/* Product Title */}
              <h2 className="text-xl font-bold mt-3">{card.title}</h2>

              {/* Description */}
              <p className="text-gray-600">{card.description}</p>

              {/* Price Section */}
              <p className="text-lg font-semibold text-black mt-2">Price {card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

