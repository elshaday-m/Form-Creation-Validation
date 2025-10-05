// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Step 3: Select data container element
  const dataContainer = document.getElementById("api-data");

  try {
    // Step 4: Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = "";

    // Step 6: Create and append user list
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Handle errors
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching data:", error);
  }
}

// Step 8: Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
