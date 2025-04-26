import { StoreDataModel } from '../models/store-model'

const defaultStorage: StoreDataModel = {
    language: { label: 'persian', value: 'fa', dir: 'rtl' },
    darkMode: false,
}

const cookieToStore = (persistedStoreName: string, cacheActive: boolean): StoreDataModel => {
    if (!cacheActive) return defaultStorage
    const cookie = document.cookie
    if (typeof cookie !== 'string') return defaultStorage
    const splitedCookie: Array<string> = cookie.split('; ')
    const cookieByField: Record<string, string> = {}
    for (let i = 0; i < splitedCookie.length; i++) {
        const key: string = splitedCookie[i].split('=')[0]
        const value: string = splitedCookie[i].split('=')[1]
        cookieByField[key] = value
    }
    if (!Object.keys(cookieByField).includes(persistedStoreName)) return defaultStorage
    try {
        return JSON.parse(cookieByField[persistedStoreName])
    } catch {
        return defaultStorage
    }
}

export default cookieToStore