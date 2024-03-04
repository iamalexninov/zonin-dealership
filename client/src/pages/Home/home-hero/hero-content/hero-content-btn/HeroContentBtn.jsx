import { dynamicStyles } from "../../../../../utils/dynamicStyles";
import { HrefTag } from "../../../../../components/common/Link";
import { Button } from "../../../../../components/common/button/Button";

export const HeroContentBtn = () => {
  const styles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      backgroundColor: "var(--orange)",
      color: "var(--white)",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      backgroundColor: "transparent",
      color: "var(--orange)",
      border: "1px solid var(--orange)",
    },
  };

  return (
    <HrefTag path="/inventory">
      <Button
        baseStyle={styles.baseStyle}
        hoverStyle={styles.hoverStyle}
        content="discover more"
      />
    </HrefTag>
  );
};
