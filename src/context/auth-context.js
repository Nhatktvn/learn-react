import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Minh Nhat",
    email: "minhnhat@gmail.com",
    avata:
      "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/184803061_1251725498593591_358362386654447840_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CRkTB3pq5LYAX_qz8vR&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDBvhXmfHEwXUFz40_LZqR2XDWADjU1F20DsUVwSzDbEA&oe=642CC6F0",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

//báo lỗi
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
export { useAuth, AuthProvider };
