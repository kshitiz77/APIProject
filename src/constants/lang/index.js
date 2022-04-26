import LocalizedStrings from "react-native-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./en";
import fr from './fr'
let strings = new LocalizedStrings({
    en: en,
    fr: fr
});

export const changeLaguage = async (languageKey )=> {
  console.log("languageKey", languageKey)
  await AsyncStorage.setItem('applanguage', languageKey)
    strings.setLanguage(languageKey);
  };

export default strings;