import React from 'react';

const Preferences = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Preferences</h2>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium text-gray-700 mb-2 md:mb-0">Enable Notifications</label>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium text-gray-700 mb-2 md:mb-0">Dark Mode</label>
          <input type="checkbox" className="toggle toggle-secondary" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium text-gray-700 mb-2 md:mb-0">Email Updates</label>
          <input type="checkbox" className="toggle toggle-accent" />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Preferences;
