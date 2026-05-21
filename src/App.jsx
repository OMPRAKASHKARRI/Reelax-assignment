import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import LayoutWrapper from './components/layout/LayoutWrapper';
import BillingForm from './components/dashboard/BillingForm';
import OrderSummary from './components/dashboard/OrderSummary';

const App = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = (formData) => {
    console.log('Saving billing details:', formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <LayoutWrapper>
      <div className="min-h-[calc(100vh-3rem)] bg-gray-50 px-4 py-6">
        {/* Back link */}
        <div className="max-w-5xl mx-auto mb-4">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <ArrowLeft size={14} />
            Back to plans
          </button>
        </div>

        {/* Main grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Left: Billing form */}
          <BillingForm onCancel={() => {}} onSave={handleSave} />

          {/* Right: Order summary */}
          <OrderSummary />
        </div>

        {/* Save toast */}
        {saved && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full shadow-lg animate-fade-in">
            Details saved successfully!
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default App;
