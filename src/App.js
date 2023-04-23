import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import i18n from 'i18next';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { initializeI18n } from "./utils/utils";


initializeI18n();

const App = () => {
  const { t } = useTranslation();
  
  const personalDetails = {
    name: "Daniel Aiyelu",
    location: t('about.current-location'),
    email: "aiyeludaniel@gmail.com",
    availability: t('about.my-availability'),
    brand:
      t('about.my-brand'),
  };


  return (
    <>
    <I18nextProvider i18n={i18n}>
      <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
    </I18nextProvider>
    </>
  );
}

export default App;
