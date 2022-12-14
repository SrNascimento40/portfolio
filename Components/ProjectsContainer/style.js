import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #D9D9D9;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 5vh 0 5vh;
    gap: 1vh;


    @media only screen and (max-width: 500px) {
        padding: 0 2vh 0 2vh;
    }
`;
export const Title = styled.h1`
    color: #2C2C2C;
    font-size: 72px;
    font-family: Inter;
    font-weight: 400;
    font-variant: small-caps;
    padding: 15px;

    @media only screen and (max-width: 500px) {
        font-size: 62px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 52px;
    }
    @media only screen and (max-width: 240px) {
        font-size: 32px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 78px;
        padding-bottom: 25px;
    }
`;
export const DescriptionText = styled.div`
    color: white;
    position: absolute;
    bottom: 0;
    font-size: 20px;
    font-family: Inter;
    font-weight: 300;
    padding-top: 5px;
    padding-bottom: 10px;
    display: none;
    text-align: center;
    width: 100%;
    background-color: black;
    opacity: 0.8;

    @media only screen and (max-width: 500px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 22px;
    }
`;
export const Carousel = styled.div`
    position: relative;
    border-radius: 50px;
    border: solid;
    border-width: 3px;
    border-color: #C2C2C2;
    height: 100%;
    width: 100%;
    text-align: center;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    background-image:url(${props => props.image});
    transition: background-image 1s;
    cursor: pointer;

    &:hover {
        .Description {
            display: block;
        }
    }

    @media only screen and (max-width: 600px) {
        &:hover {
            .Description {
                display: none;
            }
        }
    }
`;
export const CarouselDiv = styled.div`
    height: 70%;
    width: 70%;

    @media only screen and (max-width: 500px) {
        height: 75%;
    }
    @media only screen and (max-width: 420px) {
        width: 80%;
    }
`;
export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Dots = styled.div`
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
    color: #2C2C2C;

    &:hover {
        color: black;
        text-shadow: 0px 0px 5px #2C2C2C
    }
`;
export const RightArrow = styled.div`
    color: white;
    position: absolute;
    top: calc(50% - 10px);
    right: 0;
    font-size: 20px;
    font-family: Inter;
    font-weight: 300;
    padding:10px;
    background-color: black;
    opacity: 0.8;
    z-index: 5;
    cursor: pointer;
    border-radius: 10% 0 0 10%;

    &:hover{
        box-shadow: 0px 0px 5px #C2C2C2;
        transition: 0.5s;
}
`;
export const LeftArrow = styled.div`
    color: white;
    position: absolute;
    top: calc(50% - 10px);
    left: 0;
    font-size: 20px;
    font-family: Inter;
    font-weight: 300;
    padding:10px;
    background-color: black;
    opacity: 0.8;
    z-index: 5;
    cursor: pointer;
    border-radius: 0 10% 10% 0;

    &:hover{
        box-shadow: 0px 0px 5px #C2C2C2;
        transition: 0.5s;
    }
`;