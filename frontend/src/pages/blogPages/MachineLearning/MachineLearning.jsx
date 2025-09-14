import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MachineLearning() {
  const [vlogs, setVlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: "Introduction to Machine Learning",
        content:
          "Machine Learning is a subset of AI that allows systems to learn and improve automatically without explicit programming. In this vlog, we explore supervised and unsupervised learning with practical examples...",
      },
      {
        id: 2,
        title: "Deep Learning Explained",
        content:
          "Deep Learning is a branch of Machine Learning based on neural networks. This vlog explains how deep neural networks work, their applications in computer vision, NLP, and why they are so powerful...",
      },
      {
        id: 3,
        title: "Real-World Applications of ML",
        content:
          "From self-driving cars to recommendation engines, ML is everywhere. In this vlog, we cover the most impactful real-world applications and what’s next in the field of Artificial Intelligence...",
      },
    ];

    setTimeout(() => {
      setVlogs(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-500">
            MACHINE LEARNING
          </p>
          <h1 className="mb-8 text-5xl font-bold text-gray-900">
            Explore ML Vlogs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay updated with the latest trends, tutorials, and deep insights
            into Machine Learning.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading vlogs...</div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vlogs.map((vlog) => (
              <div
                key={vlog.id}
                className="group transform cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="flex h-72 flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="flex-1 p-6">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">
                      {vlog.title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-gray-600">
                      {vlog.content.slice(0, 120)}...
                    </p>
                  </div>
                  <div className="border-t px-6 py-4">
                    <Link
                      to={`/machine-learning-blog/${vlog.id}`}
                      className="font-medium text-cyan-600 hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
