import styled from 'styled-components'

export const DivWrapper = styled.div.attrs(props => ({
    color: props.color || 'blue'
}))`
    .header {
        font-size: 50px;
    }
    .content {
        background-color: red;
    }
    .test {
        font-size: ${({ theme }) => theme.size}px;
        color: ${props => props.color};
    }
`

const MyBtn = styled.button`
    background-color: blue;
`

export const MyBtnWrapper = styled(MyBtn)`
    border-radius: 50%;
`