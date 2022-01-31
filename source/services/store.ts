import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "https://rent-flip.herokuapp.com/api/v1";

class Store {
  async storeToken<t>(key: string, data: t) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn(e);
    }
  }

  async getToken(key: any) {
    try {
      let token = await AsyncStorage.getItem(key);
      return token != null ? JSON.parse(token) : null;
    } catch (e) {
      console.warn(e);
    }
  }

  async deleteToken(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.warn(e);
    }
  }
}

export default new Store();
