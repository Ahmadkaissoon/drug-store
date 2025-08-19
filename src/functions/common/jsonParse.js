function jsonParse(data) {
  // If data is already an object or null, return it directly
  if (typeof data === "object" && data !== null) {
    return data;
  }

  // Handle case where data is undefined or empty
  if (!data) {
    return null;
  }

  try {
    // Attempt to parse JSON string
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to parse JSON data:", error);
    return null;
  }
}

export default jsonParse;
