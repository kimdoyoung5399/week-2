import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  border-radius: 10px;
`;
