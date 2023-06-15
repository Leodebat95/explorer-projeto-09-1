import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;    // é o número de colunas que terá o grid, contendo a largura de cada coluna
  grid-template-rows: 116px 133px auto;    // é o número de linhas que terá o grid, contendo a altura de cada linha
  grid-template-areas:    // é a forma (áreas) que o grid será distribuído
    "header"
    "title"
    "content";
  
  background: ${({ theme }) => theme.COLORS.DARK_GRAY};
`

export const Title = styled.div`
  grid-area: title;

  padding: 0 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #buttons {
    width: 210px;
    padding: 0 28px;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    svg {
      transform: scale(1.1);
      color: ${({ theme }) => theme.COLORS.DARK_GRAY};
    }
  }
`


export const Content = styled.div`
  grid-area: content;

  padding: 0 8px 0 123px;
  margin-right: 123px;
  margin-bottom: 60px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    border: none;
    outline: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FF859B;
    min-height: 70px;

    border: none;
    border-radius: 8px;
    outline: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #FF859B;
  }
`
