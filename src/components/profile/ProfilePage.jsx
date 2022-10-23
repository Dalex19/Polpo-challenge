import { Header } from "./Header";
import { Twitt } from "./Twitt";

const Profile = () => {
  return (
    <div className="w-full h-full overflow-y-auto max-w-lg md:border-x border-slate-500">
      <Header />
      <Twitt />
    </div>
  );
};

export default Profile;
