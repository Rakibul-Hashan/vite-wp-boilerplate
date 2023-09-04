import React, { useState } from "react";

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const authInfo = {
    loading,
    // createUser,
    // login,
    user,
    setUser,
    // updateUser,
    // logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
