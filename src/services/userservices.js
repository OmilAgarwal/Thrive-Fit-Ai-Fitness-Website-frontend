// userService.js

export const fetchUserEmail = async () => {
    const token = localStorage.getItem("authToken");
  
    if (!token) {
      return { success: false, message: "Token not found" };
    }
  
    try {
      const response = await fetch("https://thrive-fit-ai-fitness-website-backend.onrender.com/getUserEmail", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        return { success: true, email: data.email };
      } else {
        return { success: false, message: "Failed to fetch user email" };
      }
    } catch (error) {
      console.error("Error fetching email:", error);
      return { success: false, message: "Server error" };
    }
  };
  