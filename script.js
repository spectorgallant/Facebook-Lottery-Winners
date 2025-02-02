document.addEventListener("DOMContentLoaded", function() {
  const winners = [
      { name: "John Doe", amount: "$5,000", image: "winner1.jpg", ticket: "245678" },
      { name: "Jane Smith", amount: "$10,000", image: "winner2.jpg", ticket: "678910" },
      { name: "Alice Johnson", amount: "$3,500", image: "winner3.jpg", ticket: "123456" },
      { name: "Bob Williams", amount: "$7,200", image: "winner4.jpg", ticket: "789012" },
      { name: "Emma Brown", amount: "$12,000", image: "winner5.jpg", ticket: "456789" },
      { name: "Liam Davis", amount: "$2,500", image: "winner6.jpg", ticket: "678901" },
      { name: "Mia Wilson", amount: "$4,200", image: "winner7.jpg", ticket: "345678" },
      { name: "James Clark", amount: "$9,100", image: "winner8.jpg", ticket: "234567" },
      { name: "Olivia Lewis", amount: "$6,000", image: "winner9.jpg", ticket: "890123" },
      { name: "William Harris", amount: "$8,500", image: "winner10.jpg", ticket: "987654" },
      { name: "Sophia Lee", amount: "$11,000", image: "winner11.jpg", ticket: "876543" },
      { name: "Benjamin Walker", amount: "$15,000", image: "winner12.jpg", ticket: "543210" },
      { name: "Charlotte Allen", amount: "$5,500", image: "winner13.jpg", ticket: "432109" },
      { name: "Amelia Young", amount: "$13,500", image: "winner14.jpg", ticket: "210987" },
      { name: "Jack King", amount: "$3,000", image: "winner15.jpg", ticket: "109876" },
      { name: "Isabella Scott", amount: "$7,800", image: "winner16.jpg", ticket: "543876" },
      { name: "Noah Adams", amount: "$6,300", image: "winner17.jpg", ticket: "654321" },
      { name: "Ava Mitchell", amount: "$9,900", image: "winner18.jpg", ticket: "321765" },
      { name: "Lucas Robinson", amount: "$4,800", image: "winner19.jpg", ticket: "876321" },
      { name: "Ethan Perez", amount: "$10,500", image: "winner20.jpg", ticket: "765432" }
  ];

  const winnerContainer = document.getElementById("winner-container");

  winners.forEach(winner => {
      const winnerCard = document.createElement("div");
      winnerCard.classList.add("winner-card");

      winnerCard.innerHTML = `
          <img src="${winner.image}" alt="${winner.name}">
          <h3>${winner.name}</h3>
          <p>Won: ${winner.amount}</p>
          <button class="claim-btn" onclick="contactAgent('${winner.name}', '${winner.ticket}')">Contact Your Agent Now</button>
      `;

      winnerContainer.appendChild(winnerCard);
  });
});

function contactAgent(name, ticket) {
  alert("Important: Please note that you'll be asked to identify yourself to confirm you are the real person claiming this prize.");

  // Create the message content
  const message = `Hi, I'm ${name}, and my ticket number is ${ticket}. I won a prize and would like to claim it.`;

  // Redirect to SMS app with the message pre-filled
  window.location.href = `sms:+1234567890?body=${encodeURIComponent(message)}`;
}