import styled from "styled-components/native";

export const LoginComponent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: lightblue;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    background-color: white;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 120px;
    height: 50px;
    border-radius: 5px;
`;
