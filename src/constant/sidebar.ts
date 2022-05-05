export const menuAdmin = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: `<ion-icon name="home"/></ion-icon>`,
  },
  {
    id: 2,
    title: "Quản Lí Sản Phẩm",
    path: "/product-manager",
    icon: `<ion-icon name="storefront"></ion-icon>`,
    rightArr: `<ion-icon name="chevron-forward"></ion-icon>`,
    downArr: `<ion-icon name="chevron-down"></ion-icon>`,
    subMenu: {
      id: 2.1,
      title: "Thêm Sản Phẩm",
      path: "/product-manager/add-product",
      icon: `<ion-icon name="home"/></ion-icon>`,
    },
  },

  {
    id: 3,
    title: "Quản Lí Đơn Hàng",
    path: "/order-manager",
    icon: `<ion-icon name="bag"/></ion-icon>`,
    rightArr: `<ion-icon name="chevron-forward"></ion-icon>`,
    downArr: `<ion-icon name="chevron-down"></ion-icon>`,
    subMenu: {
      id: 3.1,
      title: "Thêm Đơn Hàng",
      path: "/order-manager/add-order",
      icon: `<ion-icon name="home"/></ion-icon>`,
    },
  },
  {
    id: 4,
    title: "Quản Lí Khách Hàng",
    path: "/customer-manager",
    icon: `<ion-icon name="person"/></ion-icon>`,
    rightArr: `<ion-icon name="chevron-forward"></ion-icon>`,
    downArr: `<ion-icon name="chevron-down"></ion-icon>`,
    subMenu: {
      id: 4.1,
      title: "Thêm Khách Hàng",
      path: "/customer-manager/add-customer",
      icon: `<ion-icon name="home"/></ion-icon>`,
    },
  },
  {
    id: 5,
    title: "Quản Lí Thành Viên",
    path: "/member-manager",
    icon: `<ion-icon name="people-circle"/></ion-icon>`,
    rightArr: `<ion-icon name="chevron-forward"></ion-icon>`,
    downArr: `<ion-icon name="chevron-down"></ion-icon>`,
    subMenu: {
      id: 5.1,
      title: "Thêm Thành Viên",
      path: "/member-manager/add-member",
      icon: `<ion-icon name="home"/></ion-icon>`,
    },
  },
];


