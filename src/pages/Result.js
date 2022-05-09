import React from 'react';
//css-in-js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import { Navigate, useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultData';

const Result = () => {
    const navigate = useNavigate();    

    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage>
                    <img src={ResultData[0].image} className="rounded-circle" width={350} height={350} />
                </LogoImage>
                <Desc>예비집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다!</Desc>
                <Button style={{fontFamily: "SimKyungha"}} onClick={()=>navigate("/")}>테스트 다시하기</Button>
            </Contents>
        </Wrapper>
    );
}

export default Result;


//import styled from 'styled-components';
const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "SimKyungha";
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "SimKyungha";
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
    font-family: "SimKyungha";
`