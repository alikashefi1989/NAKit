import LanguageModel from './language-model'


export interface StoreDataModel {
    language: LanguageModel
    darkMode: boolean
}

export interface StoreActionModel {
    setLanguage: (language: StoreDataModel['language']) => void
    setDarkMode: (darkMode: StoreDataModel['darkMode']) => void
}

type StoreModel = StoreDataModel & StoreActionModel

export default StoreModel