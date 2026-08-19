import { useSelector, useDispatch } from "react-redux";
import { removefrompaste } from "../redux/Pasteslice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Pastes() {
  const pastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // DELETE
  function handleDelete(id) {
    dispatch(removefrompaste(id));
  }

  // COPY
  async function handleCopy(content) {
    try {
      await navigator.clipboard.writeText(content);
      toast.success("Paste copied!");
    } catch (error) {
      toast.error("Failed to copy!");
    }
  }

  // SHARE
  async function handleShare(paste) {
    const shareUrl = `${window.location.origin}/pastes/${paste._id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: paste.title,
          text: paste.content,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Paste link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  }

  // VIEW
  function handleView(id) {
    navigate(`/pastes/${id}`);
  }

  // EDIT
  function handleEdit(id) {
    navigate(`/?pasteid=${id}`);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          All Pastes
        </h1>

        {pastes.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              No pastes found
            </h2>

            <p className="text-gray-400 mt-2">
              Create your first paste!
            </p>
          </div>
        ) : (
          <div className="space-y-5">

            {pastes.map((paste) => (
              <div
                key={paste._id}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              >

                {/* TITLE */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {paste.title}
                </h2>

                {/* CONTENT */}
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 whitespace-pre-wrap break-words">
                    {paste.content}
                  </p>
                </div>

                {/* DATE */}
                <p className="text-sm text-gray-400 mb-5">
                  Created:{" "}
                  {new Date(paste.createdAt).toLocaleString()}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={() => handleView(paste._id)}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleEdit(paste._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleCopy(paste.content)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => handleShare(paste)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Share
                  </button>

                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pastes;