import { Utensils, BookOpen, Home, Heart } from 'lucide-react';

export function DonationBreakdown() {
  const breakdown = [
    {
      category: "Food",
      percentage: 35,
      icon: Utensils,
      color: "#FFCA0A",
      description: "Nutritionally balanced 3 meals and snacks",
    },
    {
      category: "Education",
      percentage: 35,
      icon: BookOpen,
      color: "#1A4065",
      description: "Tuition, materials, uniforms, extracurricular",
    },
    {
      category: "Housing",
      percentage: 20,
      icon: Home,
      color: "#A7B867",
      description: "Safe and nurturing living environment",
    },
    {
      category: "Healthcare",
      percentage: 10,
      icon: Heart,
      color: "#F1EDE8",
      description: "Health checkups, medicine, emergency care",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">How Your Donation is Used</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your monthly donation supports every aspect of the children's lives.
          </p>
        </div>

        {/* Breakdown Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {breakdown.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-[15px] p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="rounded-full p-4"
                    style={{
                      backgroundColor:
                        item.color === "#F1EDE8" ? "#F1EDE8" : `${item.color}20`,
                    }}
                  >
                    <Icon
                      size={40}
                      color={item.color === "#F1EDE8" ? "#1A4065" : item.color}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div
                  className="mb-2"
                  style={{
                    color: item.color === "#F1EDE8" ? "#1A4065" : item.color,
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    lineHeight: 1
                  }}
                >
                  {item.percentage}%
                </div>
                <h4 className="mb-3">{item.category}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Visual Bar */}
        <div className="max-w-4xl mx-auto bg-[#F1EDE8] rounded-[15px] p-8">
          <h4 className="text-center mb-6">Breakdown of Monthly 3,500 Yen Donation</h4>
          <div className="h-16 rounded-full overflow-hidden flex">
            {breakdown.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all hover:brightness-110"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor:
                    item.color === "#F1EDE8" ? "#D1C9C0" : item.color,
                }}
              >
                <span className="text-sm text-white mix-blend-difference">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor:
                      item.color === "#F1EDE8" ? "#D1C9C0" : item.color,
                  }}
                ></div>
                <span className="text-sm text-gray-700">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}