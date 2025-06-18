"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGoogleLogin } from "@react-oauth/google";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  //  Redirect to dashboard if already logged in
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      router.replace("/dasboard");
    }
  }, []);

  //  Handle Login Form Submit
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      // Simulate successful login (replace with real API)
      const fakeUser = { email, name: "Welcome" };
      const fakeToken = "dummy-token-123";

      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(fakeUser));

      console.log("Login successful:", fakeUser);
      router.push("/dasboard");
    } catch (error: any) {
      console.error("Login error:", error.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  //  Handle Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Token:", tokenResponse);
      localStorage.setItem("googleAccessToken", tokenResponse.access_token);
      setToken(tokenResponse.access_token);

      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await res.json();
        localStorage.setItem("user", JSON.stringify(userInfo));
        localStorage.setItem("token", tokenResponse.access_token);
        router.push("/dasboard");
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    },
    onError: (error) => console.error("Google Login Failed:", error),
  });

  //  Fetch User Info from Google if token exists
  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedToken = localStorage.getItem("googleAccessToken");
      if (!storedToken) return;

      try {
        const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const userInfo = await response.json();
        setUser(userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    fetchUserInfo();
  }, [token]);

  return (
    <div className="min-h-screen bg-white">
      <div className="p-[3rem]">
        <Image
          src="/images/hostinger-black.svg"
          alt="Hostinger Logo"
          width={166}
          height={28}
        />
      </div>

      <div className="flex justify-center mt-[-5.5rem]">
        <div className="bg-white w-[26%]">
          <h2 className="text-[24px] font-bold text-gray-800 text-center mb-6">
            Log in
          </h2>
          {error && (
            <p className="text-red-500 text-center mb-4 font-semibold">
              {error}
            </p>
          )}

          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => handleGoogleLogin()}
              className="flex items-center w-[21%] gap-2 px-[16px] py-[13px] border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100 justify-center"
            >
              <img src="/images/google.svg" alt="Google" className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleGoogleLogin()}
              className="flex items-center w-[21%] gap-2 px-[16px] py-[13px] bg-[#1877F2] border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100 justify-center"
            >
              <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="border-b w-full"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="border-b w-full"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white placeholder-gray-500 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="w-5 h-5"
                />
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#673DE6] text-white py-3 rounded-md hover:bg-purple-700 font-semibold"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="text-center mt-4">
            <a
              href="#"
              className="text-[14px] font-[700] text-[#673DE6] hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="text-center mt-4">
            <a
              href="#"
              className="text-[14px] font-[700] text-[#673DE6] hover:underline"
            >
              Can't Access Your Account?
            </a>
          </div>

          <p className="text-center text-[16px] font-[700] mt-4 text-[#43434B]">
            New to Hostinger?{" "}
            <a href="#" className="text-[#673DE6] hover:underline">
              Choose your services
            </a>{" "}
            to get started!
          </p>
        </div>
      </div>
    </div>
  );
}
