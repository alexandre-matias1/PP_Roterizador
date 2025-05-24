import { Truck } from "lucide-react";

export function Header() {
  return (
    <>
      <div className="p-6 flex gap-8 border-b-1 border-zinc-300">
        <Truck color="#f1f1f1" size={32}/>
        <span className="text-zinc-50 font-sans text-xl">Roteirizador</span>
      </div>
    </>
  );
}
