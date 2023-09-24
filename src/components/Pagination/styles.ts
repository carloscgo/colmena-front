"use client";

import styled from "styled-components";

const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const PageLink = styled.a`
  cursor: pointer;
`;

export const PageItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 0.5rem;
`;

export default Pagination;

