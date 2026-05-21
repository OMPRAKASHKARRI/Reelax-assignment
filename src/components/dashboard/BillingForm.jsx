import { useState } from 'react';
import Button from '../common/Button';

const InputField = ({ label, placeholder, optional = false, value, onChange, name }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-600">
      {label}
      {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
    </label>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white"
    />
  </div>
);

const SelectField = ({ label, placeholder, options = [], value, onChange, name }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-600">{label}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white appearance-none"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </div>
  </div>
);

const indianStates = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'WB', label: 'West Bengal' },
];

const BillingForm = ({ onCancel, onSave }) => {
  const [form, setForm] = useState({
    companyName: 'abhigyan',
    email: 'abhigyanpandey@getrelax.com',
    gstNumber: '',
    panNumber: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-5">Review your details</h2>

      {/* Billing Information */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Billing Information</h3>
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          <InputField
            label="Company Name"
            placeholder="abhigyan"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            placeholder="abhigyanpandey@getrelax.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <InputField
            label="GST Number"
            placeholder="GST Number"
            name="gstNumber"
            optional
            value={form.gstNumber}
            onChange={handleChange}
          />
          <InputField
            label="PAN Number"
            placeholder="PAN Number"
            name="panNumber"
            optional
            value={form.panNumber}
            onChange={handleChange}
          />
          <InputField
            label="Premise/House no."
            placeholder="Premise/House no."
            name="premise"
            value={form.premise}
            onChange={handleChange}
          />
          <InputField
            label="Street"
            placeholder="Street"
            name="street"
            value={form.street}
            onChange={handleChange}
          />
          <SelectField
            label="State"
            placeholder="Select state"
            name="state"
            options={indianStates}
            value={form.state}
            onChange={handleChange}
          />
          <SelectField
            label="City"
            placeholder="Select city"
            name="city"
            options={[]}
            value={form.city}
            onChange={handleChange}
          />
          <InputField
            label="Country"
            placeholder="India"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
          <InputField
            label="Pin Code"
            placeholder="Pincode"
            name="pinCode"
            value={form.pinCode}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
        <button
          onClick={onCancel}
          className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2"
        >
          Cancel
        </button>
        <Button variant="primary" size="md" onClick={() => onSave(form)}>
          Save Details
        </Button>
      </div>
    </div>
  );
};

export default BillingForm;
