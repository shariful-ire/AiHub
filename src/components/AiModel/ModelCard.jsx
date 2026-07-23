import React from "react";

const ModelCard = ({ model }) => {
  return (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 h-full flex flex-col">
  
  <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-gradient-to-br from-slate-100 to-gray-200/50 rounded-xl mb-4 flex items-center justify-center p-3 overflow-hidden flex-shrink-0 group">
    <img 
      src={model.image} 
      alt={model.title}
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
    />
  </div>
  
  <h1 className="text-xl font-bold text-slate-800 mb-1 text-center">{model.title}</h1>
  
  <p className="text-sm text-slate-600 leading-relaxed text-center flex-1">{model.description}</p>
  
  <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between">
    <p className="text-lg font-bold text-slate-800">
      {model.price === 0 ? 'Free' : `$${model.price}/Month`}
    </p>
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:shadow-md">
      Subscribe
    </button>
  </div>
</div>
  );
};

export default ModelCard;
