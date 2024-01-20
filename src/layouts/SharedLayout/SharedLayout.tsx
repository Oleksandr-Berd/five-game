import { Suspense } from "react";
import { DNA } from "react-loader-spinner";

import * as SC from "./SharedLayoutStyles";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <SC.SharedLayoutStyled>
      <Suspense fallback={<DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />}>{children}</Suspense>
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
