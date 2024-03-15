import MainLogo from "./MainLogo";
import SignInButton from "./SignInButton";
const MainHeader = () => {
  return (
    <div className="bg-black flex flex-row justify-between p-2">
      <MainLogo/>
      <SignInButton />
    </div>
  );
};

export default MainHeader;
