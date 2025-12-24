import { Box, Link, TextField, Button, Typography, Container, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user-slice.js";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

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

        navigate("/");
      } else {
        setError(data.message || "Giriş başarısız");
      }
    } catch (err) {
      setError("Sunucuya bağlanılamadı");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              background: "#fff",
              borderRadius: "16px",
              padding: "50px 40px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <img
                src="./main_logo.svg"
                alt="Logo"
                style={{ maxWidth: "240px", height: "auto" }}
              />
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#333" }}>
              Hoş Geldiniz
            </Typography>
            <Typography variant="body2" sx={{ color: "#999", mb: 4 }}>
              Mezun Takip Sistemine giriş yapın
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: "8px" }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box sx={{ position: "relative" }}>
                <MailIcon
                  sx={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#667eea",
                  }}
                />
                <TextField
                  fullWidth
                  type="email"
                  placeholder="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      paddingLeft: "40px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      "&:hover fieldset": {
                        borderColor: "#667eea",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#667eea",
                        boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                      },
                    },
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ position: "relative" }}>
                <LockIcon
                  sx={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#667eea",
                  }}
                />
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      paddingLeft: "40px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      "&:hover fieldset": {
                        borderColor: "#667eea",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#667eea",
                        boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
                      },
                    },
                  }}
                />
              </Box>

              {/* Submit Button */}
              <Button
                fullWidth
                type="submit"
                disabled={loading}
                variant="contained"
                sx={{
                  background: "#667eea",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  textTransform: "none",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                  },
                  "&:disabled": {
                    background: "#ccc",
                  },
                  transition: "all 0.3s ease",
                  marginTop: "10px",
                }}
              >
                {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Button>
            </Box>

            {/* Divider */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", my: 4 }}>
              <Box sx={{ flex: 1, height: "1px", background: "#eee" }} />
              <Typography variant="caption" sx={{ color: "#999" }}>
                Veya
              </Typography>
              <Box sx={{ flex: 1, height: "1px", background: "#eee" }} />
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: "15px", justifyContent: "center", mb: 3 }}>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#f0f0f0",
                  transition: "all 0.3s",
                  "&:hover": { background: "#667eea", transform: "scale(1.1)" },
                }}
              >
                <img src="./images/instagram.svg" alt="Instagram" style={{ maxWidth: "20px" }} />
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#f0f0f0",
                  transition: "all 0.3s",
                  "&:hover": { background: "#667eea", transform: "scale(1.1)" },
                }}
              >
                <img src="./images/facebook.svg" alt="Facebook" style={{ maxWidth: "20px" }} />
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#f0f0f0",
                  transition: "all 0.3s",
                  "&:hover": { background: "#667eea", transform: "scale(1.1)" },
                }}
              >
                <img src="./images/X.svg" alt="X" style={{ maxWidth: "20px" }} />
              </Link>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#f0f0f0",
                  transition: "all 0.3s",
                  "&:hover": { background: "#667eea", transform: "scale(1.1)" },
                }}
              >
                <img src="./images/youtube.svg" alt="YouTube" style={{ maxWidth: "20px" }} />
              </Link>
            </Box>

            {/* Footer */}
            <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #eee" }}>
              <Typography variant="caption" sx={{ color: "#999" }}>
                Giriş yapamıyor musunuz?{" "}
                <Link href="#" sx={{ color: "#667eea", fontWeight: 600, textDecoration: "none" }}>
                  Destek alın
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AuthPage;
