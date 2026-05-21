const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button', disabled = false }) => {
  const base = 'inline-flex items-center justify-center font-medium rounded transition-all duration-150 focus:outline-none';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
    upgrade: 'bg-amber-500 text-white hover:bg-amber-600',
    outline_blue: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    full: 'px-4 py-3 text-sm w-full',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
