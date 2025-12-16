import { Box, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user-slice.js";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputStyle = {
    width: "300px",
    height: "40px",
    borderRadius: "4px",
    padding: "7px",
    outline: "none",
    border: "none",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        const { token, ...user } = data;
        dispatch(setUser(user));

        navigate("/"); // login sonrası yönlendirme
      } else {
        setError(data.message || "Giriş başarısız");
      }
    } catch (err) {
      setError("Sunucuya bağlanılamadı");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "450px",
            height: "547px",
            borderRadius: "20px",
            background: "#C1C6D4",
            padding: "45px 88px 57px 88px",
          }}
        >
          <img
            style={{ display: "block", margin: "0 auto" }}
            src="./main_logo.svg"
            alt="/"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {error && (
                <Box sx={{ color: "red", textAlign: "center", mb: 2 }}>
                  {error}
                </Box>
              )}

              <Box>
                <Box component="label" sx={{ display: "block", mb: 0.5 }}>
                  Email
                </Box>
                <input
                  style={inputStyle}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Box>

              <Box>
                <Box component="label" sx={{ display: "block", mb: 0.5 }}>
                  Şifre
                </Box>
                <input
                  style={inputStyle}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Box>

              <button
                style={{
                  width: "116px",
                  height: "34px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop: "30px",
                }}
                type="submit"
              >
                Giriş yap
              </button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <Link href="#">Giriş yapamıyor musunuz?</Link>

            <Box sx={{ display: "flex", gap: "20px", marginTop: "40px" }}>
              <Link href="#">
                <img src="./images/instagram.svg" alt="" />
              </Link>
              <Link href="#">
                <img src="./images/facebook.svg" alt="" />
              </Link>
              <Link href="#">
                <img src="./images/X.svg" alt="" />
              </Link>
              <Link href="#">
                <img src="./images/youtube.svg" alt="" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthPage;
