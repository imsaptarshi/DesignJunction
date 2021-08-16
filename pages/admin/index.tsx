import type { NextPage } from "next";
import { useState } from "react";
import ResourceCardAdmin from "../../components/Admin/resourceCardAdmin.component";
import { useAdmin } from "../../providers/admin.provider";

const Admin: NextPage = ({ data }: any) => {
  const { password, setPassword } = useAdmin();
  const [_password, _setPassword] = useState("");

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return (
      <main className="justify-center items-center p-6 flex flex-col">
        <div className="font-bold">Admin Panel</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPassword(_password);
            _setPassword("");
          }}
        >
          <input
            onChange={(e) => {
              _setPassword(e.target.value);
            }}
            className="border-2 px-4 py-1 rounded-lg"
            type="password"
            placeholder="Enter admin pass"
          />
        </form>
      </main>
    );
  } else {
    return (
      <main className="bg-blue-200 justify-center items-center p-6 flex flex-col font-bold">
        Admin Panel
        <div className="flex space-x-5 flex-wrap  mt-4">
          <div className="cursor-pointer text-white px-6 py-2 rounded-xl text-xl bg-blue-600">
            Resources
          </div>
          <div className="cursor-pointer text-black hover:bg-gray-300 duration-200 px-6 py-2 rounded-xl text-xl bg-gray-200">
            Submissions
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 auto-cols-auto">
          {data.map((_data: any, key: any) => (
            <ResourceCardAdmin {..._data} key={key} />
          ))}
        </div>
      </main>
    );
  }
};

Admin.getInitialProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/get/resources`
  );
  const json = await res.json();
  return { data: json };
};

export default Admin;
