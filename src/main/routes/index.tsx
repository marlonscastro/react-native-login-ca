import AuthStack from "./auth-stack";
import AppStack from "./app-stack";

const Routes = () => {
  const signed = false
  return signed ? <AppStack /> : <AuthStack />
}

export default Routes;