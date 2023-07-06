import React, { SyntheticEvent } from "react";
import DropdownIcon from "@/components/icons/DropdownIcon";

interface Props {
  isOpen: boolean;
  toggle: (e: SyntheticEvent) => void;
  icon: React.ReactNode;
  text: string;
}

const ToggleButton = ({ toggle, isOpen, text, icon }: Props) => {
  const toggleIcon = isOpen ? "rotate-180" : "rotate-0";
  const toggleBtn = isOpen
    ? "bg-foreground text-background "
    : "text-foreground";
  return (
    <button
      onClick={toggle}
      className={`flex w-full font-mono duration-500 appearance-none items-center justify-between rounded p-4 font-bold transition-colors hover:text-background hover:bg-foreground  ${toggleBtn}`}
    >
      <div className="flex items-center space-x-4">
        <span className="text-xl lg:text-2xl">{icon}</span>
        <h2 className="font-bold uppercase text-sm md:text-md">{text}</h2>
      </div>
      <DropdownIcon className={`${toggleIcon} transition-transform`} />
    </button>
  );
};

export default ToggleButton;