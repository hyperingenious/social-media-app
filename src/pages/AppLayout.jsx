import { Box } from "@mantine/core";
import SegmentedButton from "../components/SegmentedButton";
import styles from "./AppLayout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppLayout() {
  const navigate = useNavigate();
  const navigationData = [
    { label: "Explore", value: "explore" },
    { label: "People", value: "people" },
    { label: "Feed", value: "feed" },
    { label: "Profile", value: "profile" },
  ];

  useEffect(
    function () {
      if (window.location.pathname === "/") navigate("/explore");
    },
    [navigate]
  );

  function handleNavigationChange(route) {
    navigate(route);
  }
  return (
    <>
      <Box className={styles.nav}>
        <SegmentedButton
          data={navigationData}
          onChange={handleNavigationChange}
        />
      </Box>
      <Box className={styles.main}>
        <Outlet />{" "}
      </Box>
    </>
  );
}

export default AppLayout;
