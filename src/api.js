const apiUrl = "https://ott-be-dev.netskill.com";

const callApi = async (url, method = "GET", data = null, headers = {}) => {
  try {
    const response = await fetch(apiUrl + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong.");
    }
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default callApi;
