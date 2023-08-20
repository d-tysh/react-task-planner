import { ButtonStyled } from "./Button.styles";

export const Button = ({children, selected, type, ...otherProps}) => {
    return (
        <ButtonStyled className={selected ? 'selected' : null} type={type} {...otherProps}>
            {children}
        </ButtonStyled>
    )
}