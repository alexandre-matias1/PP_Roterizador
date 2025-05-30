import { Truck } from "lucide-react";
import { toast } from "sonner";

export function Header() {
  return (
    <>
      <div className="p-6 flex gap-8 items-center bg-zinc-950 border-b-1 border-zinc-300">
        <Truck color="#f1f1f1" size={32}/>
        <span className="text-zinc-50 font-sans text-xl">Roteirizador</span>
        <div className="flex gap-8 absolute z-1 top-13 left-190">
          <button className="bg-red-800 px-4 rounded-2xl h-14  text-zinc-50 border-zinc-200 border hover:bg-red-700"
          onClick={()=>{toast.success("Rota recalculada")}}>Recalcular</button>
          <button className="bg-cyan-800 px-4 rounded-2xl h-14  text-zinc-50 border-zinc-200 border hover:bg-cyan-700"
          onClick={()=>{toast.success("Rota recalculada")}}>Enviar para o protheus</button>
        </div>
      </div>
      
    </>
  );
}
