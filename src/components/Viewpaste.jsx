import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function Viewpaste() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((paste) => paste._id === id);

  if (!paste) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center shadow-2xl">
          <h1 className="text-3xl font-bold text-red-400 mb-3">
            Paste Not Found
          </h1>

          <p className="text-gray-400 mb-6">
            The paste you're looking for doesn't exist.
          </p>

          <button
            onClick={() => navigate("/pastes")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Back to Pastes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6">

          <button
            onClick={() => navigate("/pastes")}
            className="text-gray-400 hover:text-white mb-5 transition"
          >
            ← Back to Pastes
          </button>

          <h1 className="text-3xl md:text-4xl font-bold">
            {paste.title}
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Created:{" "}
            {new Date(paste.createdAt).toLocaleString()}
          </p>

        </div>

        {/* Code/Text Viewer */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-800 bg-gray-900">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-3 text-sm text-gray-500">
              paste.txt
            </span>

          </div>

          {/* Content */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-gray-200 font-mono text-sm md:text-base leading-7 whitespace-pre-wrap break-words">
              {paste.content}
            </pre>
          </div>

        </div>

        {/* Bottom buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => navigate("/pastes")}
            className="bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-xl font-semibold transition"
          >
            Back
          </button>

          <button
            onClick={() => navigate(`/?pasteid=${paste._id}`)}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl font-semibold transition"
          >
            Edit Paste
          </button>

        </div>

      </div>
    </div>
  );
}

export default Viewpaste;