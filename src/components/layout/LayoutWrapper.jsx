import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-12 lg:pl-48">
        {children}
      </main>
    </div>
  );
};

export default LayoutWrapper;
