import Image from "next/image";
import React from "react";
import SDKCard from "./SDKCard";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const ProductSection = () => {
  const sdks = [
    {
      name: "Transaction Building",
      description:
        "Comprehensive blockchain testing with built-in scenarios and chain simulation.",
    },
    {
      name: "E2E Testing Framework",
      description:
        "Seamless integration with Phoenix LiveView for building real-time blockchain applications.",
    },
    {
      name: "BEAM Virtual Machine",
      description: "Build fault-tolerant blockchain apps on Erlang’s BEAM VM.",
    },
    {
      name: "Phoenix LiveView Integration",
      description:
        "Build complex UTXO transactions using Elixir’s functional power.",
    },
  ];
  return (
    <div className="container mx-auto h-full w-full px-2 pt-10">
      <div className="flex flex-col justify-center h-full z-10 ">
        <div className="flex flex-col items-center relative">
          <p className="uppercase">[ Product ]</p>
          <h2 className="text-3xl md:text-5xl font-medium mt-1 md:mt-3">
            Sutra SDK
          </h2>
          <div className="text-center relative">
            <Image
              src="/product-bg.png"
              alt="Product Background"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <p className="mt-4 md:mt-8 text-muted max-w-[876px] text-center text-base md:text-xl">
              Lightweight developer SDK for building governance-enabled dApps on
              Cardano. Includes proposal lifecycle, identity, and voting
              logic—ready to integrate.
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-5 md:mt-10 max-w-[793px] mx-auto">
                {sdks.map((sdk, index) => (
                  <SDKCard
                    key={index}
                    name={sdk.name}
                    description={sdk.description}
                  />
                ))}
              </div>
              <Button variant="outline" size="lg" className="mt-10 text-sm">
                VIEW ON GITHUB <ArrowUpRightIcon size={"18"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
