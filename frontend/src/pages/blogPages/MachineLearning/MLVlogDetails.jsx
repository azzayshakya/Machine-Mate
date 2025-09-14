import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MLVlogDetail() {
  const { id } = useParams();
  const [vlog, setVlog] = useState(null);

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

    const selectedVlog = dummyData.find((item) => item.id === parseInt(id, 10));
    setVlog(selectedVlog);
  }, [id]);

  if (!vlog) {
    return <div className="py-20 text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/machine-learning-vlogs"
          className="text-cyan-600 hover:underline"
        >
          ← Back to Vlogs
        </Link>
        <h1 className="mb-4 mt-6 text-4xl font-bold text-gray-900">
          {vlog.title}
        </h1>
        <p className="leading-relaxed text-gray-700">{vlog.content}</p>
      </div>
    </div>
  );
}
