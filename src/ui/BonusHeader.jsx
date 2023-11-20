import styled from "styled-components";

const StyledBonusHeader = styled.div`
    background-color: var(--color-yellow-100);
    padding: 1.2rem 2.4rem;
    border-bottom: 1px solid var(--color-grey-100);
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 1.2rem;
`

export default function BonusHeader() {
  return (
    <StyledBonusHeader>
        <span>👋</span>
        <span>Data mutations (create, update, delete) are deactivated in this demo app. Part of Jonas Schmedtmann's 
            <a href="https://www.udemy.com/course/the-ultimate-react-course/" target="_blank" rel="noreferrer" class="sc-kFDfur ehZbra">Ultimate React Course →</a>
        </span>
    </StyledBonusHeader>
  )
}
