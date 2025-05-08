import User from "../models/user.model.js";

export const searchUsersByUsername = async (req, res) => {
  const query = req.query.q; // Get the search query from the request
  if (!query)
    return res.status(400).json({ error: "No search query provided" });

  try {
    console.log("Search query:", query); // Log the query parameter
    const users = await User.find({
      username: { $regex: query, $options: "i" },
    }).select("username _id"); // only return essential fields

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    console.log("Matched users:", users); // Log the matched users
    res.json({ users });
  } catch (error) {
    console.error("Error in searchUsers controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
