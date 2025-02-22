const AuthProviderLogin = () => {
    const googleLogin = () => {
      const width = 500;
      const height = 600;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
  
      window.open(
        "http://localhost:5000/auth/google",
        "GoogleLogin",
        `width=${width},height=${height},top=${top},left=${left},popup=yes`
      );
    };
  
    return (
      <button onClick={googleLogin} className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-center items-center mb-2">
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 mr-2" />
        Sign in with Google
      </button>
    );
  };
  
  export default AuthProviderLogin;
  