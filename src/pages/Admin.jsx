import AdminPanel from "../components/AdminPanel";
import Layout from "../components/Layout";

const Admin = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 py-10">
      <AdminPanel />
    </div>
    </Layout>
  );
};

export default Admin;