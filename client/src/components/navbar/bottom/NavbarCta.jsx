import { HrefTag } from "../../common/Link";
import { Button } from "../../common/button/Button";
import { dynamicStyles } from "../../../utils/dynamicStyles";

export const NavbarCta = () => {
  let styles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      backgroundColor: "var(--orange)",
      width: "100%",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      color: "var(--orange)",
      border: "solid 1px var(--orange)",
      width: "100%",
    },
  };

  return (
    <HrefTag path="/inventory">
      <Button
        content="catalogue"
        baseStyle={styles.baseStyle}
        hoverStyle={styles.hoverStyle}
      />
    </HrefTag>
  );
};
