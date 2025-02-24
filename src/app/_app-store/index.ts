import { useAuthStore } from "./auth-store";
import { useGlobalStore } from "./global-store";

const useStore = () => ({
  ...useAuthStore(),
  ...useGlobalStore(),
});

export default useStore;
