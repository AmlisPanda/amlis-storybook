import classNames from "classnames";
import styles from "./button.module.scss";
import styled from "styled-components";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Tooltip
   */
  tooltip?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button<{ primary: boolean }>`
  background-color: ${(props) => {
    return props.primary ? props.color : "white";
  }};
  color: ${(props) => {
    return !props.primary ? props.color : "white";
  }};
`;
/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = "medium",
  color = "#a61f69", // TODO: remplace with primary variable
  tooltip,
  label,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      aria-label={tooltip || label}
      title={tooltip}
      className={classNames(styles.button, {
        [styles.primary]: primary,
        [styles[`button-${size}`]]: !!size,
      })}
      color={color}
      primary={primary}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
