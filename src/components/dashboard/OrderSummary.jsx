import { useState } from 'react';
import { Wallet, Tag, Circle, CheckCircle2, Zap } from 'lucide-react';
import Button from '../common/Button';

const coupons = [
  {
    code: 'WELCOME20',
    description: '20% off on your first month',
    discount: 0.2,
  },
  {
    code: 'ANNUAL50',
    description: '50% off on annual plans',
    discount: 0.5,
  },
];

const OrderSummary = () => {
  const [walletApplied, setWalletApplied] = useState(false);
  const [couponOpen, setCouponOpen] = useState(true);
  const [couponInput, setCouponInput] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState(coupons[0]);

  const basePrice = 14999;
  const gstRate = 0.18;
  const walletBalance = 500;

  const couponDiscount = selectedCoupon ? Math.round(basePrice * selectedCoupon.discount) : 0;
  const afterCoupon = basePrice - couponDiscount;
  const walletDeduction = walletApplied ? Math.min(walletBalance, afterCoupon) : 0;
  const taxableAmount = afterCoupon - walletDeduction;
  const tax = Math.round(taxableAmount * gstRate * 100) / 100;
  const total = taxableAmount + tax;

  const fmt = (n) =>
    n.toLocaleString('en-IN', { minimumFractionDigits: n % 1 !== 0 ? 2 : 0 });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-5">Order Summary</h2>

      {/* Plan info */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">₹4,999</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Includes 5,000 credits/mo.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-0.5">Selected Plan</p>
          <p className="text-base font-bold text-gray-900">Startup</p>
        </div>
      </div>

      {/* Upgrade to Growth */}
      <button className="w-full border border-blue-500 text-blue-600 rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors mb-5">
        <Zap size={14} className="fill-blue-500 text-blue-500" />
        Upgrade to Growth Plan
      </button>

      <div className="border-t border-gray-100 pt-4 mb-4 space-y-3">
        {/* Wallet */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={15} className="text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">Wallet Balance</p>
              <p className="text-xs text-gray-400">₹{fmt(walletBalance)} available</p>
            </div>
          </div>
          <button
            onClick={() => setWalletApplied((v) => !v)}
            className={`text-sm font-semibold transition-colors ${walletApplied ? 'text-red-500 hover:text-red-600' : 'text-blue-600 hover:text-blue-700'}`}
          >
            {walletApplied ? 'Remove' : 'Apply'}
          </button>
        </div>

        {/* Coupon */}
        <div>
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setCouponOpen((v) => !v)}
          >
            <div className="flex items-center gap-2">
              <Tag size={15} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-800">Apply Coupon</span>
            </div>
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className={`text-gray-400 transition-transform ${couponOpen ? 'rotate-180' : ''}`}
            >
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {couponOpen && (
            <div className="mt-3 space-y-2">
              {/* Input row */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-xs text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button className="text-xs text-blue-600 font-semibold px-2 hover:text-blue-700">
                  Apply
                </button>
              </div>

              {/* Coupon options */}
              {coupons.map((c) => {
                const active = selectedCoupon?.code === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCoupon(active ? null : c)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-left transition-colors ${
                      active ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{c.code}</p>
                      <p className="text-xs text-gray-400">{c.description}</p>
                    </div>
                    {active ? (
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    ) : (
                      <Circle size={16} className="text-gray-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Price breakdown */}
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>₹{fmt(basePrice)}.00</span>
        </div>
        {couponDiscount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Coupon ({selectedCoupon.code})</span>
            <span>-₹{fmt(couponDiscount)}.00</span>
          </div>
        )}
        {walletDeduction > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Wallet</span>
            <span>-₹{fmt(walletDeduction)}.00</span>
          </div>
        )}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tax (18% GST)</span>
          <span>₹{fmt(tax)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
        <span className="text-sm font-semibold text-gray-800">Total due today</span>
        <span className="text-xl font-bold text-blue-600">
          {fmt(total)}
        </span>
      </div>

      {/* Proceed */}
      <Button variant="primary" size="full" className="mt-4 rounded-lg font-semibold text-sm">
        Proceed to Payment
      </Button>
    </div>
  );
};

export default OrderSummary;
