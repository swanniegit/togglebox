import React from 'react';

export default function CardEditor({ selectedCard, card, update }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-medium text-gray-800 mb-4">
        Editing: Card {selectedCard.slice(-1)} (.{selectedCard.replace('card', 'card-')})
        <span className="ml-2 text-sm text-gray-500">
          After changing a color, click off the card to see it update. Then scroll down to the preview for other changes.
        </span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Background Color</label>
          <div className="flex items-center gap-2">
            <input type="color" value={card.backgroundColor} onChange={(e) => update('backgroundColor', e.target.value)} className="w-12 h-8 rounded border cursor-pointer" />
            <input type="text" value={card.backgroundColor} onChange={(e) => update('backgroundColor', e.target.value)} className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Border Color</label>
          <div className="flex items-center gap-2">
            <input type="color" value={card.borderColor} onChange={(e) => update('borderColor', e.target.value)} className="w-12 h-8 rounded border cursor-pointer" />
            <input type="text" value={card.borderColor} onChange={(e) => update('borderColor', e.target.value)} className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Border Radius: {card.borderRadius}px</label>
          <input type="range" min="0" max="24" value={card.borderRadius} onChange={(e) => update('borderRadius', parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Padding: {card.padding}px</label>
          <input type="range" min="8" max="32" value={card.padding} onChange={(e) => update('padding', parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Shadow: {card.shadow}px</label>
          <input type="range" min="0" max="12" value={card.shadow} onChange={(e) => update('shadow', parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Border Width: {card.borderWidth}px</label>
          <input type="range" min="0" max="4" value={card.borderWidth} onChange={(e) => update('borderWidth', parseInt(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
}


