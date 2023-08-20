import styled from "@emotion/styled";

export const FormStyled = styled.form`
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
`;

export const FormInput = styled.input`
    padding: 8px 12px;
    border-radius: 4px;
    font: inherit;
    flex-grow: 1;

    :focus {
        outline-color: #1976d2;
    }
`;