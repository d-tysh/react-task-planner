import styled from "@emotion/styled";

export const ListStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    & li:not(:last-child) {
        border-bottom: 1px solid grey;
    }
`;