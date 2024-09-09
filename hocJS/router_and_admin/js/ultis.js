const baseUrl = "http://localhost:3000";

const getMethod = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error("An error occurred", error);
  }
};

const postMethod = async (endpoint, data) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", e);
  }
};

const putMethod = async (endpoint, data) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", e);
  }
};
// const user await fetch("")

// const users = await getMethod("user")
