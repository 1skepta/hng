import React from "react";
import { Menu, Edit } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <button>
        <Menu size={24} />
      </button>
      <h2 className="text-xl">SkeptaGPT</h2>
      <button>
        <Edit size={24} />
      </button>
    </div>
  );
}

export default Header;
