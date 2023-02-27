const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");
  console.log(name, content);

  localStorage.setItem("name", name);
  localStorage.setItem("content", content);
});

const postTweet = (name, tweet) => {
  const ul = document.querySelector(".t__container");
  const today = new Date();
  const time = today.toLocaleTimeString();
  const tweetContent = `
    <div class="tweet">
        <p>${name}</p>
        <p>${tweet}</p>
        <span class="date">${time}</span>
    </div>
    `;
  ul.innerHTML += tweetContent;
};
