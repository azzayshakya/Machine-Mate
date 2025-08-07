const DemosSection = () => {
  const demoCards = [
    {
      id: 1,
      title: "Help Desk",
      subtitle: "Helpdesk Documentation",
      bgColor: "bg-gradient-to-br from-cyan-100 to-blue-100",
    },
    {
      id: 2,
      title: "Cool Documentation",
      subtitle: "Support Communities",
      bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
    },
    {
      id: 3,
      title: "Help Center",
      subtitle: "Knowledge Base",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "Onepage Documentation",
      subtitle: "Single Page Docs",
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-500">
            TARGETED DEMOS
          </p>
          <h1 className="mb-8 text-5xl font-bold text-gray-900">
            Explore Our Demos
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {demoCards.map((card) => (
            <div
              key={card.id}
              className="group transform cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="h-96 overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="border-b bg-gray-100 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-4 flex-1">
                      <div className="text-xs rounded bg-white px-3 py-1 text-gray-600">
                        aj.ajay.com
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${card.bgColor} relative h-full overflow-hidden p-6`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600">
            Choose from multiple demo variations to find the perfect fit for
            your project
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemosSection;
