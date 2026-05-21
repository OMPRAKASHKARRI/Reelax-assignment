import { Menu, Plus } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const Header = () => {
  return (
    <header className="h-12 bg-gray-900 flex items-center px-4 gap-4 fixed top-0 left-0 right-0 z-50">
      {/* Logo area */}
      <div className="flex items-center gap-2 mr-2">
        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">R</span>
        </div>
        <span className="text-white text-sm font-semibold hidden sm:block">Reelax</span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xs">
        <SearchBar placeholder="Find influencers to collaborate with" className="w-full" />
      </div>

      {/* Dot nav indicators */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-400' : 'bg-gray-600'}`} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-auto">
        <Button variant="upgrade" size="sm" className="rounded-full text-xs px-3 py-1">
          Upgrade
        </Button>
        <Button variant="primary" size="sm" className="rounded text-xs px-3 py-1 flex items-center gap-1">
          <Plus size={12} />
          Create Campaign
        </Button>
        {/* Avatar */}
        <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold ml-1">
          T
        </div>
        <button className="text-gray-400 hover:text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
