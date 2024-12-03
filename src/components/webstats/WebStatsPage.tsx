import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

interface Website {
  id: string;
  url: string;
  status: boolean;
  lastChecked: string | null;
}

const DashboardPage = () => {
  const [urls, setUrls] = useState<Website[]>([]);
  const [newUrl, setNewUrl] = useState<string>("");

  // Authentication state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, fetch URLs
        fetchUrls(user.uid);
      } else {
        // User is logged out
        setUrls([]); // Clear URLs when logged out
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const fetchUrls = async (userId: string) => {
    try {
      const q = query(collection(db, "websites"), where("userId", "==", userId));
      const snapshot = await getDocs(q);
      const fetchedUrls = snapshot.docs.map((doc) => ({
        ...(doc.data() as Website),
      }));
      setUrls(fetchedUrls);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  // Check if URL is alive (basic check using fetch)
  const checkUrlStatus = async (url: string) => {
    try {
      const response = await fetch(url, { method: "HEAD", cache: "no-store" });
      return response.ok; // If status code is 2xx or 3xx, the URL is considered alive
    } catch (error) {
      return false; // If there is an error (e.g., network error), we consider the URL as down
    }
  };

  // Update the URL status in Firestore
  const updateUrlStatus = async (id: string, status: boolean) => {
    try {
      const urlDoc = doc(db, "websites", id);
      await updateDoc(urlDoc, {
        status: status,
        lastChecked: new Date().toISOString(),
      });
      setUrls((prevUrls) =>
        prevUrls.map((url) =>
          url.id === id ? { ...url, status, lastChecked: new Date().toISOString() } : url
        )
      );
    } catch (error) {
      console.error("Error updating URL status: ", error);
    }
  };

  // Handle email signup
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created and logged in!");
    } catch (error) {
      console.error("Error signing up: ", error);
      alert("Failed to sign up.");
    }
  };

  // Handle email login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Error logging in: ", error);
      alert("Failed to log in.");
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  // Add URL to Firestore
  const handleAddUrl = async () => {
    if (!newUrl) {
      alert("URL cannot be empty!");
      return;
    }
    try {
      await addDoc(collection(db, "websites"), {
        url: newUrl,
        userId: auth.currentUser?.uid, // Ensure user is logged in
        status: false, // Initially, assume the URL is down
        lastChecked: null,
      });
      setNewUrl(""); // Clear the input field
      alert("URL added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Delete URL from Firestore
  const handleDeleteUrl = async (id: string) => {
    try {
      await deleteDoc(doc(db, "websites", id));
      setUrls(urls.filter((url) => url.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Handle checking all URLs for status
  const handleCheckUrlsStatus = async () => {
    for (const url of urls) {
      const status = await checkUrlStatus(url.url);
      await updateUrlStatus(url.id, status);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Display URL form and dashboard only if user is logged in */}
      {auth.currentUser ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter URL"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <button onClick={handleAddUrl}>Add URL</button>
          </div>

          <h3>Your Monitored URLs</h3>
          <ul>
            {urls.length === 0 ? (
              <p>No URLs found. Add a URL to monitor.</p>
            ) : (
              urls.map((url) => (
                <li key={url.id}>
                  {url.url} - {url.status ? "Alive" : "Down"} (Last checked: {url.lastChecked})
                  <button onClick={() => handleDeleteUrl(url.id)}>Delete</button>
                </li>
              ))
            )}
          </ul>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleCheckUrlsStatus}>Check All URL Statuses</button>
        </div>
      ) : (
        <div>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>

          <h3>Sign Up</h3>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
