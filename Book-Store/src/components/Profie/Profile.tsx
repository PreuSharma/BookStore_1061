import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedType, setSelectedType] = useState("Work");

  const [ProfileFormData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...ProfileFormData, [name]:value });
  };


  return (
    <div className="px-45 py-2">
      {/* Breadcrumb */}
      <div className="flex mt-22 ">
        <p className="text-gray-500">Home / </p>
        <p>Profile</p>
      </div>

      {/* Personal Details */}
      <div className="mt-5 ml-10">
        <div className="flex ">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          <button
            className="text-red-500 ml-5  mt-[3px] cursor-pointer"
            onClick={() => setIsEditing(!isEditing)}
          >
             {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName" 
              value={ProfileFormData.fullName}
              onChange={handleChange}
              className="w-[50%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600">Email Id</label>
            <input
              type="text"
              name="email" 
              value={ProfileFormData.email}
              onChange={handleChange}
              className="w-[50%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password" 
              value={ProfileFormData.password}
              onChange={handleChange}
              className="w-[50%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-gray-600">Mobile Number</label>
            <input
              type="text"
              name="mobile" 
              value={ProfileFormData.mobile}
              onChange={handleChange}
              className="w-[50%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="mt-20 ml-10">
        <div className="flex">
          <h2 className="text-xl font-semibold">Address Details</h2>
          <button className="text-red-500 -mt-2 ml-5"   onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save" : "Edit"}
            </button>

          {/* Add New Address Button */}
          <div className="ml-63">
            <button className="text-red-500 border border-red-500 px-4 py-2 rounded">
              Add New Address
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">1. WORK</h3>
          <textarea
            className="w-[50%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
            name="address" 
            value={ProfileFormData.address}
            onChange={handleChange}
            disabled={!isEditing}
          >
          </textarea>
        </div>

        <div className="w-full flex mt-4 mb-10">
          <div>
            <label className="block text-gray-600">City/Town</label>
            <input
              type="text"
              name="city" 
              className="w-[140%] mt-1 block p-2 border border-gray-300 rounded-[2px] bg-gray-100"
              value={ProfileFormData.city}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="mt-1 ml-27">
            <label className="block text-gray-600">State</label>
            <input
              type="text"
              name="state" 
              value={ProfileFormData.state}
              onChange={handleChange}
              className="w-[140%] p-2 border rounded bg-gray-100"
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mb-20">
          <label className="block text-gray-600 font-medium mb-2">Type</label>
          <div className="flex gap-30">
            {["Home", "Work", "Other"].map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="addressType"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="hidden"
                  disabled={!isEditing}
                />
                <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedType === type
                  ? "border-red-700 bg-red-700"
                  : "border-gray-400"
              }`}
            >
              {selectedType === type && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
            <span className="ml-2">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
