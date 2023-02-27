const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  try {
    event.preventDefault(); // prevent the default form submission

    // Get the user input from the form
    const repoName = document.querySelector("#repoName").value;
    const githubUsername = document.querySelector("#githubUsername").value;
    const fileName = document.querySelector("#fileName").value;

    // Create the markdown content based on the user input
    const data = {
      repoName: repoName,
      githubUsername: githubUsername,
    };

    const fileContent = generateREADME(data);

    // Create a blob object from the file content
    const blob = new Blob([fileContent], { type: "text/markdown" });

    // Create a temporary URL for the blob object
    const url = URL.createObjectURL(blob);

    // Create an anchor element with a download attribute and click it
    //if the user adds .md to the file name, alert them that it is not needed
    if (fileName.includes(".md")) {
      alert(" '.md' is not needed in the file name.");
      return;
    } else {
      const link = document.createElement("a");
      link.download = `${fileName}.md`;
      link.href = url;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      alert("README.md has been created successfully!");
    }

    // Wait for the file to be downloaded, then revoke the URL and remove the anchor element
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 0);
  } catch (error) {
    console.log(error);
  }
});

// when clear button is clicked, clear the form
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("form").reset();
});
