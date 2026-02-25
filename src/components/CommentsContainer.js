const commentsData = [
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [],
  },
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [
      {
        name: "Vaghela gopal",
        comment: "loream lorem lorem lorem lorem...",
        replies: [
          {
            name: "Vaghela gopal",
            comment: "loream lorem lorem lorem lorem...",
            replies: [
              {
                name: "Vaghela gopal",
                comment: "loream lorem lorem lorem lorem...",
                replies: [
                  {
                    name: "Vaghela gopal",
                    comment: "loream lorem lorem lorem lorem...",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [
      {
        name: "Vaghela gopal",
        comment: "loream lorem lorem lorem lorem...",
        replies: [
          {
            name: "Vaghela gopal",
            comment: "loream lorem lorem lorem lorem...",
            replies: [
              {
                name: "Vaghela gopal",
                comment: "loream lorem lorem lorem lorem...",
                replies: [
                  {
                    name: "Vaghela gopal",
                    comment: "loream lorem lorem lorem lorem...",
                    replies: [
                      {
                        name: "Vaghela gopal",
                        comment: "loream lorem lorem lorem lorem...",
                        replies: [
                          {
                            name: "Vaghela gopal",
                            comment: "loream lorem lorem lorem lorem...",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [],
  },
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [],
  },
  {
    name: "Vaghela gopal",
    comment: "loream lorem lorem lorem lorem...",
    replies: [],
  },
];

function Comment({ data }) {
  const { name, comment } = data;
  return (
    <div className="flex items-start p-2 rounded-lg bg-white shadow-sm">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="avatar"
      />
      <div className="ml-3">
        <h2 className="font-semibold text-sm">{name}</h2>
        <p className="text-sm text-gray-700">{comment}</p>
      </div>
    </div>
  );
}

function CommentsList({ comments }) {
  return comments.map((comment, index) => (
    <div key={index} className="mb-2">
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border-l-2 border-gray-300 mt-1">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
}

export default function CommentsContainer() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* new comment input */}
      <div className="flex items-start mb-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="avatar"
        />
        <input
          className="flex-grow ml-3 p-2 border rounded-lg focus:outline-none"
          placeholder="Add a public comment..."
        />
      </div>

      {/* comments list with scrolling */}
      <div className="max-h-[500px] overflow-y-auto space-y-2">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
}
