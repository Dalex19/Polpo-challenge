import ProfilePage from "../src/components/profile/ProfilePage";
import { JokeContext } from "./components/context/JokeContext";

function App() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-start">
      <JokeContext>
        <ProfilePage />
      </JokeContext>
    </div>
  );
}

export default App;
