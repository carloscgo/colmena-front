'use client';

import GlobalStyles from "@/styles/GlobalStyles";
import { StyledRegistry } from "..";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledRegistry>
      <GlobalStyles />

      {props.children}
    </StyledRegistry>
  );
};

export default Providers;
