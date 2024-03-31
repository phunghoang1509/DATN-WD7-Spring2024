import React from "react";
import SideMenu from "./SideMenu";

const AdminLayout = ({ children }) => {
  const menuItems = [
    {
      name: "Thống kê",
      url: "/admin/dashboard",
      icon: "fas fa-tachometer-alt",
    },

    {
      name: "Quản lý đơn hàng",
      url: "/admin/orders",
      icon: "fas fa-receipt",
    },
    {
      name: "Quản lý người dùng",
      url: "/admin/users",
      icon: "fas fa-user",
    },
    {
      name: "Quản lý đánh giá",
      url: "/admin/reviews",
      icon: "fas fa-star",
    },
  ];

  return (
    <div>
      <div className="mt-2 mb-4 py-4">
        <h2 className="text-center fw-bolder">
          Trang thống kê dành cho Quản trị viên
        </h2>
      </div>

      <div className="row justify-content-around">
        <div className="col-12 col-lg-3">
          <SideMenu menuItems={menuItems} />
        </div>
        <div className="col-12 col-lg-8 user-dashboard">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
