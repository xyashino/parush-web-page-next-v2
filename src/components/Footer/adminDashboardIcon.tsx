import React from "react";
import Link from "next/link";
import AdminIcon from "@/components/icons/AdminIcon";

const AdminDashboardIcon = () => {
  return (
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl">
      <Link
        className="hover:text-foreground hover:bg-background text-xl p-2 rounded-full transition-colors duration-300 ease-in-out cursor-pointer"
        href="/login"
        draggable={false}
      >
        <AdminIcon />
      </Link>
    </span>
  );
};

export default AdminDashboardIcon;