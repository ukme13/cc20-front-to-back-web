import { Loader } from "lucide-react";

function Buttons({ isSubmitting, label }) {
  return (
    <button className="bg-black text-white p-2 rounded-md hover:bg-black/80" disabled={isSubmitting}>
      {isSubmitting ? ( <div className="flex gap-2"><Loader className="animate-spin" /> <p>Loading</p></div>
      ) : ( label )}
    </button>
  );
}
export default Buttons;
