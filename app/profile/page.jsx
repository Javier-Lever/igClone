export default function Profile() {
  return (
        <div className="max-w-4xl mx-auto p-5">
          {/* Profile Header */}
          <div className="flex items-center mb-10">
            {/* Profile Image */}
            <img
              src="https://placehold.co/320x320/png" // Replace with your profile image URL
              alt="Profile"
              className="w-36 h-36 rounded-full mr-10"
            />
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <h1 className="text-2xl font-bold mr-4">username</h1>
                {/* Follow Button */}
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition">
                  Follow
                </button>
              </div>
              {/* Stats */}
              <div className="flex space-x-6 mb-3">
                <span>
                  <strong>100</strong> posts
                </span>
                <span>
                  <strong>500</strong> followers
                </span>
                <span>
                  <strong>300</strong> following
                </span>
              </div>
              {/* Bio */}
              <p className="text-sm">This is a bio. Welcome to my profile!</p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src="https://placehold.co/1080x1080/png" // Replace with your post image URL
                  alt={`Post ${index + 1}`}
                  className="absolute w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
  );
}
