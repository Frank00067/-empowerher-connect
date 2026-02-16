// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ======= Login / Register =======
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered successfully"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "workshops.html")
    .catch(err => alert(err.message));
}

// ======= Load Workshops =======
function loadWorkshops() {
  const list = document.getElementById("workshopList");
  db.collection("workshops").get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `<b>${data.title}</b> - ${data.description} (${data.date})
        <button onclick="registerWorkshop('${doc.id}')">Register</button>`;
      list.appendChild(li);
    });
  });
}

function registerWorkshop(workshopId) {
  const user = auth.currentUser.uid;
  db.collection("registrations").add({userId: user, workshopId: workshopId})
    .then(() => alert("Registered for workshop!"));
}

// ======= Mentorship Request =======
function submitRequest() {
  const user = auth.currentUser;
  const mentorName = document.getElementById("mentorName").value;
  const requestText = document.getElementById("request").value;
  db.collection("mentorshipRequests").add({
    userId: user.uid,
    userEmail: user.email,
    mentorName: mentorName,
    request: requestText,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => alert("Mentorship request sent!"));
}

// ======= Messaging =======
function sendMessage() {
  const user = auth.currentUser;
  const receiver = document.getElementById("receiver").value;
  const content = document.getElementById("content").value;
  db.collection("messages").add({
    sender: user.uid,
    receiver: receiver,
    content: content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => document.getElementById("content").value = "");
}

function loadMessages() {
  const user = auth.currentUser;
  const list = document.getElementById("messageList");
  db.collection("messages")
    .where("receiver", "==", user.uid)
    .orderBy("timestamp", "asc")
    .onSnapshot(snapshot => {
      list.innerHTML = "";
      snapshot.forEach(doc => {
        const msg = doc.data();
        const li = document.createElement("li");
        li.textContent = `From: ${msg.sender} - ${msg.content}`;
        list.appendChild(li);
      });
    });
}

// Load workshops or messages when user logs in
auth.onAuthStateChanged(user => {
  if (user) {
    if (document.getElementById("workshopList")) loadWorkshops();
    if (document.getElementById("messageList")) loadMessages();
  }
});

