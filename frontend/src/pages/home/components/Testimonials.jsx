import { useState } from 'react';

const TestimonialsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    location: '',
    thoughts: ''
  });

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      profession: "Product Manager",
      location: "San Francisco, CA",
      avatar: "SJ",
      rating: 5,
      comment: "kbDoc has completely transformed how we handle customer support. The knowledge base is intuitive and our response time has decreased by 60%.",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      name: "Michael Chen",
      profession: "Software Developer", 
      location: "Toronto, Canada",
      avatar: "MC",
      rating: 5,
      comment: "The documentation features are incredible. Setting up our help center took less than an hour. Highly recommended!",
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      profession: "Customer Success Lead",
      location: "Austin, TX",
      avatar: "ER",
      rating: 5,
      comment: "Our customers love the self-service options. The search functionality is powerful and the UI is beautiful.",
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      name: "David Kim",
      profession: "Startup Founder",
      location: "Seoul, Korea",
      avatar: "DK",
      rating: 5,
      comment: "Perfect for startups! Easy to implement, great customization options, and excellent support from the team.",
      color: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      profession: "Technical Writer",
      location: "London, UK",
      avatar: "LT",
      rating: 5,
      comment: "The markdown support and content organization features make documentation creation a breeze. Love it!",
      color: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      name: "Alex Martinez",
      profession: "UX Designer",
      location: "Barcelona, Spain",
      avatar: "AM",
      rating: 5,
      comment: "Beautiful design templates and responsive layout. Our help center looks professional and modern.",
      color: "from-pink-400 to-rose-400"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.profession || !formData.location || !formData.thoughts) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form and close
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      location: '',
      thoughts: ''
    });
    setShowForm(false);
    alert('Thank you for your feedback! Your testimonial has been submitted.');
  };

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-20 left-1/3 w-32 h-32 bg-gradient-to-r from-green-200 to-cyan-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm uppercase tracking-wider mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have transformed their support experience with kbDoc
          </p>
          
          {/* Add Testimonial Button */}
          <button
            onClick={() => setShowForm(true)}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
            <span className="relative flex items-center space-x-2">
              <span>💬</span>
              <span>Share Your Experience</span>
            </span>
          </button>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 h-80 bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
                >
                 
                  {/* <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.profession}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Verified Customer</span>
                    <span>✓</span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform animate-slideUp">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Share Your Story</h3>
                  <p className="text-cyan-100">Help others discover kbDoc</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-white hover:text-gray-200 text-2xl font-light transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  placeholder="Product Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                  placeholder="New York, USA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Thoughts *</label>
                <textarea
                  name="thoughts"
                  value={formData.thoughts}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Share your experience with kbDoc..."
                ></textarea>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;