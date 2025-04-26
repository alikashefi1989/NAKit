import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import StoreModel, { StoreDataModel } from '../models/store-model'
import cookieToStore from './cookie-parser'

export const persistedStoreName: string = 'nak-afra-crm-system'

const persistedDataInCookie: StoreDataModel = cookieToStore(persistedStoreName, false)

const useStore = create<StoreModel, any>(
    persist((set, _) => ({
        language: persistedDataInCookie.language,
        setLanguage: (language: StoreModel['language']) => {
            set({ language })
        },
        darkMode: persistedDataInCookie.darkMode,
        setDarkMode: (darkMode: StoreModel['darkMode']) => {
            set({ darkMode })
        }
    }),
        {
            name: persistedStoreName,
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

export default useStore