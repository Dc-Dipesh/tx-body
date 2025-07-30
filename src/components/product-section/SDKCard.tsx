import React from "react";

const SDKCard = (sdk: { name: string; description: string }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-6 text-center border p-4 md:p-12 rounded-xs backdrop-blur-2xl border-[#404040]/60 bg-[linear-gradient(124.2deg,rgba(64,134,114,0.05)_29.77%,rgba(255,255,255,0.0005)_75.14%)]">
      <h2 className="text-lg md:text-xl font-medium">{sdk.name}</h2>
      <p className="text-muted">{sdk.description}</p>
    </div>
  );
};

export default SDKCard;
