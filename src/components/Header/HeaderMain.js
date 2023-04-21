import React from "react";
import { AuthProvider, useAuth } from "../../context/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-between">
      {user ? (
        <div className="flex items-center gap-x-3 ">
          <img
            src={user.avata}
            alt=""
            className="w-10 h-10 rounded-full object-covers"
          />
          <span>
            Welcom back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        "Welcome"
      )}
      <button
        className="p-2 bg-gray-400 rounded-lg"
        onClick={() => setUser(null)}
      >
        Sign out{" "}
      </button>
    </div>
  );
};

export default HeaderMain;
