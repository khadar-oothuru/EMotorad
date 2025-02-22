import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const AuthSocial = () => {
  return (
    <div className="flex mt-6 space-x-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-black hover:scale-110 transition-transform" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl text-black hover:scale-110 transition-transform" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-black hover:scale-110 transition-transform" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="text-2xl text-black hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default AuthSocial;
