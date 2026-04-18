export default function Admin() {
  const isAdminLogIn = false;
  return (
    <div>
      {isAdminLogIn ? <h1>Welcome Admin</h1> : <h1>Create An Admin Account</h1>}
    </div>
  );
}
