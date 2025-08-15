
import prof from '../../assets/images/avatar.jpg';

const ProfileSeller = () => {
  const formData = {
    firstName: 'Eunice',
    lastName: 'Asamoah',
    email: 'oseinkunim@gmail.com',
    phone: '0540502328',
    whatsapp: '0540502328',
    bio: 'A student',
    country: 'Ghana',
    campus: 'KNUST',
    city: 'Kumasi',
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Seller's Profile</h2>

      {/* Profile Header */}
      <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <img src={prof} alt="Seller" className="w-20 h-20 object-cover rounded-full" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {formData.firstName} {formData.lastName}
          </h2>
          <p className="text-sm text-gray-500">Seller</p>
          <p className="text-sm text-gray-400">
            {formData.city}, {formData.country}
          </p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-base font-medium text-gray-700">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
          {[
            { label: 'First Name', value: formData.firstName },
            { label: 'Last Name', value: formData.lastName },
            { label: 'Email', value: formData.email },
            { label: 'Phone', value: formData.phone },
            { label: 'Whatsapp Number', value: formData.whatsapp },
            { label: 'Bio', value: formData.bio },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-medium text-gray-500">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Address Info */}
      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-base font-medium text-gray-700">Address</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-sm text-gray-600">
          {[
            { label: 'Country', value: formData.country },
            { label: 'Campus', value: formData.campus },
            { label: 'City', value: formData.city },
          ].map(({ label, value }) => (
            <div key={label} className={label === 'City' ? 'col-span-full' : ''}>
              <p className="font-medium text-gray-500">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSeller;
