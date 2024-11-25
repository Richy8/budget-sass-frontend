// const { EventEmitter } = require("fbemitter");

class serviceUtils {
  timestamp = new Date().getTime();
  //   emitter = new EventEmitter();

  urlHash(url: string) {
    return url.includes("?")
      ? `${url}&timestamp=${this.timestamp}`
      : `${url}?timestamp=${this.timestamp}`;
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  formatNumber(value: number): string {
    if (value >= 1_000_000) {
      // Format for 1 million and above
      const millions = value / 1_000_000;
      return millions.toFixed(1) + "M";
    } else if (value >= 1_000) {
      // Format for thousands and append '.00'
      return value.toLocaleString() + ".00";
    } else {
      // Format for less than 1000 and append '.00'
      return value.toFixed(2);
    }
  }

  formatNumberWithCommas(number: number) {
    if (typeof number !== "number") {
      throw new Error("Input must be a number");
    }
    return number.toLocaleString("en-US");
  }

  getStorage({
    storage_name,
    storage_type = "string",
  }: {
    storage_name: string;
    storage_type?: "string" | "object";
  }): string | object | null {
    if (typeof window === "undefined") return null;
    const stored_data = localStorage.getItem(storage_name);
    return storage_type === "string"
      ? stored_data
      : stored_data
      ? JSON.parse(stored_data)
      : null;
  }

  setStorage({
    storage_name,
    storage_value,
    storage_type = "string",
  }: {
    storage_name: string;
    storage_value: string | number | object;
    storage_type?: "string" | "object";
  }): void {
    if (typeof window === "undefined") return;
    if (storage_type === "string") {
      localStorage.setItem(storage_name, storage_value as string);
    } else {
      localStorage.setItem(storage_name, JSON.stringify(storage_value));
    }
  }

  removeStorage(storage_name: string): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(storage_name);
  }
}

export default new serviceUtils();
