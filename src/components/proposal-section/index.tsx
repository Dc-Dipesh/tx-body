import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProposalSection = () => {
  const proposalData = [
    {
      name: "Sutra SDK",
      description: "Lightweight governance tooling for Cardano",
      link: "#sutra-sdk",
    },
    {
      name: "On-chain Voting UI Kit",
      description: "Reusable components for voting dashboards",
      link: "#voting-ui-kit",
    },
    {
      name: "Tx Explorer Lite",
      description: "Minimal block explorer for dApp integration",
      link: "#tx-explorer-lite",
    },
    {
      name: "Governance API",
      description: "RESTful API for governance metadata",
      link: "#governance-analytics",
    },
  ];
  return (
    <div className="container mx-auto h-full w-full px-2 ">
      <div className="flex flex-col justify-center h-full  z-10 relative overflow-y-clip pt-10">
        <Image
          src="/proposal-bg.png"
          alt="proposal Background"
          fill
          sizes="100vw"
          className="object-cover blur-[100px]  -translate-y-1/2 z-0 opacity-30"
        />
        <div className="flex flex-col items-center relative">
          <p className="uppercase">[ PROPOSALS ]</p>
          <h2 className="text-3xl md:text-5xl font-medium mt-1 md:mt-3">
            Fund14 Proposals
          </h2>
        </div>
        <div>
          {proposalData.map((proposal, index) => (
            <ProposalCard
              key={index}
              name={proposal.name}
              description={proposal.description}
              link={proposal.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;

const ProposalCard = ({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-between md:items-center border-b-2 border-[#404040]/25 py-5 md:py-10 ">
      <h3 className="text-xl font-semibold flex-1">{name}</h3>
      <p className="text-muted flex-1 md:text-center">{description}</p>
      <div className="flex-1 flex justify-end">
        <Button variant={"outline"} size={"lg"} asChild className="z-20">
          <Link href={link} className="flex items-center gap-2">
            READ MORE <ArrowUpRightIcon size={"18"} />
          </Link>
        </Button>
      </div>
    </div>
  );
};
