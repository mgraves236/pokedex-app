import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    body {
        background: ${({theme}:{theme:any}) => theme.body};
        color: ${({theme}:{theme:any}) => theme.modalFont};
    }
    
    .modal-background {
        background-color:  ${({theme}:{theme:any}) => theme.modalBackground};
    }
    
    .modal-container {
        color: ${({theme}:{theme:any}) => theme.modalFont};
    }

`;

export const lightTheme = {
    body: '#ffffff',
    modalBackground: '#f6f6f6',
    modalFont: '#5b5b5b'
}

export const  darkTheme = {
    body: '#000a1e',
    modalBackground: '#303252',
    modalFont: '#ffffff'
}

