import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'skyblue', padding: 16, fontSize: 48, fontWeight:'bold',textAlign:'center'}}>
        Peacock
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;