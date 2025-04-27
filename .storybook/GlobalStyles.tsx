// .storybook/GlobalStyles.tsx
import { Global } from '@emotion/react';
import React, { useMemo } from 'react';
import LanguageModel from '../src/models/language-model';
import useStore from '../src/state-management/store';
import StoreModel from '../src/models/store-model';


const GlobalStyles = () => {
    const direction: LanguageModel['dir'] = useStore<LanguageModel['dir']>((store: StoreModel) => store.language.dir)

    const appFont: string = useMemo(() => (
        direction === 'ltr'
            ? 'url(/fonts/en/Inter-Regular.ttf)'
            : 'url(/fonts/fa/IRANSansXFaNum-Regular.ttf)'
    ), [direction])


    return (
        <Global
            styles={{
                '@font-face': {
                    fontFamily: 'app-font',
                    src: appFont,
                },
                body: {
                    fontFamily: 'app-font',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    direction: direction,
                    width: '100vw',
                    minWidth: '100vw',
                    maxWidth: '100vw',
                    height: '100vh',
                    minHeight: '100vh',
                    maxHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    WebkitTapHighlightColor: 'transparent',
                    backgroundColor: 'lightgray',
                    '@font-face': {
                        fontFamily: 'app-font-fa',
                        src: 'url(/fonts/fa/IRANSansXFaNum-Regular.ttf)',
                    },
                    '> #root': {
                        fontFamily: 'app-font',
                        margin: 0,
                        padding: 0,
                        border: 'none',
                        direction: direction,
                        width: '100vw',
                        minWidth: '100vw',
                        maxWidth: '100vw',
                        height: '100vh',
                        minHeight: '100vh',
                        maxHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        WebkitTapHighlightColor: 'transparent',
                    }
                }
            }}
        />
    )
}

export default GlobalStyles;
