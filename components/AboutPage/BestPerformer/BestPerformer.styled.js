import styled from "styled-components";
export const StyledTitle = styled.h3`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 500;
  font-size: 56px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.015em;
  color: #f2f5fa;
  text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.32);
  @media only screen and (max-width: 991px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 28px;
    br {
      display: none;
    }
  }
`;
export const StyledBestPerformer = styled.div`
  background: url("/bestperformer.png"),
    linear-gradient(180deg, #686e79 0%, #666978 100%);
`;
