import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:30px;
  padding:40px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color:var(--bg-color);

    @media (max-width: 600px){
    flex-wrap:wrap;
  }
`;

const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color:var(--bg-color);
  color:white;
`;

const StyledImg = styled.img`
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  object-fit: contain;
`;

const StyledName = styled.h3`
  font-size: clamp(15px, 4vw, 30px);
`;

const StyledRole = styled.h4`
  font-family: var(--font-2);
  font-size: clamp(15px, 2vw, 25px);
  letter-spacing: 2px;
  background-color: var(--accent-color);
  padding: 10px;
`;

const StyledBio = styled.p`
  font-size: clamp(15px, 1.5vw, 20px);
`;

export const ProfileCard = ({ name, img, alt, role, bio }) => {
  return (
    <StyledCardContainer>
      
      <StyledImg src={img} alt={alt} />

      <StyledProfileInfo>
        <StyledName>{name}</StyledName>
        <StyledRole>{role}</StyledRole>
        <StyledBio>{bio}</StyledBio>
      </StyledProfileInfo>
    </StyledCardContainer>
  );
};
