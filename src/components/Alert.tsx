import { ReactNode } from "react";

type TAlert = {
  bgColor: string;
  icon: ReactNode;
  text: string;
};

const Alert = ({ bgColor, icon, text }: TAlert) => {
  return (
    <aside className={`rounded-md bg-[${bgColor}] p-4 my-2`}>
      <p className="flex items-center text-sm font-medium text-black">
        <span className="pr-3">{icon}</span>
        {text}
      </p>
    </aside>
  );
};

export default Alert;
