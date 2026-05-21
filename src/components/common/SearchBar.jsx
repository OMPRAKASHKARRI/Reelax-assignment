import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = 'Search...', value, onChange, className = '' }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search size={14} className="absolute left-3 text-gray-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-8 pr-4 py-1.5 text-sm border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 w-full placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
